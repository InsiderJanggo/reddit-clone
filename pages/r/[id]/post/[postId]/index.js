import Head from 'next/head'

export default function PostPage({ post }) {
    

    return (
      <div>
        <Head>
          <title>{post.title} - Reddit</title>
        </Head>
      </div>
    )
}

/**
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/post/get/${context.params.postId}`)
    const post = await res.json()

    return {
        props: {    
            post
        }
    }
}