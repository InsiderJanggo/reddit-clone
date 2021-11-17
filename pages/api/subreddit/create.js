import { createSubReddit } from "@/lib/db/subreddit";

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    res.status(200).json({
        message: 'Welcome to my API'
    })
}
  