import { addPost } from '@/lib/db/post'

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
   if(req.method == 'POST') {
        const {
            title,
            content,
            subredditId,
            userId,
            embed
        } = req.body

        const post = await addPost(userId, subredditId, title, content, embed)

        res.json(post)
   }
}
  