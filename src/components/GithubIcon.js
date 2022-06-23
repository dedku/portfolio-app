import React from 'react';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io'

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};


export const GithubIcon = props => {
  return (
    <IconButton
    size="md"
    fontSize="lg"
    aria-label='github profile'
    bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.500')}
    marginLeft="2"
    icon={<IoLogoGithub />}
    onClick={() => openInNewTab('https://github.com/dedku')}
    {...props}
    />
  );
};
