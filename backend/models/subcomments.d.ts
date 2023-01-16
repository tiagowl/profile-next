export interface Subcomment{
    id: number;
    created_at: Date;
    user: string;
    comment_id: number;
    likes: number;
    avatar: string;
}