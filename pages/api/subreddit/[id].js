import { getOneSubReddit } from "@/lib/db/subreddit";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    switch(req.method) {
        case 'GET':
                getOne(req.query.id, res)
            break;
        case 'PUT':
                updateOne(req.query.id, req, res)
            break
    }
}
  
async function getOne(id, res) {
    const subreddit = await getOneSubReddit(id)

    res.json(subreddit)
}

async function updateOne(id, req, res) {
    const {

    } = req.body;
}