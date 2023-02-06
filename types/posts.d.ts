import Comment from "./comments";
import Image from "./images";
import Response from "./responses";

export default interface Posts{
    id: number;
    attributes:{
        content: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image:Image;
        comments: Response<Comment>;
    }
}