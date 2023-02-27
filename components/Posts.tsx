import { Image, Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text, Link } from "@chakra-ui/react";
import { BsFillPatchCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import posts from "../data/posts";

export default function Posts(){

    return(
        <>        
        {posts.map((post)=>(
            <>
                {/* Post */}
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
                    {post.content}
                    </Text>
                    <Link href={post.link} fontSize="sm" color="blue.300" >Link do projeto</Link>
                </CardBody>
                <Image
                    objectFit='cover'
                    src={post.image}
                    alt='Chakra UI'
                />
                <CardFooter borderTopStyle="solid" pt="3" pb="3">
                    
                </CardFooter>
                </Card>
            </>
        ))}
        </>
    )
}