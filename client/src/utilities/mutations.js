import {gql} from '@apollo/client';

//CREATE     UPDATE      READ      DELETE


export const ADD_USER = gql`
    mutation addUser($email: String!, $username: String!, $password: String!){
        addUser(email: $email, username: $username, password: $password!){
            user{
                email
            }
            token
        }
    }`;
export const DELETE_USER = gql`
    mutation deleteUser($email:String!, $password:String!) {
        deleteUser(email: $email, password: $password!)
        user{
            email
        }
        token
    }

`

// export const DELETE_USER

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password!){
            user {
                email
            }
            token
        }
    }`;

// export const UPDATE_USER  //(change username or email or password)

// export const LOGOUT_USER

