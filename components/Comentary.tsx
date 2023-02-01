import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineHeart } from "react-icons/ai";

interface Props{
    username?: string;
    content?: string;
    created_at?: Date;
    likes?: number;
    children?: ReactNode;
    subcommentary?: boolean;
}

export default function Commentary({subcommentary, children}: Props) {
    return (
        <Flex direction="column" pl={subcommentary ? "6" : "4"} borderTopStyle={subcommentary ? "none" : "solid"} w="100%" pt="4" pb={subcommentary ? "1" : "4"} borderTopWidth="1px" borderTopColor="gray.veryLight" >
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
            {children}
        </Flex>
    );
}