import { getOnePost } from "@/lib/db/post";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const post = await getOnePost(req.query.id)

    res.json(post)
}
  