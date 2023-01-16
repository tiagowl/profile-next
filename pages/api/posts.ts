// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PostController from "../../backend/controllers/PostController";
import PostProvider from '../../backend/providers/PostProvider';

const postsProvider = new PostProvider();
const postsController = new PostController(postsProvider);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "GET"){
    return res.status(200).json(postsController.index);
  }
}
