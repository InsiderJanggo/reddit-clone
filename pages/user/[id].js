import Head from 'next/head'

export default function UserPage({ user }) {
    return (
        <div>
            <Head>
                <title>{user.name} Profile - Reddit</title>
            </Head>
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
           user
        }
    }
}