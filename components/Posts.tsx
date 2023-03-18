import { Image, Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text, Link } from "@chakra-ui/react";
import { BsFillPatchCheckFill, BsThreeDotsVertical } from "react-icons/bs";
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