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
                        <Avatar borderWidth="3px" borderStyle="solid" borderColor="gray.dark" name='Segun Adebayo' src='https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-1/260771930_437837497914364_1749631706274113420_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFHPXBzZ0Na9ICQtssu-sBGz7R_G15DyQTPtH8bXkPJBPrxMIJpURTLSECc7Div1iS_ZxY2yDe244NHCfYu7b29&_nc_ohc=t408g1y7dlEAX_jSZxu&_nc_ht=scontent-gru1-1.xx&oh=00_AfDvELWbWITxt3iv1RWUAwUAAVKF0gv7S3zTP3fm8dHubQ&oe=63CF25C3' />

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
                    <Link href={post.link} fontSize="sm" color="white" >Link do projeto</Link>
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