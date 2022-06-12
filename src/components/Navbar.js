import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  line-height: 20px;
  text-decoration: none;
`;

const LinkItem = ({ href, path, children }) => {
  const inactiveButton = useColorModeValue('gray200', 'whiteAlpha.900');
  const active = path === href;
  return (
    <Link
      href={href}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveButton}
    >
      {children}
    </Link>
  );
};

const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="JetBrains Mono  , Poppins"
          fontWeight="bold"
        >
          Patryk Szabat
        </Text>
      </LogoBox>
    </Link>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        h={14}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} align="right">
          <LinkedinIcon />
          <GithubIcon />
          <ColorModeSwitcher />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <a href="/">
                  <MenuItem as={Link}>Contact</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
