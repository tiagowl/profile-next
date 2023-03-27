import { Avatar, Box, Button, Card, CardBody, CardHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Link, Spinner, Stack, Tag, Text, useDisclosure } from "@chakra-ui/react";
import Main from "../../components/Main";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import React, { useEffect, useState } from "react";
import Commentary from "../../components/Commentary";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Response } from "../../types/response";
import { Article } from "../../types/article";
import useFetch from "use-http";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { onePost } from "../../types/post";
import { useAuth0 } from "@auth0/auth0-react";
import TimeAgo from "react-timeago";
import Moment from "react-moment";

export default function Article(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [article, setArticle] = useState<Response<Article>>();
    const { post, loading, response, get} = useFetch(process.env.NEXT_PUBLIC_API);
    const [currentPost, setPost] = useState<onePost>();
    const router = useRouter();
    const [like, setLike] = useState(false);
    const [avatarUrl, setAvatar] = useState<string | null>();
    const { loginWithRedirect } = useAuth0();
    const [comment, setComment] = useState<string>("");
    const [content, setContent] = useState("");
    const [recomended, setRecomended] = useState<Response<Article>>();

    const likeComment = async () => {
        localStorage.setItem("urlRedirect", router.asPath)
        if(avatarUrl != ""){
            setLike(true);
            await post("/likes", {
                data:{
                    avatar_url: localStorage.getItem("user_avatar"),
                    name: localStorage.getItem("username"),
                    post: {
                        id: router?.query?.id
                    }
                }
            })
        }else{
            sessionStorage.setItem("urlRedirect", router.asPath)
            loginWithRedirect();
        }
    }

    const commentPost = async () => {
        if(comment != ""){
            await post("/comments", {
                data: {
                    avatar_url: avatarUrl,
                    text: comment,
                    post: {
                        id: router.query.id
                    },
                    name: localStorage.getItem("username")
                }
            })
            if(response.ok){
                fetchPost();
            }
        }else {
            return;
        }        
    }

    const fetchRecomended = async () => {
        const data = await get(`/articles?filters[post][id][$not]=${router?.query?.id}&&populate=*`);
        if(response.ok) setRecomended(data);
    }
    
    const fetchArticle = async () =>{
        const data = await get(`/articles?filters[post][id][$eq]=${router?.query?.id}`);
        if(response.ok){
            setArticle(data);  
        } 
    }

    const fetchPost = async () => {
        let data = await get(`/posts/${router?.query?.id}?populate=*`);
        if(response.ok) setPost(data);
    }

    const findLike = () => {
        
        let like = currentPost?.data.attributes.likes.data.find((like)=>{
                 return like.attributes.name === localStorage.getItem("username");
        })
        if(like){
            return true;
        }else{
            return false;
        }
    }

    const signIn = () => {
        sessionStorage.setItem("urlRedirect", router?.asPath)
        loginWithRedirect();
    }

    useEffect(()=>{
        if(router.query.id){
            fetchArticle();
            fetchPost();
            fetchRecomended();
        }
    }, [router.query.id])

    useEffect(()=>{
        if(localStorage.getItem("user_avatar")){
            setAvatar(localStorage.getItem("user_avatar"));
        }else{
            setAvatar("");
        }

        console.log(router);
    }, [])


    return(
        <Main>{loading ? <Spinner color="white" margin="0 auto" mt="5" /> : <>
        
            <Flex w="100%" justifyContent="flex-start" mb="6" display={["none", "flex", "flex"]} >
                <Avatar src="/avatar_profile.jpg" size="md" />
                <Flex flexDirection="column" ml="3" >
                    <Text color="white" mb="1" >Tiago Landi</Text>
                    <Text color="gray.light" ><TimeAgo date={article?.data[0]?.attributes?.createdAt} /></Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" mb="5" >

                <Heading size="lg" mb="6" textAlign={["center", "left", "left"]} color="white" >{article?.data[0]?.attributes?.title}</Heading>

                <Flex color="white" mb="3" flexDirection="column">
                    <ReactMarkdown className="lineBreak"
                                   children={article?.data[0]?.attributes?.text} />
                </Flex>
            </Flex>
                
            <Flex mb="6" justifyContent={["center", "flex-start", "flex-start"]} >
            {like === true || findLike() ? <AiFillHeart size={25} color="#C93131" />
                : <AiOutlineHeart color="white" size={25} onClick={()=>likeComment()} style={{cursor: "pointer"}} />}
                <Text color="white" ml="1" mr="4" >{currentPost?.data?.attributes?.likes?.data?.length}</Text>
                <TfiCommentAlt color="white" onClick={onOpen} size={22} style={{marginTop: "3px", cursor: "pointer"}} />
                <Text color="white" ml="2" mr="4" >{currentPost?.data?.attributes?.comments?.data?.length}</Text>
            </Flex>

            <Card bg="gray.middle" >
                <CardHeader>
                        <Heading size='md' fontWeight="semibold" color="white">More from Tiago Landi</Heading>
                </CardHeader>
                <CardBody>
                <Stack spacing='4'>
                    {recomended?.data?.map((article)=>(
                        <Box borderBottom="1px solid" borderBottomColor="gray.veryLight" pb="4" >
                            <Heading size='md' color="white" cursor="pointer" onClick={()=>router.push(`/articles/${article?.attributes?.post?.data?.id}`)}  textTransform='uppercase'>
                            {article?.attributes?.title}
                            </Heading>
                            <Text pt='2' color="white" fontSize='sm'>
                            {article.attributes?.text?.substring(0, 298)}...
                            </Text>
                            <Flex alignItems="center" >
                                <Tag bg="gray.light" mt="2" color="white" mr="2" size="sm" >{ article?.attributes?.tag }</Tag>
                                <Text pt='2' color="gray.veryLight" fontSize='sm' >
                                    <Moment format="MMM Do YY" >{ article?.attributes?.createdAt }</Moment>
                                </Text>
                            </Flex>
                        </Box>    
                    ))}
                </Stack>
                </CardBody>
            </Card>
        </>}

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent bg="gray.light" >
                <DrawerCloseButton />
                <DrawerHeader color="white" >Responses({currentPost?.data?.attributes?.comments?.data?.length})</DrawerHeader>

                <DrawerBody>
                    
                    <Input value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='What you are thoughts?' mb="2" />
                    {!avatarUrl ? 
                    <Text color="white" mb="10" >SignIn to comment this post. 
                        <Link color="blue.400" onClick={signIn} ml="1" isExternal>
                            SignIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text> : 
                    <Flex w="100%" justifyContent="flex-end" mb="3" >
                        <Button isLoading={loading} onClick={commentPost} bg="gray.veryLight" >Send</Button>
                    </Flex>
                    }

                    {currentPost?.data?.attributes?.comments?.data?.map((comment)=>(
                        <Commentary content={comment?.attributes?.text} 
                                    avatar_url={comment?.attributes?.avatar_url} 
                                    username={comment?.attributes?.name}
                                    created_at={comment?.attributes?.createdAt}/>
                    ))}
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Main>
    )
}