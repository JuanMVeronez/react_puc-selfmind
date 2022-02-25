import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './app/styles/theme';

import { Header } from './app/components/Header';
import { CasesProvider } from './app/hooks/casesContext';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <CasesProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </CasesProvider>
  );
}