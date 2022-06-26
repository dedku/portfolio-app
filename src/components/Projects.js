import { Container, SimpleGrid, Box, Text, Flex, Spacer, VStack, Button, Divider, Badge, Center, Tag, Skeleton } from "@chakra-ui/react";
import { RiVuejsFill } from 'react-icons/ri'
import { KeystoneIcon, TsIcon, JsIcon } from './Icons'
import { FaReact } from 'react-icons/fa'
import { useState } from "react";
import { motion } from "framer-motion";
import useFetch from '../lib/useFetch'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const Projects = () => {
    const [ hovered, setHovered ] = useState(null)
    const { error, isPending, data } = useFetch('./data.json')

    return (
    <Container maxW="container.xl">
        { error && <Center h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' bgColor='whiteAlpha.100'>  Error with fetching data : { error }</Center>}
        { isPending && <SimpleGrid
        columns={{ sm: 1, md: 2}} spacing='2rem' align="center" justify="center" minW="100%" pt={4} mb={8}
        >
            <Skeleton h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' />
            <Skeleton h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' />
            <Skeleton h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' />
            <Skeleton h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh - 1rem)' }} rounded='xl' position='relative' />
        </SimpleGrid> }
        { data && <SimpleGrid
        columns={{ sm: 1, md: 2}} spacing='2rem' align="center" justify="center" minW="100%" pt={4} mb={8}
        >
            {data.map(i => { return <Box role='group'  key={i.projectId}>
                <Box h={{ base: 'calc(50vh - 4rem)', md: 'calc(50vh -  1rem)' }} rounded='xl' position='relative' onMouseOver={()=> setHovered(i.projectId)} onMouseOut={()=> setHovered(null)}>
                    <Box bgImage={i.imageUrl} bgSize='cover' rounded='xl' position="absolute" top='0' right='0' left='0' bottom='0'  zIndex='-2' opacity='0.85' transition='0.5s' _groupHover={{ opacity: '0.05', transition: '0.3s'}} />
                    <Flex>
                        <Text color="white" m={4} p={2} rounded='xl' bg="blackAlpha.900" fontSize={14} fontFamily='JetBrains Mono  , Poppins' fontWeight='bold' letterSpacing='wide'>{i.projectName}</Text>
                        <Spacer />
                        <Box  m={4} p={2} rounded='xl' bg="blackAlpha.900" h='100%'>
                            <Flex gap={2}>
                                {i.icons.Vue && <RiVuejsFill color='green' fontSize={20} />}
                                {i.icons.React && <FaReact  color='yellow' fontSize={20} />}
                                {i.icons.Keystone &&   <KeystoneIcon />  }
                                {i.icons.TypeScript && <TsIcon />}
                                {i.icons.JavaScript && <JsIcon />}
                            </Flex>
                        </Box>
                    </Flex>
                    {hovered === i.projectId &&
                    <Center>
                    <VStack gap={{ 'sm': 1, 'md': 4}}>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.05 }} >
                            <Box display='flex' justifyContent='space-between' w={64}>
                                <Button bg='blackAlpha.900' color='white' onClick={() => openInNewTab(i.githubLink)}>
                                    <Text fontSize='sm'>Github</Text>
                                </Button>
                                <Button bg='blackAlpha.900' color='white' onClick={() => openInNewTab(i.websiteLink)}>
                                    <Text fontSize='sm'>Website</Text>
                                </Button>
                            </Box>
                        </motion.div>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} w='100%'>
                            <Badge colorScheme='yellow' rounded='xl' p='6px' mb={4}>{i.projectProgres}</Badge>
                            <Divider w={64}/>
                        </motion.div>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} mx='auto'>
                        <Text mx={14} > {i.projectDesc}  </Text>
                        </motion.div>
                        <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                            <Box display='flex' justifyContent='space-between' w={64} >
                                {i.projectTags.map(tag => {return <Tag variant='solid' colorScheme={tag.tagColor} rounded='xl' p={2} key={tag.tagID}>{tag.tagName}</Tag>})}
                            </Box>
                        </motion.div>
                    </VStack>
                    </Center>}
                </Box>
            </Box>})}
        </SimpleGrid>}
    </Container>
    )
}

export default Projects