import { Avatar, Flex, Text } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

interface Props{
    username?: string;
    content?: string;
    created_at?: Date;
    likes?: number;
    avatar_url?: string;
}

export default function Commentary({content, avatar_url, username, likes}: Props) {
    return (
        <Flex direction="column" w="100%" px="3" mb="2" pt="4" borderTopWidth="1px" borderTopColor="gray.veryLight" >
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
        </Flex>
    );
}