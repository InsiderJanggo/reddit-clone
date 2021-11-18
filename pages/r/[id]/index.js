import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { useState } from 'react'
import { Box, Center } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import PostForm from '@/components/PostForm'
import PostCard from '@/components/PostCard'

export default function SubredditPage({ session, subreddit }) {
    return (
        <div>
            <Head>
                <title>{subreddit.name} - Reddit</title>
            </Head>
            <Layout>
              <Center py={6}>
                    <Box>
                        {session ? (
                            <PostForm subreddit={subreddit} session={session} />
                        ): (
                            null
                        )}
                    </Box>
              </Center>
                    <Box px={6} py={6}>
                        {subreddit.posts.map((post) => (
                            <PostCard post={post} key={post.id} />
                        ))}
                    </Box>
            </Layout>
        </div>
    )
}

/**
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/subreddit/${context.params.id}`)
    const subreddit = await res.json()

    return {
        props: {
            session: await getSession(context),
            subreddit
        }
    }
}