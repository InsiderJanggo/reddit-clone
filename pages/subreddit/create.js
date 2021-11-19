/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { getSession } from "next-auth/client";
import Router from 'next/router'
import Layout from "@/components/Layout";
import { Box, Center, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function SubredditFormPage({ session }) {
    if(!session) return <span>Not Allowed</span>
    const { t } = useTranslation()
    const [data, setData] = useState({
        name: '',
        description: '',
        image: ''
    })
    
    /**
     * @param {import('react').ChangeEvent<HTMLInputElement>} e 
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    /**
     * @param {import("react").SyntheticEvent} e 
     */
    const handleSubmit = async(e) => {
        e.preventDefault()  
        try {
            const body = {
                name: data.name,
                description: data.description,
                image: data.image,
                parther: false,
                userId: session.userId
            }

            await fetch(`http://localhost:3000/api/subreddit/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            await Router.push('/')
        } catch(error){
            console.error(error)
        }
    }

    return (
        <div>
            <Head>
                <title>{t('subreddit_create:page_title')}</title>
            </Head>
            <Layout>
                <Center py={6}>
                    <Box w={500} h={500} mb='18rem'>
                        <form onSubmit={handleSubmit}>
                                <h1>{t('subreddit_create:form_title')}</h1>
                                <input
                                    autoFocus
                                    onChange={handleChange}
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    value={data.name}
                                    required
                                />
                                 <textarea
                                    cols={50}
                                    onChange={handleChange}
                                    placeholder="Description"
                                    rows={8}
                                    name="description"
                                    value={data.description}
                                    required
                                />
                                 <input
                                    autoFocus
                                    onChange={handleChange}
                                    placeholder="Image"
                                    name="image"
                                    type="url"
                                    value={data.image}
                                    required
                                />
                                <input
                                    disabled={!data.name || !data.description || !data.image}
                                    type="submit"
                                    style={{ cursor: data.value ? 'pointer' : 'not-allowed' }}
                                    value="Create"
                                />
                                <a className="back" style={{ cursor: 'pointer' }} href="#" onClick={() => Router.push('/')}>
                                    or Cancel
                                </a>
                            </form>
                            <Text>
                                Preview
                            </Text>
                            <div id="preview">
                                <Image borderRadius="full" boxSize="150px" alt="subreddit-preview-image" src={data.image} />
                                <Text fontWeight="bold" id='subreddit-name-preview'>
                                    {data.name}
                                </Text>
                                <Text>UserID: {session.userId}</Text>
                                <ReactMarkdown>{data.description}</ReactMarkdown>
                            </div>
                    </Box>
                </Center>
            </Layout>
            <style jsx>{`
                .page {
                    padding: 3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                input[type='text'],
                input[type='url'],
                textarea {
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border-radius: 0.25rem;
                    color: #000000;
                    border: 0.125rem solid rgba(0, 0, 0, 0.2);
                }
                input[type='submit'] {
                    border: 0;
                        padding: 1rem 2rem;
                    }
                    .back {
                        margin-left: 1rem;
                    }
            `}</style>
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
            session: await getSession(context),
            ...(await serverSideTranslations(context.locale, ['navbar', 'subreddit_create'])),
        }
    }
}