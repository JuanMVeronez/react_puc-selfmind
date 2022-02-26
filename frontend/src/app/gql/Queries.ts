import { gql } from "@apollo/client";

export const LOAD_CASES = gql`
    query {
        getAllCases {
            id,
            name,
            age,
            text
        }
    }
`;

export const LOAD_CLIENTS = gql`
    query {
        getAllCases {
            id,
            name,
            age,
            phone,
            email
        }
    }
`;