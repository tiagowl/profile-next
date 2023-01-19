import { Container, Flex } from "@chakra-ui/react";
import Experiences from "./Experiences";
import Informations from "./Informations";

export default function Main({children}){
    return(
        <Container maxWidth="1140px" pl="0" pr="0" >
            <Flex flexDirection={["column", "row", "row"]} pt={["0", "4", "4"]} >
                <Flex w={["100%", "25%", "25%"]} h="auto" direction="column" mr="4" >
                    <Informations/>
                </Flex>
                <Flex className="scrollbar" borderRadius="1rem" w={["100%", "47%", "47%"]} direction="column" pr={["0", "1", "1"]} h="auto" mr={["0", "1", "1"]} >
                    {children}
                </Flex>
                <Flex w={["100%", "25%", "25%"]} display={["none", "flex", "flex"]} h="auto" >
                    <Experiences/>
                </Flex>
            </Flex>
        </Container>
    )
}