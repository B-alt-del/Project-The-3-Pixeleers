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
        # colorArr: [Rows]
    }

    # type Rows {
    #     # row: [{Color:String}]
    #     row: [Cell]
    # }

    # type Cell {

    #     Color:String
    # }

    # input PXLinput {
    #     name: String,
    #     width: String,
    #     height: String
    #     colorArr: String!
    #     # colorArr: [Rows]
    # }

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
        addUser(email: String!, username: String!, password: String!): Auth
        loginUser(email: String, username: String, password: String!): Auth
    }
`;

module.exports = typeDefs;