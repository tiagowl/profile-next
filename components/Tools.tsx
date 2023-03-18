import { Flex, Text } from "@chakra-ui/react";
import { SiChakraui, SiNextdotjs, SiStrapi, SiSupabase } from "react-icons/si";

export default function Tools () {
    return(
        <>
        <Text color="white" fontWeight="bold" mt="4" mb="2" >Powered with</Text>
            <Flex w="60%" justifyContent="space-between" >
                <SiNextdotjs color="white" size={25}/>
                <SiChakraui color="white" size={25} />
                <SiStrapi color="white" size={25} />
                <SiSupabase color="white" size={25} />
            </Flex>
        </>
    );
}