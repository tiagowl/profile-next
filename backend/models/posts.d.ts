import { Comment, CommentEntity } from "./comments";
import { Like } from "./likes";

export interface Post{
    id: number;
    image: string;
    description: string;
}

export interface PostEntity extends Post{
    comments: Promise<Partial<CommentEntity[]>>;
    likes: Like[];
}