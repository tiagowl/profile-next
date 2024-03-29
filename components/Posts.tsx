import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { PostsContext } from "../providers/posts";
import Post from "./Post";

export default function Posts(){

    
    const {fetchPosts, posts, loading} = useContext(PostsContext);

    useEffect(()=>{
        fetchPosts("main");
    }, [])


    return(
        <>
        {loading ? 
            <Box padding='6' bg="gray.light" boxShadow='lg' borderRadius="1rem">
                <SkeletonCircle size='10' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" width="50%" mb="6" />
                <Skeleton height='140px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
            </Box> : posts?.data?.map((post)=>(
            <>
                {/* Post */}
                <Post posts={post} category="main" />
            </>
        ))}        
        </>
    )
}