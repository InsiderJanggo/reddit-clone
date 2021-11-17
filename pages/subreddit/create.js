import useForm from "@/hooks/useForm";
import Head from 'next/head'
import { getSession } from "next-auth/client";

export default function SubredditFormPage({ session }) {
    if(!session) return <span>Not Allowed</span>

    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
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