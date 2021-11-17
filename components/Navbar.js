import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, AddIcon } from '@chakra-ui/icons';
import { signIn, signOut } from 'next-auth/client';

const Links = [
    { name: 'Home', href: '/' }
]

/**
 * @param {Object} param
 * @param {ReactNode} param.children
 */
export function Navlink({ children, href }) {
    return(
        <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={href}>
            {children}
        </Link>
    )
}

export default function Navbar({ session }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()

    return(
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
             <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
             <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
                <HStack spacing={8} alignItems={'center'}>
                        <Box cursor="pointer" onClick={() => router.push('/')}>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="_1O4jTk-dZ-VIxsCuYB6OR8 "><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>
                        </Box>
                        <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <Navlink key={link.name}>{link.name}</Navlink>
                        ))}
                        </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                {session ? (
                    <>
                    <Menu>
                        <MenuButton
                        as={Button}
                        variant={'solid'}
                        colorScheme={'teal'}
                        size={'sm'}
                        mr={4}
                        leftIcon={<AddIcon />}>
                            Action
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Create Subreddit</MenuItem>
                            <MenuItem>Add Post</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                          size={'sm'}
                          src={session.user.image}
                        />
                      </MenuButton>
                      <MenuList alignItems="center">
                            <br />
                            <Center>
                                <Avatar
                                    size={'2xl'}
                                    src={session.user.image}
                                />
                            </Center>
                            <br />
                            <Center>
                                <p>{session.user.name}</p>
                            </Center>
                            <br />
                        <MenuDivider />
                        <MenuItem onClick={() => router.push('/me')}>Your Profile</MenuItem>
                        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                      </MenuList>
                    </Menu>
                 
                    </>
                ): (
                    <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    onClick={() => signIn()}
                    _hover={{
                      bg: 'pink.300',
                    }}>
                    Sign Up
                  </Button>
                )}
                </Stack>
                </Flex>
             </Flex>
             

             {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <Navlink key={link.name}>{link.name}</Navlink>
                    ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
}