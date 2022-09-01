const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!,
        username: String!,
        email: String!
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        addUser(email: String!, username: String!, password: String!): User
    }
`;

module.exports = typeDefs;