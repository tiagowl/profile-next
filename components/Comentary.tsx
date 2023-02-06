import { Avatar, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

interface Props{
    username?: string;
    content?: string;
    created_at?: Date;
    likes?: number;
    children?: ReactNode;
    subcommentary?: boolean;
    avatar_url?: string;
}

export default function Commentary({subcommentary, children, content, avatar_url, username, likes}: Props) {
    return (
        <Flex direction="column" pl={subcommentary ? "6" : "4"} borderTopStyle={subcommentary ? "none" : "solid"} w="100%" pt="4" pb={subcommentary ? "1" : "4"} borderTopWidth="1px" borderTopColor="gray.veryLight" >
            <Flex mb="2" justifyContent="space-between" w="100%" pr="4" >
                <Flex>
                    <Avatar size="sm" name='Dan Abrahmov' src={avatar_url} />
                    <Text fontSize="sm" color="white" ml="2" fontWeight="bold" >{username}</Text>
                </Flex>
                <BsThreeDots size="1.2rem" />
            </Flex>
            <Flex>
                <Text fontSize="sm" color="white" >{content}</Text>
            </Flex>
            <Flex mt="2" >
                <AiOutlineHeart color="white" size={22} />
                <Text fontSize="sm" mr="3" ml="3" color="gray.dark" >6 hours</Text>
                <Text fontSize="sm" color="gray.veryLight" >{likes} like</Text>
            </Flex>
            {children}
        </Flex>
    );
}