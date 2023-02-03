import { Comment } from "../backend/models/comments";
import Image from "./images";
import Response from "./responses";

interface Posts{
    id: number;
    attributes:{
        content: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image:Response<Image>;
        comments: Response<Comment>;
    }
}