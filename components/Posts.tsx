import { Image, Avatar, Box, Card, CardBody, CardFooter, CardHeader, Collapse, Flex, Heading, IconButton, Input, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Square } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPatchCheckFill, BsGithub, BsLinkedin, BsThreeDotsVertical } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";
import { TfiCommentAlt } from "react-icons/tfi";
import {FcGoogle} from "react-icons/fc";
import Likes from "./Likes";

export default function Posts(){

    const {isOpen, onToggle, onClose} = useDisclosure();
    const [openModal, setOpenModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    
    return(
        <>        
            {/* Post */}
            <Card width="100%" bg="gray.light" mb="3" borderRadius="1rem">
            <CardHeader>
                <Flex>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                    <Box>
                    <Heading size='sm' color="white" fontWeight="normal">Segun Adebayo</Heading>
                    <Flex>
                        <Text fontSize="sm" color="gray.veryLight" mr="2" >Creator, Chakra UI</Text>
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
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />
            <Flex pl="4" pt="4" pb="4" >
                <AiOutlineHeart onClick={()=>setLoginModal(true)} color="white" size={25} style={{cursor: "pointer"}} />
                <TfiCommentAlt onClick={onToggle} color="white" size={22} style={{marginTop: "3px", marginLeft: "10px", cursor: "pointer"}} />
                <Text color="white" cursor="pointer" onClick={()=>setOpenModal(true)} fontSize="xs" mt="1" ml="4" >1 Likes</Text>
                <Text color="white" fontSize="xs" mt="1" ml="4" >1 Comments</Text>
            </Flex>
            
            <Collapse in={isOpen} >
                {/* comentario */}  
                <Flex direction="column" pl="4" borderTopStyle="solid" w="100%" pt="4" pb="4" borderTopWidth="1px" borderTopColor="gray.veryLight" >
                    <Flex mb="2" >
                        <Avatar size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Text fontSize="sm" color="white" ml="2" fontWeight="bold" >Dan Abramov</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="sm" color="white" >With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.</Text>
                    </Flex>
                    <Flex mt="2" >
                        <AiOutlineHeart color="white" size={22} />
                        <Text fontSize="sm" ml="3" mr="3" color="gray.dark" fontWeight="bold" >Reply</Text>
                        <Text fontSize="sm" mr="3" color="gray.veryLight" >6 hours</Text>
                        <Text fontSize="sm" color="gray.veryLight" >1 like</Text>
                    </Flex>
                    {/* subcomentario */}
                    <Flex direction="column" pl="6" w="100%" pt="4" pr="4" >
                    <Flex mb="2" >
                    <Avatar size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    <Text fontSize="sm" color="white" ml="2" fontWeight="bold" >Dan Abramov</Text>
                    </Flex>
                    <Flex>
                    <Text fontSize="sm" color="white" >With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.</Text>
                    </Flex>
                    <Flex mt="2" >
                    <AiOutlineHeart color="white" size={22} />
                    <Text fontSize="sm" ml="3" mr="3" color="gray.dark" fontWeight="bold" >Reply</Text>
                    <Text fontSize="sm" color="gray.veryLight" >6 hours</Text>
                    </Flex>
                    
                </Flex>    
                </Flex>
                {/* comentario */}
                <Flex direction="column" pl="4" borderTopStyle="solid" w="100%" pt="4" pb="4" borderTopWidth="1px" borderTopColor="gray.veryLight" >
                    <Flex mb="2" >
                    <Avatar size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    <Text fontSize="sm" color="white" ml="2" fontWeight="bold" >Dan Abramov</Text>
                    </Flex>
                    <Flex>
                    <Text fontSize="sm" color="white" >With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.</Text>
                    </Flex>
                    <Flex mt="2" >
                    <AiOutlineHeart color="white" size={22} />
                    <Text fontSize="sm" ml="3" mr="3" color="gray.dark" fontWeight="bold" >Reply</Text>
                    <Text fontSize="sm" color="gray.veryLight" >6 hours</Text>
                    </Flex>
                </Flex>
            </Collapse>
            <CardFooter borderTopStyle="solid" pt="3" pb="3" borderTopWidth="2px" borderTopColor="gray.veryLight" >
                <Flex display="flex" alignItems="center" justifyContent="space-between" w="100%">
                <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Input placeholder='Write your comment' size="lg" bg="gray.middle" border="none" w="27rem" />
                </Flex>
            </CardFooter>
            </Card>
            {/* Post */}
            <Card width="100%" bg="gray.light" borderRadius="1rem">
            <CardHeader>
                <Flex>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                    <Box>
                    <Heading size='sm' color="white" fontWeight="normal">Segun Adebayo</Heading>
                    <Text fontSize="sm" color="gray.veryLight" >Creator, Chakra UI</Text>
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
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />
            <Flex pl="4" pt="4" pb="4" >
                <AiOutlineHeart color="white" size={25} />
                <TfiCommentAlt color="white" size={22} style={{marginTop: "3px", marginLeft: "10px"}} />
            </Flex>
            <CardFooter borderTopStyle="solid" pt="3" pb="3" borderTopWidth="2px" borderTopColor="gray.veryLight" >
                <Flex display="flex" alignItems="center" justifyContent="space-between" w="100%">
                <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Input placeholder='Basic usage' size="lg" bg="gray.middle" border="none" w="27rem" />
                </Flex>
            </CardFooter>
            </Card>
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
        </>
    )
}