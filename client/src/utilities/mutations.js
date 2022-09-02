import {gql} from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($email: String!, $username: String!, $password: String!){
        addUser(email: $email, username: $username, password: $password){
            user{
                email
            }
            token
        }
    }`;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password){
            user {
                email
            }
            token
        }
    }`