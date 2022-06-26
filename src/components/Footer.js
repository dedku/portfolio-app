import {
    Box,
    Center,
    Container,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';



  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('blackAlpha.300', '#20202380')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          justify='center'
          align={{ base: 'center', md: 'center' }}>
          <Center>© 2022 Patryk Szabat. All rights reserved</Center>
        </Container>
      </Box>
    );
  }