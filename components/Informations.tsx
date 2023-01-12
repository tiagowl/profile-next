import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, ListItem, Stack, Tag, Text, UnorderedList } from "@chakra-ui/react";
import skills from "../data/skills";

export default function Informations(){
    return(
        <>
            <Card
                direction="column"
                overflow='hidden'
                variant='outline'
                height="auto"
                bg="gray.light"
                border="none"
                borderRadius="1rem"
            >
                <Stack>
                <CardHeader position="relative" display="flex" justifyContent="center" height="12rem" backgroundSize="cover" backgroundImage="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60">
                    <Avatar name='Segun Adebayo' size="lg" mt="8rem" borderStyle="solid" borderWidth="5px" borderColor="gray.dark" src='https://bit.ly/sage-adebayo' />
                </CardHeader>
                <CardBody borderBottomStyle="solid" borderBottomWidth="1px" borderColor="gray.dark" pb="1" pt="8" >
                    <Heading size='sm' color="white" textAlign="center">The perfect latte</Heading>

                    <Text py='2' fontSize="sm" color="white" textAlign="center">
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                    </Text>
                </CardBody>

                <CardFooter pt="2">
                    <Button variant='solid' w="100%" color="white" bg='gray.veryLight'>
                    Buy Latte
                    </Button>
                </CardFooter>
                </Stack>
            </Card>
            <Text mt="4" color="white" fontWeight="bold" >Skills</Text>
            <Flex flexWrap="wrap" mt="3" >
                {skills.map((skill)=>(
                    <Tag bg="gray.veryLight" color="white" mr="2" mb="3" >{skill}</Tag>
                ))}
            </Flex>
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
    );
}