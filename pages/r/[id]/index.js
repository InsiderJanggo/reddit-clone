import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { useState } from 'react'

export default function SubredditPage({ session, subreddit }) {
    return (
        <div>
            <Head>
                <title>{subreddit.name} - Reddit</title>
            </Head>
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