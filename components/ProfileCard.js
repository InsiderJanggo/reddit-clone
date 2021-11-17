import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';


export default function ProfileCard({ session }) {
    return(
        <Center py={6}>
            <Box
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
                  <Image
                        h={'120px'}
                        w={'full'}
                        src={
                            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                        objectFit={'cover'}
                        alt="banner"
                    />
                 <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={session.user.image}
                        alt={session.user.name}
                        css={{
                        border: '2px solid white',
                        }}
                    />
                </Flex>
                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {session.user.name}
                        </Heading>
                    </Stack>
                </Box>
            </Box>
        </Center>
    )
}