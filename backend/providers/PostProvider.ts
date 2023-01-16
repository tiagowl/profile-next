import supabase from "../database/supabase";
import { Post, PostEntity } from "../models/posts";
import CommentProvider from "./CommentProvider";

class PostProvider{

    private parseEntity(post: Post): Partial<PostEntity>{
        const commentProvider = new CommentProvider();
        return {
            id: post.id,
            description: post.description,
            comments: commentProvider?.getCommentPerPost(post.id),
            image: post.image,
            likes: []
        }
    }

    public async getAll(){
        let posts = await this.getPosts();
        let postEntity = posts?.map((post)=>this.parseEntity(post));
        return postEntity;
    }

    private async getPosts(): Promise<Post[]>{
        let { data, error } = await supabase.from('posts').select('*');
        return data as Post[];
    }

}

export default PostProvider;