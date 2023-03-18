import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Link, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, ModalFooter, Button, Input } from "@chakra-ui/react";
import { BsFillPatchCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { useState } from "react";
import Commentary from "./Commentary";

interface Props{
    content: string;
    link: string;
    image: string;
}

export default function Post({content, link, image}: Props){

    const {isOpen, onToggle, onClose} = useDisclosure();
    const [openModal, setOpenModal] = useState(false);
    const [modalComments, setOpenModalComments] = useState(false);


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
                        {content}
                        </Text>
                        <Link href={link} fontSize="sm" color="blue.300" >Link do projeto</Link>
                    </CardBody>
                    <Image
                        objectFit='cover'
                        src={image}
                        alt='Chakra UI'
                    />
                    <Flex pl="4" pt="4">
                        <AiOutlineHeart color="white" size={25} style={{cursor: "pointer"}} />
                        <TfiCommentAlt color="white" size={22} style={{marginTop: "3px", marginLeft: "10px", cursor: "pointer"}} />
                        <Text color="white" cursor="pointer"  fontSize="xs" mt="1" ml="4" onClick={()=>setOpenModal(true)} >1 Likes</Text>
                        <Text color="white" fontSize="xs" onClick={()=>setOpenModalComments(true)} cursor="pointer" mt="1" ml="4" > 2 comments</Text>
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
                        <Text color="white" >{content}</Text>
                    </Flex>
                    <Image
                        objectFit='cover'
                        src={image}
                        alt='Chakra UI'
                    />
                    <Flex justifyContent="space-between" px="3" mt="2" mb="2" >
                        <Flex>
                            <AiOutlineHeart color="white" size={25} style={{cursor: "pointer"}} />
                            <Text color="white" ml="2" cursor="pointer" onClick={()=>setOpenModal(true)}  >1 likes</Text>
                        </Flex>
                        <Text color="white" >3 commentaries</Text>
                    </Flex>
                    <Commentary/>
                    <Commentary/>
                    <Commentary/>
                </ModalBody>

                <ModalFooter borderTop="1px solid" borderTopColor="gray.veryLight" px="0" >
                    <Flex px="3" justifyContent="flex-start" w="100%" >
                        <Avatar size="sm" name='Dan Abrahmov' mr="3" />
                        <Input bg="gray.veryLight" border="none" placeholder="write a comment" mr="3" />
                        <Button bg="gray.middle" color="white" >Send</Button>
                    </Flex>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}