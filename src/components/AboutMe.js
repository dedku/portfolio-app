import { Box, Container, Flex, Heading, chakra, Image, Text, Spacer, Center, useColorModeValue, Button} from '@chakra-ui/react'
import Motion from './Motion'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const scrollTo = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute('href')
  const location = document.querySelector(target).offsetTop
  window.scrollTo({left:0, top: location - 44});
};

const AboutMe = () => {
    return (
        <Container maxW="container.xl">
        <Motion>
        <Flex
          gap={4}
          align="center"
          justify="center"
          minW="100%"
          basis="auto"
          wrap={{ base: 'wrap', md: 'nowrap' }}
          pt={20}
          mb={16}
        >
          <Box w="100%" h={{ base: 'calc(50vh - 6rem)', md: 'calc(50vh - 10rem)' }}  maxH='400px'>
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
                    <Box flexGrow={1} pt={{ base: '8', md: '4' }} ml={{base: '8', md: '2'}}>
                        <Heading
                            as="h2"
                            variant="page-title"
                            fontFamily='JetBrains Mono  , Poppins'
                            fontWeight="bold"
                            alignContent='start'
                            size={{sm: 'lg', md: 'xl'}}
                            >
                            Patryk Szabat
                        </Heading>
                      <Text fontFamily='JetBrains Mono  , Poppins'>Junior Software Craftsman</Text>
                    </Box>
                </Box>
                <Spacer />
                <Box
                    rounded='xl'
                    mt={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.100')}
                    css={{ backdropFilter: 'blur(10px)' }}
                    fontSize='sm'
                    fontFamily='JetBrains Mono  , Poppins'
                    >
                    Hello, I&apos;m an frontend developer based in Poland!
                </Box>
            </Container>
            </Center>
          </Box>
          <Box
            bg={useColorModeValue('blackAlpha.800', 'whiteAlpha.100')}
            rounded='xl'
            w="100%"
            h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh - 10rem)' }}
            alignItems="center"
            maxH='400px'
            minH='240px'
          >
            <Center h="100%" mx={6} flexDirection="column">
              <Text fontSize={{base: 'sm', md: 'xs'}} as="samp" fontFamily='JetBrains Mono  , Poppins' >
                <chakra.span color="#80FFEA">const </chakra.span>
                <chakra.span color="#58a6ff">AboutMe </chakra.span>
                <chakra.span color="#FF80BF"> =</chakra.span>
                <chakra.span color="white"> &#123;</chakra.span>
                <chakra.br />
                <chakra.span ml={2} color="#FF80BF">experience:</chakra.span>
                <chakra.span color="#FFFF80">'1-2 years'</chakra.span>
                <chakra.span color="white">&#44;</chakra.span>
                <chakra.br />
                <chakra.span ml={2} color="#FF80BF">code:</chakra.span>
                <chakra.span color="white">&#91;</chakra.span>
                <chakra.span color="#58a6ff">Javascript</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">Typescript</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">HTML</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">CSS</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">PHP</chakra.span>
                <chakra.span color="white">&#93;</chakra.span>
                <chakra.span color="white">&#44;</chakra.span>
                <chakra.br />
                <chakra.span ml={2} color="#FF80BF">tools:</chakra.span>
                <chakra.span color="white">&#91;</chakra.span>
                <chakra.span color="#58a6ff">React</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">Vue</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">Vuex</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">KeystoneJS</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">Tailwind</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">Bootstrap</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#58a6ff">Sass</chakra.span>
                <chakra.span color="white">&#93;</chakra.span>
                <chakra.span color="white">&#44;</chakra.span>
                <chakra.br />
                <chakra.span ml={2} color="#FF80BF">learning:</chakra.span>
                <chakra.span color="white">&#91;</chakra.span>
                <chakra.span color="#FFFF80">'Redux-Toolkit'</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#FFFF80">'Styled-components'</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#FFFF80">'Next-js'</chakra.span>
                <chakra.span color="white">&#44; </chakra.span>
                <chakra.span color="#FFFF80">'Chakra-ui'</chakra.span>
                <chakra.span color="white">&#93;</chakra.span>
                <chakra.br />
                <chakra.span color="white">&#125;</chakra.span>
              </Text>
              <Flex gap={4} fontFamily='JetBrains Mono  , Poppins'>
              <Button bg="#007acc" fontSize={14}>Download CV</Button>
              <Button bg="#007acc" fontSize={14} onClick={scrollTo} display={{sm: 'inline-block', md: 'none'}} href='#projects'>My Projects</Button>
              </Flex>
            </Center>
          </Box>
        </Flex>
        </Motion>
      </Container>
    )
}

export default AboutMe