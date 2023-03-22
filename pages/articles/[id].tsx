import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import Main from "../../components/Main";

export default function Article(){
    return(
        <Main>
            <Flex w="100%" justifyContent="flex-start" mb="6" display={["none", "flex", "flex"]} >
                <Avatar src="/avatar_profile.jpg" size="md" />
                <Flex flexDirection="column" ml="3" >
                    <Text color="white" mb="1" >Tiago Landi</Text>
                    <Text color="gray.light" >1 ano atrás</Text>
                </Flex>
            </Flex>
            <Heading size="lg" mb="6" textAlign={["center", "left", "left"]} color="white" >PHP Deploy com Capistrano</Heading>

            <Text fontSize={"md"} textAlign={["center", "left", "left"]} color="white" mb="3" >
            Deploy é o processo (ou processos) quem dispobiliza a sua aplicação para uso, no nosso caso disponibilizar na internet, antigamente usavamos o FTP (não tão antigamente quanto eu gostaria), hoje temos práticas e ferramentas bem mais interessantes.
            </Text>

            <Text fontSize={"md"} textAlign={["center", "left", "left"]} color="white" mb="3" >
            Deploy é o processo (ou processos) quem dispobiliza a sua aplicação para uso, no nosso caso disponibilizar na internet, antigamente usavamos o FTP (não tão antigamente quanto eu gostaria), hoje temos práticas e ferramentas bem mais interessantes.
            </Text>

            <Text fontSize={"md"} textAlign={["center", "left", "left"]} color="white" mb="3" >
            Deploy é o processo (ou processos) quem dispobiliza a sua aplicação para uso, no nosso caso disponibilizar na internet, antigamente usavamos o FTP (não tão antigamente quanto eu gostaria), hoje temos práticas e ferramentas bem mais interessantes.
            </Text>

            <Text fontSize={"md"} textAlign={["center", "left", "left"]} color="white" mb="3" >
            Deploy é o processo (ou processos) quem dispobiliza a sua aplicação para uso, no nosso caso disponibilizar na internet, antigamente usavamos o FTP (não tão antigamente quanto eu gostaria), hoje temos práticas e ferramentas bem mais interessantes.
            </Text>
        </Main>
    )
}