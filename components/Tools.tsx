import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { SiChakraui, SiNextdotjs, SiStrapi, SiSupabase } from "react-icons/si";

export default function Tools () {
    return(
        <>
        <Text color="white" fontWeight="bold" mt="4" mb="2" >Powered with</Text>
            <Flex w="60%" justifyContent="space-between" >
                <Tooltip label="Next" >
                    <SiNextdotjs color="white" size={25}/>
                </Tooltip>
                <Tooltip label="Chakra UI" >
                    <SiChakraui color="white" size={25} />
                </Tooltip>
                <Tooltip label="Strapi" >
                    <SiStrapi color="white" size={25} />
                </Tooltip>
                <Tooltip label="Supabase" >
                    <SiSupabase color="white" size={25} />
                </Tooltip>
            </Flex>
        </>
    );
}