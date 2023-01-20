import { Image, Avatar, Box, Card, CardBody, CardFooter, CardHeader, Collapse, Flex, Heading, IconButton, Input, Text, useDisclosure } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPatchCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";

export default function Posts(){

    const {isOpen, onToggle} = useDisclosure();

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
                <AiOutlineHeart color="white" size={25} />
                <TfiCommentAlt onClick={onToggle} color="white" size={22} style={{marginTop: "3px", marginLeft: "10px"}} />
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
                    <Text fontSize="sm" color="gray.veryLight" >6 hours</Text>
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
                <Input placeholder='Basic usage' size="lg" bg="gray.middle" border="none" w="27rem" />
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
        </>
    )
}