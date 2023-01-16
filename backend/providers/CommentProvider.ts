import supabase from "../database/supabase";
import { Comment, CommentEntity } from "../models/comments";
import SubCommentProvider from "./SubCommentProvider";

class CommentProvider{

    private parseEntity(comment: Comment): Partial<CommentEntity>{
        const subcommentProvider = new SubCommentProvider();
        return {
            id: comment.id,
            avatar: comment.avatar,
            created_at: comment.created_at,
            content: comment.content,
            likes: comment.likes,
            user: comment.user,
            subcommments: subcommentProvider?.getSubcomments(comment.id),
        }
    }

    public async getCommentPerPost(idPost: number): Promise<Partial<CommentEntity[]>>{
        let comments = await this.getComments(idPost); 
        let commentsEntity = comments?.map((comment)=>this.parseEntity(comment));
        return commentsEntity as Partial<CommentEntity[]>;
    }

    private async getComments(idPost: number): Promise<Comment[]>{        
        let { data, error } = await supabase.from('comments').select('*').eq("post_id", idPost);
        return data as Comment[];
    }

}

export default CommentProvider;