import { getOneUser } from '@/lib/db/user'

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
   const user = await getOneUser(req.query.id)

   res.json(user);
}
  