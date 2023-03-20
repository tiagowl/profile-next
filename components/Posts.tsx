import { useEffect, useState } from "react";
import useFetch from "use-http";
import posts from "../data/posts";
import PostType  from "../types/post";
import { Response } from "../types/response";
import Post from "./Post";

export default function Posts(){

    const [postsResponse, setPosts] = useState<Response<PostType>>();
    const { get, post, response, loading} = useFetch(process.env.NEXT_PUBLIC_API);

    const loadPosts = async() =>{
        let posts = await get("/posts?populate=*");
        if(response.ok) setPosts(posts);
    }

    useEffect(()=>{
        loadPosts();
    }, [])


    return(
        <>        
        {postsResponse?.data?.map((post)=>(
            <>
                {/* Post */}
                <Post posts={post} />
            </>
        ))}
        </>
    )
}