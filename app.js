const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } = require("apollo-server-core");
const { typeDefs } = require("./src/graphql/typedefs");
const { resolvers } = require("./src/graphql/resolvers");
const express = require("express");
const http = require("http");
const cors = require('cors');
const { otpGeneration, verifyOtp, verifyJwt } = require("./src/authentication");
const { report } = require("./src/report");
const { customersBalances, customerInfo } = require("./db");
const { logger } = require('./utils/logger');
require('dotenv').config()

const app = express();
const httpServer = http.createServer(app);
PORT = process.env.PORT

app.use(cors());

app.use(express.json());

app.post('/otp', (req, res) => {
    otpGeneration(req, res);
})

app.post('/verify', (req, res) => {
    verifyOtp(req, res);
})

app.get('/report', (req, res, next) => {
    report(req, res, next)
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
        customersBalances,
        customerInfo,
        user: req.user
    }),
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({ embed: true })],
})

async function startApolloServer(typeDefs, resolvers) {
    try {
        await server.start();
        app.use('/graphql', (req, res, next) => verifyJwt(req, res, next));
        server.applyMiddleware({ app, path: '/graphql' });
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
        })
    }
    catch (error) {
        logger.error("Server failed to start")
        console.error(error);
    }

}

startApolloServer(typeDefs, resolvers);
