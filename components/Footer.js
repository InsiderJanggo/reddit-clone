import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi'
import { ReactNode } from 'react';
import Router from 'next/router'
import ReactCountryFlag from "react-country-flag"


/**
 * @param {Object} param
 * @param {ReactNode} param.children
 * @param {String} param.label
 * @param {String} param.href
 * @returns
 */
export function SocialButton({ children, label, href }) {
    return(
        <chakra.button bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    const Socials = [
        { label: 'Instagram', icon: <FaInstagram />, href: '#' },
        { label: 'Support', icon: <BiSupport />, href: '#' }
    ]

    return(
        <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021 RealPenguin(Wisly ong). All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            {Socials.map((data) => (
                <SocialButton key={data.label} label={data.label} href={data.href}>
                    {data.icon}
                </SocialButton>
            ))}
            <Menu>
                <MenuButton>
                    <SocialButton label={'earth'}>
                        <FaGlobe />
                    </SocialButton>
                </MenuButton>
                <MenuList>
                        <MenuItem onClick={() => Router.push(`en`) }> 
                            <Box mr={2}>
                                <ReactCountryFlag 
                                    countryCode="US"
                                    svg
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    cdnSuffix="svg"
                                    title="US" 
                                />
                            </Box>
                            English
                        </MenuItem>
                        <MenuItem onClick={() => Router.push(`id`) }>
                            <Box mr={2}>
                                <ReactCountryFlag 
                                    countryCode="ID"
                                    svg
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    cdnSuffix="svg"
                                    title="ID"
                                />  
                            </Box>
                            Bahasa Indonesia
                        </MenuItem>
                        <MenuItem onClick={() => Router.push(`ja`) }>
                            <Box mr={2}>
                                <ReactCountryFlag 
                                    countryCode="JP"
                                    svg
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    cdnSuffix="svg"
                                    title="JP"
                                />  
                            </Box>
                            日本語
                        </MenuItem>
                    </MenuList>
            </Menu>
          </Stack>
        </Container>
      </Box>
    )
}