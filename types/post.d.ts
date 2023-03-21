import { Comment } from "./comment";
import { Image } from "./image";
import { Like } from "./like";
import { Response } from "./response";

export default interface Post{
    Text: string;
    createdAt: Date;
    publishedAt: Date;
    image: Image;
    comments: Response<Comment>;
    likes: Like;
    link: string;
}