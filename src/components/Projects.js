import { Container, SimpleGrid, Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { RiVuejsFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'

const Projects = () => {
    return (
    <Container maxW="container.xl">
        <SimpleGrid
        columns={{ sm: 1, md: 2}}
        spacing='2rem'
        align="center"
        justify="center"
        minW="100%"
        pt={4}
        mb={8}
        >
            <Box bg="white" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={6}  >
                <Flex>
                    <Text color="black" m={4} p={2} borderRadius={8} bg="blackAlpha.300" fontSize={14}>Title</Text>
                    <Spacer />

                    <Box  m={4} p={2} borderRadius={8} bg="blackAlpha.300" h='100%'>
                    <Flex gap={2}>
                    <RiVuejsFill color='green' fontSize={18} />
                    <IoLogoJavascript  color='yellow' fontSize={18} />
                    </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box bg="papayawhip" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={4}  />
            <Box bg="papayawhip" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={4}  />
            <Box bg="papayawhip" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={4}  />
        </SimpleGrid>
    </Container>
    )
}

export default Projects