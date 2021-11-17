import { getAllPost } from "@/lib/db/post";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const posts = await getAllPost()

    res.status(200).json(posts)
}
  