import { Image, Avatar, Box, Card, CardBody, CardFooter, CardHeader, Collapse, Flex, Heading, IconButton, Input, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Square, SkeletonCircle, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPatchCheckFill, BsGithub, BsLinkedin, BsThreeDotsVertical } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";
import { TfiCommentAlt } from "react-icons/tfi";
import {FcGoogle} from "react-icons/fc";
import Commentary from "./Comentary";
import Response from "../types/responses";
import PostsResponse from "../types/posts";
import useFetch from "use-http";

export default function Posts(){

    const {isOpen, onToggle, onClose} = useDisclosure();
    const [openModal, setOpenModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [posts, setPosts] = useState<Response<PostsResponse>>();
    const [commentsModal, setCommentsModal] = useState(false);
    const { get, post, response, loading} = useFetch('https://profile-cms-production.up.railway.app/api');

    const loadPosts = async() =>{
        let posts = await get("/posts?populate=*");
        if(response.ok) setPosts(posts);
    }

    useEffect(()=>{
        loadPosts();
    }, [])
    
    return(
        <>  {!response.ok ? 
            <Box padding='6' bg="gray.light" boxShadow='lg' borderRadius="1rem">
                <SkeletonCircle size='10' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
                <Skeleton height='20px' startColor="gray.midddle" endColor="gray.veryLight" width="50%" mb="6" />
                <Skeleton height='140px' startColor="gray.midddle" endColor="gray.veryLight" mb="2" />
            </Box> : posts?.data?.map((post: PostsResponse, index: number)=>(

            <Card width="100%" bg="gray.light" mb="3" borderRadius="1rem">
            <CardHeader>
                <Flex>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Segun Adebayo' src='profile_avatar.jpg' />

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
                {post?.attributes?.content}
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src={post?.attributes?.image?.data?.attributes?.url}
                alt='Chakra UI'
            />
            <Flex pl="4" pt="4" pb="4" >
                <AiOutlineHeart onClick={()=>setLoginModal(true)} color="white" size={25} style={{cursor: "pointer"}} />
                {post?.attributes?.comments?.data?.length > 0 && <TfiCommentAlt color="white" onClick={onToggle} size={22} style={{marginTop: "3px", marginLeft: "10px", cursor: "pointer"}} />}
                <Text color="white" cursor="pointer" onClick={()=>setOpenModal(true)} fontSize="xs" mt="1" ml="4" >1 Likes</Text>
                {post?.attributes?.comments?.data?.length > 0 && <Text color="white" fontSize="xs" mt="1" ml="4" >{post?.attributes?.comments?.data?.length} comments</Text>}
            </Flex>
            
            <Collapse in={isOpen} >    
            {post?.attributes?.comments?.data?.map((comment, index)=>(
                <Commentary 
                    avatar_url={comment?.attributes?.user_avatar}
                    content={comment?.attributes?.content}
                    likes={comment?.attributes?.likes}
                    username={comment?.attributes?.user} 
                />
            ))}
            </Collapse>
            <CardFooter borderTopStyle="solid" pt="3" pb="3" borderTopWidth="2px" borderTopColor="gray.veryLight" >
                <Flex display="flex" alignItems="center" justifyContent="space-between" w="100%">
                <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Input placeholder='Write your comment' ml="2" mr="2" size="lg" bg="gray.middle" border="none" />
                <Button bg="gray.veryLight" size="lg" color="white" >Send</Button>
                </Flex>
            </CardFooter>
            </Card>
            ))}         
            {/* Likes */}
            <Modal isOpen={openModal}  onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="gray.light" borderStyle="solid" borderColor="gray.veryLight" borderWidth="1px" >
                <ModalHeader color="white" >Likes</ModalHeader>
                <ModalCloseButton color="white" onClick={()=>setOpenModal(false)} />
                <ModalBody>
                    <Flex direction="column" >
                        <Flex alignItems="center" w="100%" justifyContent="space-between" mb="3" >
                            <Flex alignItems="center">
                                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' mr="3" />
                                <Text color="white" >Kent Dodds</Text>
                            </Flex>
                            <Text color="gray.veryLight" >1 dia atrás</Text>
                        </Flex>
                        <Flex alignItems="center" w="100%" mb="3" justifyContent="space-between" >
                            <Flex alignItems="center">
                                <Avatar name='Ryan Florence' mr="3" src='https://bit.ly/ryan-florence' />
                                <Text color="white" >Ryan Florence</Text>
                            </Flex>
                            <Text color="gray.veryLight" >1 dia atrás</Text>
                        </Flex>
                    </Flex>
                </ModalBody>
                </ModalContent>
            </Modal>
            {/* Login */}
            <Modal isOpen={loginModal} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="white" pt="7" pb="5" >
                    <ModalCloseButton color="gray.dark" onClick={()=>setLoginModal(false)} />
                    <ModalBody display="flex" alignItems="center" flexDirection="column">
                        <Square size="14" mb="4" boxShadow="lg" borderRadius="0.5rem" >
                            <RiLoginCircleFill size="2.3rem" color="#363533" />
                        </Square>
                        <Text color="gray.dark" fontWeight="bold" fontSize="lg" >Sign In</Text>
                        <Text color="gray.dark" mb="3" fontWeight="bold" fontSize="sm" >Click to sign in to comment or like posts</Text>
                        <Button leftIcon={<FcGoogle size="1.2rem" />} w="100%" mb="2" border="2px solid" borderColor="#DCDCDC" bg="white" boxShadow="sm" fontSize="sm" >Login with google</Button>
                        <Button leftIcon={<BsLinkedin size="1.2rem" color="#0A66C2" />} bg="white" mb="2" border="2px solid" borderColor="#DCDCDC" boxShadow="sm" w="100%" color="gray.dark" fontSize="sm" >Login with linkedin</Button>
                        <Button leftIcon={<BsGithub size="1.2rem" color="#363533"  />} bg="white" border="2px solid" borderColor="#DCDCDC" boxShadow="sm" w="100%" color="gray.dark" fontSize="sm" >Login with github</Button>
                    </ModalBody>
                </ModalContent>
      </Modal>
      <Modal isOpen={commentsModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.light" className="scrollbar" maxH="500px" >
          <ModalHeader color="white" >Comments</ModalHeader>
          <ModalCloseButton onClick={()=>setCommentsModal(false)} />
          <ModalBody>
            <Box w="100%" h="115px" mb="3" display="flex" flexDirection="column" justifyContent="center" borderRadius="0.5rem" border="1px solid" borderColor="gray.veryLight">
                <Input w="100%" h="55px" borderTop="none" borderLeft="none" borderRight="none" borderRadius="none" />
                <Flex w="100%" mt="2" alignItems="center" px="2" justifyContent="space-between" >
                    <Avatar name='Dan Abrahmov' size="sm" src='https://bit.ly/dan-abramov' />
                    <Button bg="gray.veryLight" >Send</Button>
                </Flex>
            </Box>
            <Commentary 
                    avatar_url="https://bit.ly/dan-abramov"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes={0}
                    username="Dan Abramov" 
            />
            <Commentary 
                    avatar_url="https://bit.ly/dan-abramov"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes={0}
                    username="Dan Abramov" 
            />
            <Commentary 
                    avatar_url="https://bit.ly/dan-abramov"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes={0}
                    username="Dan Abramov" 
            />
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}