import Head from 'next/head'
import { getSession } from "next-auth/client"
import PostCard from '@/components/PostCard'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home({ posts, locale }) {
  return (
    <div>
      <Head>
        <title>Reddit - Dive into anything</title>
      </Head>
      <Layout>
        {posts.map((post) => (
          <PostCard locale={locale} post={post} key={post.id} />
        ))}
      </Layout>
    </div>
  )
}

/**
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/post`)
    const posts = await res.json()
    const locale = context.locale

    return {
        props: {
           posts,
           session: await getSession(context),
           ...(await serverSideTranslations(context.locale, ['home', 'navbar'])),
           locale
        }
    }
}