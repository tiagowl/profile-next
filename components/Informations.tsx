import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, ListItem, Stack, Tag, Text, UnorderedList } from "@chakra-ui/react";
import skills from "../data/skills";
import {isMobile} from "react-device-detect";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import Formations from "./Formations";

export default function Informations(){

  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(typeof window !== "undefined"){
      setShow(true);
    }else{
      setShow(false)
    }
  }, []);   

    if(show) return(
        <>
            <Card
                direction="column"
                overflow='hidden'
                variant='outline'
                height="auto"
                bg={["gray.dark", "gray.light", "gray.light"]}
                border="none"
                borderRadius={["none", "1rem", "1rem"]}
            >
                <Stack>
                <CardHeader position="relative" display="flex" justifyContent="center" height="12rem" backgroundSize="cover" backgroundImage="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60">
                    <Avatar name='Segun Adebayo' size={["xl", "lg", "lg"]} mt={["6.5rem","8rem","8rem"]} borderStyle="solid" borderWidth="5px" borderColor="gray.dark" src='https://bit.ly/sage-adebayo' />
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
            {!isMobile &&
                <>    
                    <Skills/>
                    <Formations/>
                </>
            }
          </>
    );
}