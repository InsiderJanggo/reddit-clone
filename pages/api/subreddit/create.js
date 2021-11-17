import { createSubReddit } from "@/lib/db/subreddit";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    if(req.method == 'POST') {
        const {
            userId,
            name,
            description,
            image,
            parther
        } = req.body

        const subreddit = await createSubReddit(name, image, parther, description, userId)

        res.json(subreddit)
    }
}
  