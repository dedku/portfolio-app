import { Container, SimpleGrid, Box, Text, Flex, Spacer, VStack, Button, Divider, Badge, Center, Tag } from "@chakra-ui/react";
import { RiVuejsFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'
import { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoGithub } from 'react-icons/io'
import { CgWebsite } from 'react-icons/cg'



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
                <Box pos="relative" h={{ base: 'calc(100vh - 4rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' onMouseOver={over} onMouseOut={out}>
                    <Box bgImage="url('/Poligrafia-łowicz.png')" bgSize='cover' rounded='xl' position="absolute" top='0' right='0' left='0' bottom='0'  zIndex='-2' opacity='0.85' transition='0.5s' _groupHover={{ opacity: '0.05', transition: '0.3s'}}/>
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
                    <Center>
                    <VStack gap={8} mt={{ sm: '2rem', md: '0'}}>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.05 }} >
                            <Box display='flex' justifyContent='space-between' w={64}>
                                <Button bg='blackAlpha.700' color='white'>
                                    <IoLogoGithub fontSize={24}/>
                                    <Text ml={2}>Github</Text>
                                </Button>
                                <Button bg='blackAlpha.700' color='white'>
                                    <CgWebsite fontSize={24}/>
                                    <Text ml={2}>Website</Text>
                                </Button>
                            </Box>
                        </motion.div>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} w='100%'>
                            <Badge colorScheme='yellow' rounded='xl' p={2} mb={4}>In progress 90%</Badge>
                            <Divider w={64}/>
                        </motion.div>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} mx='auto'>
                        <Text mx={14} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor enim ac ullamcorper condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer non dui sollicitudin, sagittis arcu ut, euismod mauris. In hendrerit velit vel felis porttitor mollis. </Text>
                        </motion.div>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                            <Box display='flex' justifyContent='space-between' w={64} >
                                <Tag variant='solid' colorScheme='green' rounded='xl' p={2}>Vue 3</Tag>
                                <Tag variant='solid' colorScheme='green' rounded='xl' p={2}>Vuex</Tag>
                                <Tag variant='solid' colorScheme='yellow' rounded='xl' p={2}>JavaScript</Tag>
                            </Box>
                        </motion.div>
                    </VStack>
                    </Center>}
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