import Layout from '@/components/Layout'
import Head from 'next/head'
import {
    Text,
    Box,
    Center,
    Container,
    Heading,
    Stack,
} from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SubredditList from '@/components/SubredditList';

export default function UserPage({ user }) {
    return (
        <div>
            <Head>
                <title>{user.name} Profile - Reddit</title>
            </Head>
            <Layout>
                <Container py={6}>
                    <Box>
                        <Heading>{user.name} Subreddit</Heading>
                        <Stack>
                            {user.subreddits.map((subreddit) => (
                                <SubredditList subreddit={subreddit} key={subreddit.id} />
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Layout>
        </div>
    )
}

/**
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/user/${context.params.id}`)
    const user = await res.json()

    return {
        props: {
           user,
           ...(await serverSideTranslations(context.locale, ['navbar'])),
        }
    }
}