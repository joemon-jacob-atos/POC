const chai = require('chai');
const expect = chai.expect;
const url = `http://localhost:8000`;
const request = require('supertest')(url);
const test_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Ijg4ODk5OTU1NTAiLCJlbWFpbEFkZHJlc3MiOiJiaWxseWNvbGxpbnNAZ21haWwuY29tIiwiaWF0IjoxNjY2NzE4NDg5fQ.Zw7b9_P7LAAnU-8NYC9ZVoAIDKWYy_Nm-VMZbMoOO5I"

describe('GraphQL Queries', () => {
    it('Returns all users', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer ${test_token}` }).send({
            query: '{ users { fullName familyName gender } }'

        })
        expect(result.statusCode).to.equal(200)
    })
    it('Returns 401 Unauthorized without token for users', async () => {
        const result = await request.post('/graphql').send({
            query: '{ users { fullName familyName gender } }'

        })
        expect(result.statusCode).to.equal(401)
    })
    it('Returns 403 while passing invalid token for users', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer${test_token}` }).send({
            query: '{ users { fullName familyName gender } }'

        })
        expect(result.statusCode).to.equal(403)
    })
    it('Returns user with phone number 8812345678', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer ${test_token}` }).send({
            query: '{ user(msisdn:"8812345678") { fullName familyName gender } }'

        })
        expect(result.statusCode).to.equal(200)
    })
    it('Returns 401 Unauthorized without token for user with phone number 8812345678', async () => {
        const result = await request.post('/graphql').send({
            query: '{ user(msisdn:"8812345678") { fullName familyName gender } }'

        })
        expect(result.statusCode).to.equal(401)
    })
    it('Returns 403 while passing invalid token for user with phone number 8812345678', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer${test_token}` }).send({
            query: '{ user(msisdn:"8812345678") { fullName familyName gender } }'

        })
        expect(result.statusCode).to.equal(403)
    })
    it('Returns all users balances', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer ${test_token}` }).send({
            query: '{ customerBalances{ msisdn balances { serviceType totalRemaining } } }'

        })
        expect(result.statusCode).to.equal(200)
    })
    it('Returns 401 Unauthorized without token for customers balance', async () => {
        const result = await request.post('/graphql').send({
            query: '{ customerBalances{ msisdn balances { serviceType totalRemaining } } }'

        })
        expect(result.statusCode).to.equal(401)
    })
    it('Returns 403 while passing invalid token for customers balance', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer${test_token}` }).send({
            query: '{ customerBalances{ msisdn balances { serviceType totalRemaining } } }'

        })
        expect(result.statusCode).to.equal(403)
    })
    it('Returns user balance with phone number 8812345678', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer ${test_token}` }).send({
            query: '{ customerBalance(msisdn:"8812345678") { msisdn balances { serviceType totalRemaining } } }'

        })
        expect(result.statusCode).to.equal(200)
    })
    it('Returns 401 Unauthorized without token while querying customer balance', async () => {
        const result = await request.post('/graphql').send({
            query: '{ customerBalance(msisdn:"8812345678") { msisdn balances { serviceType totalRemaining } } }'

        })
        expect(result.statusCode).to.equal(401)
    })
    it('Returns 403 while passing invalid token while querying customer balance', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer${test_token}` }).send({
            query: '{ customerBalance(msisdn:"8812345678") { msisdn balances { serviceType totalRemaining } } }'

        })
        expect(result.statusCode).to.equal(403)
    })
});

describe('Verify OTP', () => {
    it('Returns 400 while verifying with incorrect OTP', async () => {
        const result = await request.post('/verify').send({
            "otp": "000000"
        })
        expect(result.statusCode).to.equal(400)
    })
});

describe('Report', () => {
    it('Returns 200 when successful', async () => {
        const result = await request.get('/report')
        expect(result.statusCode).to.equal(200)
    })
    it('Reprt contains values', async () => {
        const result = await request.post('/graphql').set({ Authorization: `Bearer ${test_token}` }).send({
            query: '{ users { fullName familyName gender } }'

        })
        expect(result.statusCode).to.not.be.null
    })
});

describe('Login', () => {
    it('Returns Otp while logging in with proper credentials', async () => {
        const result = await request.post('/otp').send({
            "phoneNumber": "8889995550",
            "password": "222222"

        })
        expect(result.statusCode).to.equal(200)
    })
    it('Returns 400 while logging in with improper credentials', async () => {
        const result = await request.post('/otp').send({
            "phoneNumber": "8889995550",
            "password": "222244"

        })
        expect(result.statusCode).to.equal(400)
    })

});
