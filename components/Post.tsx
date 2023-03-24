import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, ModalFooter, Button, Input, Link } from "@chakra-ui/react";
import { BsFillPatchCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { useContext, useEffect, useState } from "react";
import Commentary from "./Commentary";
import Post from "../types/post";
import { ResponseModel } from "../types/response";
import TimeAgo from "react-timeago";
import { useAuth0 } from "@auth0/auth0-react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useFetch from "use-http";
import { Category, PostsContext } from "../providers/posts";


interface Props{
    posts: ResponseModel<Post>,
    handleChange?: () => void,
    category: Category;
}


export default function Post(props: Props){

    const {onClose} = useDisclosure();
    const [openModal, setOpenModal] = useState(false);
    const [modalComments, setOpenModalComments] = useState(false);
    const posts = props.posts;
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const [avatarUrl, setAvatar] = useState<string | null>();
    const [like, setLike] = useState(false);
    const [indexPost, setIndex] = useState(0);
    const { post, loading, response} = useFetch(process.env.NEXT_PUBLIC_API);
    const [comment, setComment] = useState("");
    const {fetchPosts} = useContext(PostsContext);

    const signUp = () =>{
        loginWithRedirect();
    }

    const likeComment = async (id: number) => {
        if(avatarUrl != ""){
            setIndex(id);
            setLike(true);
            await post("/likes", {
                data:{
                    avatar_url: avatarUrl,
                    name: localStorage.getItem("username"),
                    post: {
                        id: id
                    }
                }
            })
        }else{
            loginWithRedirect();
        }
    }

    const commentPost = async (id: number) => {
        if(comment != ""){
            await post("/comments", {
                data: {
                    avatar_url: avatarUrl,
                    text: comment,
                    post: {
                        id: id
                    },
                    name: localStorage.getItem("username")
                }
            })
            if(response.ok){
                fetchPosts(props.category);
            }
        }else {
            return;
        }        
    }

    const openPost = (id: number) => {
        setIndex(id);
        setOpenModalComments(true);
    }

    const findLike = () => {
        let like = posts.attributes.likes.data.find((like)=>{
            return like.attributes.name === localStorage.getItem("username");
        })
        if(like){
            return true;
        }else{
            return false;
        }
    }

    useEffect(()=>{
        if(isAuthenticated){
            console.log(user?.name);
            localStorage.setItem("username", user?.name as string);
            localStorage.setItem("user_avatar", user?.picture as string);
        }
    }, [])

    useEffect(()=>{
        if(localStorage.getItem("user_avatar")){
            setAvatar(localStorage.getItem("user_avatar"));
        }else{
            setAvatar("");
        }
    }, [])


    return(
        <>
            <Card width="100%" bg="gray.light" mb="3" borderRadius="1rem">
                    <CardHeader>
                        <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Segun Adebayo' src='/avatar_profile.jpg' />

                            <Box>
                            <Heading size='sm' color="white" fontWeight="normal">Tiago Winkel Landi</Heading>
                            <Flex>
                                <Text fontSize="sm" color="gray.veryLight" mr="2" >@tiagowl</Text>
                                <BsFillPatchCheckFill color="#99cccc" />
                            </Flex>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                        </Flex>
                    </CardHeader>
                    <CardBody pt="0" >
                        <Text fontSize="sm" color="white" >
                            {posts.attributes.Text}
                        </Text>
                        {props.category === "article" ? <Link color="blue.300" >Ler mais</Link> : <Link color="blue.300" href={posts.attributes.link} >Link do projeto</Link>}
                        
                    </CardBody>
                    <Image
                        objectFit='cover'
                        src={posts.attributes.image.data.attributes.url}
                        alt='Chakra UI'
                    />
                    <Flex pl="4" pt="4">
                        {posts.id === indexPost && like === true || findLike() ? <AiFillHeart size={25} color="#C93131" />
                        : <AiOutlineHeart color="white" size={25} onClick={()=>likeComment(posts.id)} style={{cursor: "pointer"}} />}
                        <TfiCommentAlt color="white" size={22} onClick={()=>openPost(posts.id)} style={{marginTop: "3px", marginLeft: "10px", cursor: "pointer"}} />
                        {posts.attributes.likes.data.length > 0 && <Text color="white" cursor="pointer"  fontSize="xs" mt="1" ml="4" onClick={()=>setOpenModal(true)} > {posts.attributes.likes.data.length} Likes</Text>}
                        {posts.attributes.comments.data.length > 0 && <Text color="white" fontSize="xs" onClick={()=>setOpenModalComments(true)} cursor="pointer" mt="1" ml="4" > {posts.attributes.comments.data.length} comments</Text>}
                    </Flex>
                    <CardFooter borderTopStyle="solid" pt="3" pb="1">
                        
                    </CardFooter>
            </Card>
            <Modal isOpen={openModal}  onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="gray.light" borderStyle="solid" borderColor="gray.veryLight" borderWidth="1px" >
                <ModalHeader pb="2" color="white" >Likes</ModalHeader>
                <ModalCloseButton color="white" onClick={()=>setOpenModal(false)} />
                <ModalBody borderTop="1px solid" borderTopColor="gray.veryLight" >
                    <Flex direction="column" >
                        {posts?.attributes?.likes?.data?.map((like)=>(
                            <Flex alignItems="center" w="100%" justifyContent="space-between" mb="3" >
                                <Flex alignItems="center">
                                    <Avatar name='Kent Dodds' src={like.attributes.avatar_url} mr="3" />
                                    <Text color="white" >{like.attributes.name}</Text>
                                </Flex>
                                <Text color="white" >
                                    <TimeAgo date={like.attributes.createdAt} />
                                </Text>
                            </Flex>
                        ))}
                    </Flex>
                </ModalBody>
                </ModalContent>
            </Modal>
            <Modal isOpen={modalComments} size="xl" onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="gray.light" >
                <ModalHeader pb="8" ></ModalHeader>
                <ModalCloseButton color="white" onClick={()=>setOpenModalComments(false)} />
                <ModalBody borderTop="1px solid" borderTopColor="gray.veryLight" px="0" >
                    <Flex px="2" >
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Segun Adebayo' src='/avatar_profile.jpg' />

                                <Box>
                                <Heading size='sm' color="white" fontWeight="normal">Tiago Winkel Landi</Heading>
                                <Flex>
                                    <Text fontSize="sm" color="gray.veryLight" mr="2" >@tiagowl</Text>
                                    <BsFillPatchCheckFill color="#99cccc" />
                                </Flex>
                                </Box>
                            </Flex>
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<BsThreeDotsVertical />}
                            />
                    </Flex>
                    <Flex px="2" mt="2" mb="2" >
                        <Text color="white" >{posts.attributes.Text}</Text>
                    </Flex>
                    <Image
                        objectFit='cover'
                        src={posts.attributes.image.data.attributes.url}
                        alt='Chakra UI'
                    />
                    <Flex justifyContent="space-between" px="3" mt="2" mb={posts?.attributes?.comments?.data?.length > 0 ? "2" : "0"} >
                        <Flex>
                        {posts.id === indexPost && like === true || findLike() ? <AiFillHeart size={25} color="#C93131" />
                        : <AiOutlineHeart color="white" size={25} onClick={()=>likeComment(posts.id)} style={{cursor: "pointer"}} />}
                        {posts.attributes.likes.data.length > 0 && <Text color="white" ml="2" cursor="pointer" onClick={()=>setOpenModal(true)}  >{posts.attributes.likes.data.length} likes</Text>}
                        </Flex>
                        {posts.attributes.comments.data.length > 0 && <Text color="white" >{posts.attributes.comments.data.length} commentaries</Text>}
                    </Flex>
                    {posts?.attributes?.comments?.data?.map((comment)=>(
                        <Commentary created_at={comment.attributes.createdAt} avatar_url={comment.attributes.avatar_url} username={comment.attributes.name} content={comment.attributes.text} />
                    ))}
                </ModalBody>

                <ModalFooter borderTop="1px solid" borderTopColor="gray.veryLight" px="0" >
                    {avatarUrl ? <Flex px="3" justifyContent="flex-start" w="100%" >
                        <Avatar size="sm" name='Dan Abrahmov'src={avatarUrl as string} mr="3" />
                        <Input bg="gray.veryLight" value={comment} onChange={(e)=>setComment(e.target.value)} border="none" placeholder="write a comment" mr="3" />
                        <Button bg="gray.middle" isLoading={loading} onClick={()=>commentPost(posts.id)} color="white" >Send</Button>
                    </Flex> :
                    <Flex w="100%" justifyContent="flex-start" alignItems="center" px="3" >
                        <Text color="white" >SignIn to comment this post. 
                            <Link color="blue.400" onClick={signUp} ml="1" isExternal>
                                SignIn <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Text>
                    </Flex>}
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}