import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useFetch from "use-http";
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
        {!response.ok ? 
            <Box padding='6' bg="gray.light" boxShadow='lg' borderRadius="1rem">
                <SkeletonCircle size='10' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" width="50%" mb="6" />
                <Skeleton height='140px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
            </Box> : postsResponse?.data?.map((post)=>(
            <>
                {/* Post */}
                <Post posts={post} handleChange={loadPosts} />
            </>
        ))}        
        </>
    )
}