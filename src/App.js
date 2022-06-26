import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customeTheme from './lib/theme';
import Navbar from './components/Navbar';
import Fonts from './components/Fonts';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={customeTheme}>
      <Fonts />
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
