import { Container, Flex } from "@chakra-ui/react";
import Experiences from "./Experiences";
import Informations from "./Informations";

export default function Main({children}){
    return(
        <Container maxWidth="1140px" pl="0" pr="0" >
            <Flex>
                <Flex w="25%" h="auto" direction="column" mr="4" >
                    <Informations/>
                </Flex>
                <Flex className="scrollbar" borderRadius="1rem" w="47%" direction="column" pr="1" h="auto" mr="1" >
                    {children}
                </Flex>
                <Flex w="25%" h="auto" >
                    <Experiences/>
                </Flex>
            </Flex>
    </Container>
    )
}