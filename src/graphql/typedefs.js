const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        customerBalances: [Customer!]!
        customerBalance(msisdn:String): Customer
        users: [User!]!
        user(msisdn:String): User
        userTMF(msisdn:String): UserTMF
    },
    type Customer {
        msisdn: String,
        balances: [Balance!]!,
    },
    type Balance {
        serviceType: String,
        totalRemaining: String,
        bundle:[Bundle!]!
    },
    type Bundle {
        name: String
        remaining: String
        expiryDate: String,
        expiryTime: String,
    }
    type User {
        fullName: String,
        familyName: String,
        gender: String,
        title: String,
        birthDate: String,
        userName: String,
        userAccess: String,
        contactInfo: ContactInfo!,
        childNumbers: [String],
    }
    type ContactInfo{
        phoneNumber: String,
        emailAddress: String
    }
    type UserTMF {
        fullName: String,
        familyName: String,
        gender: String,
        title: String,
        birthDate: String,
        userName: String,
        contactMedium: ContactMedium!
    }
    type ContactMedium {
        characteristic: Characteristic!
        partyCharacteristic: [partyCharacteristic]
    }
    type Characteristic {
        phoneNumber: String,
        emailAddress: String
    }
    type partyCharacteristic {
        name: String,
        value: String
    }
`

module.exports = { typeDefs }
