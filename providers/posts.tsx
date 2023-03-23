import { createContext, ReactNode, useState } from "react";
import { Response } from "../types/response";
import Post from "../types/post";

type PropsPostsProvider = {
    posts: Response<Post>,
    fetchPosts: ()=>void,
    loading: boolean
}

export const PostsContext = createContext<PropsPostsProvider>({
    posts: {
        data: []
    },
    fetchPosts: () => {},
    loading: false
})

interface Props{
    children?: ReactNode
}

export const PostsProvider = (props: Props) => {

    const [posts, setPosts] = useState<Response<Post>>({data: []});
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_API}/posts?filters[category][name][$eq]=main&&populate=*`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPosts(data)
            setLoading(false);
        })
    }

    return (
        <PostsContext.Provider value={{posts, fetchPosts, loading}} >
            {props.children}
        </PostsContext.Provider>
    )
}