import { getOnePost } from '@/lib/db/post'
import { Canvas } from 'canvas-constructor/cairo'

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    if(req.method == 'GET') {
        const post = await getOnePost(req.query.postId);

        let img = new Canvas(500, 250)
        .setColor("#404E5C")
        .printRectangle(0, 0, 500, 250)
        .setColor("#DCE2F9")
        .setTextFont('bold 35px sans')
        .printText(post.title, 120, 75)

        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        const image = img.toBuffer()
        res.end(image, "binary")
    }
}
  