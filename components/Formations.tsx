import { Avatar, Flex, ListItem, UnorderedList, Text } from "@chakra-ui/react";

export default function Formations(){
    return(
        <>        
            <Text mt="4" color="white" fontWeight="bold" >Formations</Text>
            <UnorderedList listStyleType="none" ml="0" mt="2" >
                <ListItem display="flex" mb="3" >
                    <Avatar name='Segun Adebayo' size="lg" borderRadius="xl" borderStyle="solid" borderWidth="4px" borderColor="gray.light" src="https://media.licdn.com/dms/image/C4D0BAQHN_FEbPNA_kg/company-logo_200_200/0/1672683850281?e=1680739200&v=beta&t=QQHI7OCiDJF_WIE3_uS2VtZdOhHQO54ATpvPCxB2pb8" />
                    <Flex direction="column" ml="3" >
                        <Text fontWeight="normal" fontSize="sm" color="white" >Análise e Desenvolvimento de Sistemas</Text>
                        <Text color="gray.veryLight" fontSize="sm" >2018-2022</Text>  
                    </Flex>              
                </ListItem>
                <ListItem display="flex" >
                    <Avatar name='Segun Adebayo' size="lg" borderRadius="xl" borderStyle="solid" borderWidth="4px" borderColor="gray.light" src="https://media.licdn.com/dms/image/C4D0BAQHN_FEbPNA_kg/company-logo_200_200/0/1672683850281?e=1680739200&v=beta&t=QQHI7OCiDJF_WIE3_uS2VtZdOhHQO54ATpvPCxB2pb8" />
                    <Flex direction="column" ml="3" >
                        <Text fontWeight="normal" color="white" fontSize="sm" >Técnico em Informática</Text>
                        <Text color="gray.veryLight" fontSize="sm" >2016-2018</Text>  
                    </Flex>              
                </ListItem>
            </UnorderedList>
        </>
    )
}