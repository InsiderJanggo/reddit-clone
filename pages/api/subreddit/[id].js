import { getOneSubReddit } from "@/lib/db/subreddit";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const subreddit = await getOneSubReddit(req.query.id)

    res.json(subreddit)
}
  