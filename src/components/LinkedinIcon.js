import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { IoLogoLinkedin } from 'react-icons/io'

export const LinkedinIcon = props => {
  return (
    <IconButton
    size="md"
    fontSize="lg"
    aria-label='github profile'
    colorScheme='blue'
    marginLeft="2"
    icon={<IoLogoLinkedin />}
    {...props}
    />
  );
};
