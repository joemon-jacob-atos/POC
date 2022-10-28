# Summary
This service implements a GraphQL microservice using apollo-server-express.
GQL Queries can be tested locally by running the service and accessing http://localhost:8000/graphql in a browser OR using applications like POSTMAN.
The application will require you to install node modules using npm install.
you can start the application using npm start.

##### Useful links

[Apollo Server introduction](https://www.apollographql.com/docs/apollo-server/)
[Apollo Server API](https://www.apollographql.com/docs/apollo-server/api/apollo-server/)
[Apollo Server graphql](https://graphql.org/code/#javascript)
[apollo-server-express](https://www.npmjs.com/package/apollo-server-express)

## Implementation pattern

Implementing a GraphQL query/mutation consists of the following steps:

1) Defining the query/mutation as part of the GQL Schema.
2) Defining the resolver(s) for the query/mutation.
3) Defining the data source to fetch populate the data.

#### Schema

The schema is implemented as part of the `src/graphql/typedefs` folder.

As schemas are limited for this POC, the typedefs are kept in one file.

See [schema](https://www.apollographql.com/docs/apollo-server/schema/schema/) for further reading and documentation.


#### Resolvers

Resolvers are the GQL equivalent of controllers in the REST world. The resolver is responsible for accepting the request and returning an object that matches the type definition for the requested resource.

See [resolvers](https://www.apollographql.com/docs/apollo-server/data/resolvers/) for further reading and documentation.

**Note:** Resolvers can be defined for any field in the schema. This allows for very sophisticated ways of fulfilling a request. Generally resolvers are defined at the Query/Mutation level, these are referred to as "top-level" resolvers. There is also the concept of "sub-resolvers".

#### Data sources

Data sources are the part of the service that are responsiblee for fetching data from external systems. Similar to the concept of clients in the REST services. Here, for this POC a js file is used to store related data which act as a DB.
However it is possible for data sources to fetch data directly from a DB by using different classes.

See [data sources](https://www.apollographql.com/docs/apollo-server/data/data-sources/) for further reading and documentation.

## Errors and logging

All errors are to error.log file using a third party npm package called winston.

## Request context

As part of every request, a context function attached to the server is run to generate a context object that can be used in any resolver. This context function has access to the `req` and `res` objects of the request and thus have access to any information exposed by those objects.

## Unit tests

Unit tests your GraphQL service should be done in testing the queries with different conditions. Unit Tests are written and npm packages mocha and chai are used. The test will require you to open a seperate terminal and run the script in package.json