import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Link
} from '@chakra-ui/react';

export default function PostCard({ post }) {
    return(
        <Center py={6}>
            <Box maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Stack> 
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Post From {post.subreddit.name}
                        </Text>
                    <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                        {post.title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {post.content}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Link href={`/user/${post.user.id}`}>
                        <Avatar
                            src={post.user.image}
                            alt={'Author'}
                        />
                    </Link>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>{post.user.name}</Text>
                        <Text color={'gray.500'}>{post.createdAt}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}