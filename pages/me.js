import Layout from "@/components/Layout";
import { getSession } from "next-auth/client";
import Head from 'next/head'
import {
    Box
} from '@chakra-ui/react'
import ProfileCard from "@/components/ProfileCard";

export default function MePage({ session }) {
    if(!session) return <span>Not Allowed</span>

    return (
        <div>
            <Head>
                <title>{session.user.name} Profile - Reddit</title>
            </Head> 
            <Layout>
                <Box marginLeft="24px" marginTop="0">
                    <ProfileCard session={session} />
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

    return {
        props: {
            session: await getSession(context)
        }
    }
}