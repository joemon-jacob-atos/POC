require('dotenv').config()
const twofactor = require("node-2fa");
var customer = ""
const { customerInfo } = require("../db");
const jsonwebtoken = require('jsonwebtoken');
const { logger } = require('../utils/logger');

async function otpGeneration(req, res, next) {
    try {
        if (!req.body.userName) {
            customer = customerInfo.find((customerInfo) => customerInfo.contactInfo.phoneNumber === req.body.phoneNumber && customerInfo.password === req.body.password)

        } else {
            customer = customerInfo.find((customerInfo) => customerInfo.userName === req.body.userName && customerInfo.password === req.body.password)
        }
        if (!customer) {
            logger.error("Please enter proper credentials")
            res.status(400).send("Please enter proper credentials");
            return;
        }
        newSecret = await twofactor.generateSecret({ userName: req.body.userName, password: req.body.password });
        process.env.NODE2FA_SECRET = newSecret.secret
        const accessCode = await twofactor.generateToken(process.env.NODE2FA_SECRET);
        var result = {
            otp: accessCode.token
        }
        res.status(200).send(result);
        return;
    }
    catch (error) {
        logger.error(`Caught error: ${error}`);
        console.error(error);
    }

}

async function verifyOtp(req, res, next) {
    try {
        const verification = await twofactor.verifyToken(process.env.NODE2FA_SECRET, req.body.otp, 5);
        if (verification == null || verification.delta === !0) {
            res.status(400).send("Otp verification failed. Please input correct OTP")
            return;
        }
        jwtToken = jsonwebtoken.sign(
            { phoneNumber: customer.contactInfo.phoneNumber, emailAddress: customer.contactInfo.emailAddress },
            process.env.JWT_SECRET, { algorithm: 'HS256' },
            { expiresIn: '1h' })
        var payload = {
            result: "Otp verification successful",
            token: jwtToken
        }
        res.status(200).send(payload)
        return;
    }
    catch (error) {
        logger.error(`Caught error: ${error}`);
        console.error(error);
    }
}

async function verifyJwt(req, res, next) {
    try {
        if (!req.headers.authorization) {
            logger.error("Unauthenticated. Please add bearer token.");
            res.status(401).send("Unauthenticated. Please add bearer token.");
            return;
        }
        const values = req.headers.authorization.split(' ');
        let verified = null;
        verified = await jsonwebtoken.verify(values[1], process.env.JWT_SECRET, function (err, decode) {
            if (err) {
                logger.error("Invalid Token. Please enter correct JWT token")
                return res.status(403).send("Invalid Token. Please enter correct token");
            }
            return next();
        });
    }
    catch (error) {
        logger.error("Jwt verification service failed")
        console.error(error)
    }
}

module.exports = { otpGeneration, verifyOtp, verifyJwt }