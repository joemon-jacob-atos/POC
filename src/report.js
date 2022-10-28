const { reportDetails } = require("../db");

async function report(req, res, next) {
    res.status(200).send(reportDetails);
    next();
}

module.exports = { report };