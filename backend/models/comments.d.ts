import { Subcomment } from "./subcomments";

export interface Comment{
    id: number;
    created_at: Date;
    user: string;
    content: string;
    likes: number;
    avatar: string;
    post_id: number;
}

export interface CommentEntity extends Comment{
    subcommments: Promise<Subcomment[]>
}