import { createContext, ReactNode, useState } from "react";
import { Response } from "../types/response";
import Post from "../types/post";

type PropsPostsProvider = {
    posts: Response<Post>,
    fetchPosts: (category: Category)=>Promise<void>,
    loading: boolean
}

export const PostsContext = createContext<PropsPostsProvider>({
    posts: {
        data: []
    },
    async fetchPosts(category) {
        return await fetch("").then((response) => {
            return response.json();
        })
        .then((data) => {
            
        })
    },
    loading: false
})

interface Props{
    children?: ReactNode
}

export type Category = "article"| "main" | "promoted";

export const PostsProvider = (props: Props) => {

    const [posts, setPosts] = useState<Response<Post>>({data: []});
    const [loading, setLoading] = useState(false);

    const fetchPosts = async (category : Category) => {
        setLoading(true);

        fetch(`${process.env.NEXT_PUBLIC_API}/posts?filters[category][name][$eq]=${category}&&populate=*`)
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