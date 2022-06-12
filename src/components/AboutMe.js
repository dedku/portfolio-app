import { Box, Heading, chakra, Image, Text, Container, Spacer, useColorModeValue } from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const About = () => {
    return (
        <Container>
        <Box display='flex' >
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          mr={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.600')}
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/tło.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        <Spacer />
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            fontFamily='JetBrains Mono  , Poppins'
            fontWeight="bold"
            >
            Patryk Szabat
          </Heading>

          <Text fontFamily='JetBrains Mono  , Poppins'>Junior Software Craftsman</Text>
        </Box>
        </Box>
        <Box
            borderRadius="lg"
            mt={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.500')}
            css={{ backdropFilter: 'blur(10px)' }}
            >
            Hello, I&apos;m an junior frontend developer based in Poland!
            </Box>
        </Container>
    )
}

export default About