import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from "@apollo/client";

import { theme } from './app/styles/theme';
import { Header } from './app/components/Header';
import { CasesProvider } from './app/hooks/casesContext';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { gqlClient } from './app/services/server';


export function App() {
  return (
    <ApolloProvider client={gqlClient}>
      <CasesProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        </ChakraProvider>
      </CasesProvider>
    </ApolloProvider>
  );
}