import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Link,
    Flex,
    AvatarBadge
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useOnline } from 'rooks';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'

export default function PostCard({ post, locale }) {
    const router = useRouter()
    const online = useOnline()

    return(
            <Center py={6}>
                <Box maxW={'600px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                         <Stack maxW={100}>
                            <Flex mr={3}>
                                <Box>
                                    <BiUpArrow />
                                    <Text>{post.upvoted}</Text>
                                </Box>
                            </Flex>
                            <Flex>
                                <Box>
                                    <BiDownArrow />
                                    <Text>{post.downvoted}</Text>
                                </Box>
                            </Flex>
                    </Stack>
                    <Stack> 
                            <Text
                                color={'green.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                onClick={() => router.push(`/${locale}/r/${post.subreddit.id}/post/${post.id}`)}
                                fontSize={'sm'}
                                cursor="pointer"
                                align="center"
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
                        <Link href={`/${locale}/user/${post.user.id}`}>
                            <Avatar
                                src={post.user.image}
                                alt={'Author'}
                            >
                                {online ? (
                                    <AvatarBadge boxSize="1.25em" bg="green.500"/>
                                ): (
                                    <AvatarBadge boxSize="1.25em" bg="gray.500"/>
                                )}
                            </Avatar>
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