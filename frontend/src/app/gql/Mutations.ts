import { gql } from "@apollo/client";

export const CREATE_CASE_MUTATION = gql`
    mutation createCase(
        $name: String!,
        $age: Int,
        $phone: String,
        $email: String!,
        $text: String!
    ) {
        createCase(
        name: $name,
        age: $age,
        phone: $phone,
        email: $email,
        text: $text
        ) {
            nome,
            age,
            text
        }
    }
`
