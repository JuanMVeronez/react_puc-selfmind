import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './app/styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1> Teste </h1>
    </ChakraProvider>
  );
}