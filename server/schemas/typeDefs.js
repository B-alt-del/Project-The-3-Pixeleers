const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
    }

    type Query {
    }

    type Mutation {
        addUser(email: String!, password: String!): User
    }
`;

module.exports = typeDefs;