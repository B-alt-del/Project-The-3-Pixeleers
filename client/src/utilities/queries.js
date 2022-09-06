import {gql} from '@apollo/client';

export const GET_USERS = gql`
    query GetUsers {
        getUsers{
            email
            username
        }
    }`

export const GET_PXLS = gql`
    query getPXLs{
        getPXLs{
            name
            colorArr
        }
    }
`