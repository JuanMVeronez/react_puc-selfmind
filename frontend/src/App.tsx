import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './app/styles/theme';

import { Header } from './app/components/Header';
import { Content } from './app/components/Content';
import { Cases } from './app/components/Cases';
import { CasesProvider } from './app/contexts/casesContext';

export function App() {
  return (
    <CasesProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Content />
        <Cases />
      </ChakraProvider>
    </CasesProvider>
  );
}