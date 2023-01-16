import PostProvider from "../providers/PostProvider";
import Controller from "./Controller";

class PostController extends Controller<PostProvider>{


    super(postProvider: PostProvider){
        this.provider = postProvider;
    }

    public index(){
        return this.provider?.getAll();
    }

}

export default PostController;