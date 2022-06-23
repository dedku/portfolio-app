import { Container, SimpleGrid, Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { RiVuejsFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'
import { useState } from "react";

const Projects = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    function over(e) {
        setIsHovered(true)
    }

    function out(e) {
        setIsHovered(false)
    }

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
            <Box role='group'>
                <Box pos="relative" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' >
                    <Box bgImage="url('/Poligrafia-łowicz.png')" bgSize='cover' rounded='xl' position="absolute" top='0' right='0' left='0' bottom='0'  zIndex='-2' opacity='0.85' _groupHover={{ opacity: '0.1', transition: '0.5s all ease'}}/>
                    <Flex>
                        <Text color="white" m={4} p={2} rounded='xl' bg="blackAlpha.900" fontSize={14} fontFamily='JetBrains Mono  , Poppins'>Poligrafia Łowicz</Text>
                        <Spacer />
                        <Box  m={4} p={2} rounded='xl' bg="blackAlpha.800" h='100%'>
                            <Flex gap={2}>
                                <RiVuejsFill color='green' fontSize={22} />
                                <IoLogoJavascript  color='yellow' fontSize={22} />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box bg="papayawhip" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={4}  />
            <Box bg="papayawhip" h={{ base: 'calc(100   vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={4}  />
            <Box bg="papayawhip" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} borderRadius={4}  />
        </SimpleGrid>
    </Container>
    )
}

export default Projects