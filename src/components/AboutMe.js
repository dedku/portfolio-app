import { Box, Container, Flex, Heading, chakra, Image, Text, Spacer, Center, useColorModeValue } from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const AboutMe = () => {
    return (
        <Container maxW="container.xl">
        <Flex
          gap={4}
          align="center"
          justify="center"
          minW="100%"
          basis="auto"
          wrap={{ base: 'wrap', md: 'nowrap' }}
          pt={16}
        >
          <Box w="100%" h={{ base: 'calc(50vh - 4rem)', md: '56' }}>
            <Center h="100%">
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
                <Box flexGrow={1} pt={{ base: '8', md: '4' }}>
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
            </Center>
          </Box>
          <Box
            bg="whiteAlpha.200"
            borderRadius={4}
            w="100%"
            h={{ base: 'calc(50vh - 4rem)', md: '56' }}
            alignItems="center"
          >
            <Center h="100%" mx={8}>
              <Text fontSize="sm" as="samp">
                <chakra.span color="#FF80BF">const </chakra.span>
                <chakra.span color="#8AFF80">AboutMe </chakra.span>
                <chakra.span color="#FF80BF"> =</chakra.span>
                <chakra.span color="white"> &#123;</chakra.span>
                <chakra.br />
                <chakra.span color="#80FFEA">experience:</chakra.span>
                <chakra.span color="#FFFF80">'1-2 years'</chakra.span>
                <chakra.span color="white">&#44;</chakra.span>
                <chakra.br />
                <chakra.span color="#80FFEA">code:</chakra.span>
                <chakra.span color="white">&#91;</chakra.span>
                <chakra.span color="#8AFF80">Javascript</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">Typescript</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">HTML</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">CSS</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">PHP</chakra.span>
                <chakra.span color="white">&#125;</chakra.span>
                <chakra.span color="white">&#44;</chakra.span>
                <chakra.br />
                <chakra.span color="#80FFEA">tools:</chakra.span>
                <chakra.span color="white">&#91;</chakra.span>
                <chakra.span color="#8AFF80">React</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">Vue</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">KeystoneJS</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">Strapi</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">Tailwind</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">Bootstrap</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#8AFF80">Sass</chakra.span>
                <chakra.span color="white">&#125;</chakra.span>
                <chakra.span color="white">&#44;</chakra.span>
                <chakra.br />
                <chakra.span color="#80FFEA">learning:</chakra.span>
                <chakra.span color="white">&#91;</chakra.span>
                <chakra.span color="#FFFF80">"Redux-Toolkit"</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#FFFF80">"Styled-components"</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#FFFF80">"Next-js"</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#FFFF80">"Chakra-ui"</chakra.span>
                <chakra.span color="white">&#125;</chakra.span>
                <chakra.br />
                <chakra.span color="white">&#125;</chakra.span>
              </Text>
            </Center>
          </Box>
        </Flex>
      </Container>
    )
}

export default AboutMe