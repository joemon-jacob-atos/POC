const customersBalances = [
  {
    msisdn: "8889995550",
    balances: [
      {
        serviceType: "Voice",
        totalRemaining: "100mts",
        bundle: [
          {
            name: "VODACOM ZA Voice",
            remaining: "100mts",
            expiryDate: "21/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "Data",
        totalRemaining: "700.00MB",
        bundle: [
          {
            name: "VODACOM ZA Data",
            remaining: "350.00 MB",
            expiryDate: "21/11/2022",
            expiryTime: "23:59"
          },
          {
            name: "VODACOM ZA SUPER Data",
            remaining: "350.00 MB",
            expiryDate: "22/10/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "SMS",
        totalRemaining: "100",
        bundle: [
          {
            name: "VODACOM ZA+ SMS",
            remaining: "100",
            expiryDate: "20/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "MMS",
        totalRemaining: "0",
        bundle: []
      }
    ]
  },
  {
    msisdn: "8812345678",
    balances: [
      {
        serviceType: "Voice",
        totalRemaining: "110mts",
        bundle: [
          {
            name: "VODACOM ZA Voice",
            remaining: "110mts",
            expiryDate: "10/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "Data",
        totalRemaining: "700.00MB",
        bundle: [
          {
            name: "VODACOM ZA Data",
            remaining: "700.00 MB",
            expiryDate: "11/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "SMS",
        totalRemaining: "150",
        bundle: [
          {
            name: "VODACOM ZA+ SMS",
            remaining: "150",
            expiryDate: "14/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "FTTH",
        bundle: [
          {
            name: "VODACOM ZA 40Mbps + Free Telephone",
            expiryDate: "20/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "MMS",
        totalRemaining: "0",
        bundle: []
      }
    ]
  },
  {
    msisdn: "4412345678",
    balances: [
      {
        serviceType: "Voice",
        totalRemaining: "90mts",
        bundle: [
          {
            name: "VODACOM ZA Voice",
            remaining: "90mts",
            expiryDate: "15/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "Data",
        totalRemaining: "250.00MB",
        bundle: [
          {
            name: "VODACOM ZA Data",
            remaining: "250.00 MB",
            expiryDate: "23/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "SMS",
        totalRemaining: "60",
        bundle: [
          {
            name: "VODACOM ZA+ SMS",
            remaining: "60",
            expiryDate: "30/10/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "FTTH",
        bundle: [
          {
            name: "VODACOM ZA 40Mbps + Free Telephone",
            expiryDate: "25/11/2022",
            expiryTime: "10:59"
          }
        ]
      },
      {
        serviceType: "MMS",
        totalRemaining: "0",
        bundle: []
      }
    ]
  },
  {

    msisdn: "7777888899",
    balances: [
      {
        serviceType: "Voice",
        totalRemaining: "200mts",
        bundle: [
          {
            name: "VODACOM ZA Voice",
            remaining: "200mts",
            expiryDate: "30/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "Data",
        totalRemaining: "750.00MB",
        bundle: [
          {
            name: "VODACOM ZA Data",
            remaining: "750.00 MB",
            expiryDate: "30/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "SMS",
        totalRemaining: "100",
        bundle: [
          {
            name: "VODACOM ZA+ SMS",
            remaining: "100",
            expiryDate: "30/11/2022",
            expiryTime: "23:59"
          }
        ]
      },
      {
        serviceType: "MMS",
        totalRemaining: "0",
        bundle: []
      }
    ]
  }
]

const customerInfo = [
  {
    fullName: "Billy Collins",
    familyName: "Collins",
    gender: "M",
    title: "MR",
    birthDate: "20-05-1995",
    userName: "billy",
    userAccess: "admin",
    contactInfo: {
      phoneNumber: "8889995550",
      emailAddress: "billycollins@gmail.com"
    },
    childNumbers: [
      8812345678,
      4412345678
    ],
    password: "222222"
  },
  {
    fullName: "ChildNumber1 Collins",
    familyName: "Collins",
    gender: "M",
    title: "MR",
    birthDate: "20-05-1995",
    userName: "childNumber1",
    userAccess: "user",
    contactInfo: {
      phoneNumber: "8812345678",
      emailAddress: "childNumber1@gmail.com"
    },
    childNumbers: [],
    password: "222222"
  },
  {
    fullName: "ChildNumber2 Collins",
    familyName: "Collins",
    gender: "M",
    title: "MR",
    birthDate: "20-05-1995",
    userName: "childNumber2",
    userAccess: "user",
    contactInfo: {
      phoneNumber: "4412345678",
      emailAddress: "childNumber2@gmail.com"
    },
    password: "222222"
  },
  {
    fullName: "Mary Collins",
    familyName: "Collins",
    gender: "M",
    title: "MRS",
    birthDate: "17-05-1997",
    userName: "mary",
    userAccess: "user",
    contactInfo: {
      phoneNumber: "7777888899",
      emailAddress: "marycollins@gmail.com"
    },
    password: "333333"
  }
]

const reportDetails = {
  loginAttempts: 250,
  successfulLogins: 230,
  otpFaliures: 20,
  helpButtonUsed: 10,
  queriesAttempted: {
    user: 230,
    customerBalance: 220,
    childNumberBalances: 170
  }

}

module.exports = { customersBalances, customerInfo, reportDetails }