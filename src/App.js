import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './lib/theme';
import Navbar from './components/Navbar';
import Fonts from './components/Fonts';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Navbar />
      <AboutMe />
    </ChakraProvider>
  );
}

export default App;
