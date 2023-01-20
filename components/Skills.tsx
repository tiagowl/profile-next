import { Flex, Tag, Text } from "@chakra-ui/react";
import skills from "../data/skills";


export default function Skills () {
    return (
        <>
            <Text mt="4" color="white" fontWeight="bold" >Skills</Text>
            <Flex flexWrap="wrap" mt="3" >
                {skills.map((skill)=>(
                    <Tag bg="gray.veryLight" color="white" mr="2" mb="3" >{skill}</Tag>
                ))}
            </Flex>
        </>
    )
}