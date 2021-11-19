import { getSession } from "next-auth/client";
import Head from 'next/head'

export default function SubredditSettingPage({ session, subreddit }) {
    if(!session || subreddit.userId !== session.userId) return <span>Not Allowed</span>

    return (
        <div>
            <Head>
                <title>Edit {subreddit.name} - Reddit</title>
            </Head>
        </div>
    )
}


/**
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/subreddit/${context.params.id}`, {
        method: 'GET'
    })
    const subreddit = await res.json()

    return {
        props: {
            session: await getSession(context),
            subreddit
        }
    }
}