import { Container, SimpleGrid, Box, Text, Flex, Spacer, VStack } from "@chakra-ui/react";
import { RiVuejsFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'
import { useState } from "react";
import { motion } from "framer-motion";

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
                <Box pos="relative" h={{ base: 'calc(100vh - 12rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' onMouseOver={over} onMouseOut={out}>
                    <Box bgImage="url('/Poligrafia-łowicz.png')" bgSize='cover' rounded='xl' position="absolute" top='0' right='0' left='0' bottom='0'  zIndex='-2' opacity='0.85' transition='0.5s' _groupHover={{ opacity: '0.1', transition: '0.3s'}}/>
                    <Flex>
                        <Text color="white" m={4} p={2} rounded='xl' bg="blackAlpha.900" fontSize={14} fontFamily='JetBrains Mono  , Poppins' fontWeight='bold' letterSpacing='wide'>Poligrafia Łowicz</Text>
                        <Spacer />
                        <Box  m={4} p={2} rounded='xl' bg="blackAlpha.900" h='100%'>
                            <Flex gap={2}>
                                <RiVuejsFill color='green' fontSize={20} />
                                <IoLogoJavascript  color='yellow' fontSize={20} />
                            </Flex>
                        </Box>
                    </Flex>
                    {isHovered &&
                    <VStack>
                    <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}><Text >test1</Text></motion.div>
                    <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}><Text >test2</Text></motion.div>
                    <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}><Box >test3    </Box></motion.div>
                    </VStack>}
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