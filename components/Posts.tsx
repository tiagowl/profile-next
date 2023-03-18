import posts from "../data/posts";
import Post from "./Post";

export default function Posts(){

    return(
        <>        
        {posts.map((post)=>(
            <>
                {/* Post */}
                <Post content={post.content} link={post.link} image={post.image} />
            </>
        ))}
        </>
    )
}