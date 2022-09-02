const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!,
        username: String!,
        email: String!
    }

    type Auth {
        user: User
        token: ID
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        addUser(email: String!, username: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        deleteUser(email:String!, password: String!): Auth
    }
`;

module.exports = typeDefs;