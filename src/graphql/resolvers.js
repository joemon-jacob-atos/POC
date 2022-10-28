const resolvers = {
    Query: {
        customerBalances: (parent, args, { customersBalances }) => customersBalances,
        customerBalance: async (parent, { msisdn }, { customersBalances }, { user }) => {
            try {
                return customersBalances.find((customersBalances) => customersBalances.msisdn === msisdn);
            }
            catch (error) {
                console.error(error);
            }
        },
        users: (parent, args, { customerInfo }) => customerInfo,
        user: async (parent, { msisdn }, { customerInfo }, { contextObject }) => {
            try {
                return customerInfo.find((customerInfo) => customerInfo.contactInfo.phoneNumber === msisdn);
            }
            catch (error) {
                console.error(error);
            }
        },
        userTMF: async (parent, { msisdn }, { customerInfo }, { contextObject }) => {
            try {
                const customer = customerInfo.find((customerInfo) => customerInfo.contactInfo.phoneNumber === msisdn);
                var resultTMF = {
                    fullName: customer.fullName,
                    familyName: customer.familyName,
                    gender: customer.gender,
                    title: customer.title,
                    birthDate: customer.birthDate,
                    userName: customer.userName,
                    contactMedium:
                    {
                        characteristic: {
                            phoneNumber: customer.contactInfo.phoneNumber,
                            emailAddress: customer.contactInfo.emailAddress
                        },
                        partyCharacteristic: [
                            {
                                name: "ChildNumber",
                                value: customer.childNumbers[0]
                            }
                        ]
                    }
                }
                return resultTMF;
            }
            catch (error) {
                console.error(error);
            }
        },
    }
}

module.exports = { resolvers }
