import { getAllSubReddit } from "@/lib/db/subreddit";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const subreddits = await getAllSubReddit()

    res.json(subreddits)
}
  