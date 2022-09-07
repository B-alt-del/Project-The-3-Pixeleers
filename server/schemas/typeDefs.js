const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!,
        username: String!,
        email: String!
    }

    type PXL {
        _id: ID,
        name: String,
        width: String,
        height: String
        colorArr: String!
    }

    type Auth {
        user: User
        token: ID
    }

    type Query {
        getUsers: [User]
        getPXLs: [PXL]
    }

    type Mutation {
        addPXL( name: String, width: String, height: String, colorArr: String! ):  PXL
        delPXL(_id: ID!): PXL
        addUser(email: String!, username: String!, password: String!): Auth
        loginUser(email: String, username: String, password: String!): Auth
    }
`;

module.exports = typeDefs;