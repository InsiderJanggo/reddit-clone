import {
    useState
} from 'react'
import Router from 'next/router';

export default function PostForm({
    subreddit,
    session
}) {
    const [data, setData] = useState({
        title: '',
        value: '',
        error: ''
    });

    /**
     * @param {import('react').ChangeEvent<HTMLInputElement>} e 
     */
    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    /**
     * @param {import('react').SyntheticEvent} e 
     */
    const submit = async(e) => {
        e.preventDefault()
        if (!data.value) return

        try {
            const body = {
                title: data.title,
                content: data.value,
                userId: session.userId,
                subredditId: subreddit.id
            }
            await fetch(`http://localhost:3000/api/post/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            await Router.push(`/r/${subreddit.id}`)
        } catch(error) {
            console.error(error)
        }
    }

    return(
       <div id="post-form">
            <form onSubmit={submit}>
                <h1>Create New Post At {subreddit.name}</h1>
                    <input
                        autoFocus
                        onChange={handleChange}
                        placeholder="Post Title"
                        name="title"
                        type="text"
                        value={data.title}
                        required
                    />
                    <textarea
                        cols={50}
                        onChange={handleChange}
                        placeholder="Type Something"
                        rows={8}
                        name="value"
                        value={data.value}
                        required
                    />
                     <input
                        disabled={!data.value}
                        type="submit"
                        value="Post"
                    />
            </form>
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