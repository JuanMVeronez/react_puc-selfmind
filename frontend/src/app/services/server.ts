import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

const link = from([
  new HttpLink({ uri: "http://localhost:3001/graphql" })
])

export const gqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link
})