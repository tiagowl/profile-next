import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, ListItem, Stack, Tag, Text, UnorderedList } from "@chakra-ui/react";
import skills from "../data/skills";
import {isMobile} from "react-device-detect";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import Formations from "./Formations";
import {useRouter} from "next/router";

export default function Informations(){

  const [show, setShow] = useState(false);
  const router = useRouter();

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
                    <Avatar name='Segun Adebayo' size={["xl", "lg", "lg"]} mt={["6.5rem","8rem","8rem"]} borderStyle="solid" borderWidth="5px" borderColor="gray.dark" src='https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-1/260771930_437837497914364_1749631706274113420_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFHPXBzZ0Na9ICQtssu-sBGz7R_G15DyQTPtH8bXkPJBPrxMIJpURTLSECc7Div1iS_ZxY2yDe244NHCfYu7b29&_nc_ohc=t408g1y7dlEAX_jSZxu&_nc_ht=scontent-gru1-1.xx&oh=00_AfDvELWbWITxt3iv1RWUAwUAAVKF0gv7S3zTP3fm8dHubQ&oe=63CF25C3' />
                </CardHeader>
                <CardBody borderBottomStyle="solid" borderBottomWidth="1px" borderColor="gray.dark" pb="1" pt="8" >
                    <Heading size='sm' color="white" textAlign="center">Tiago Winkel Landi</Heading>

                    <Text py='2' fontSize="sm" color="white" textAlign="center">
                    Olá, sou desenvolvedor web, apaixonado por aplicar soluções personalizadas afim de impactar a vida das pessoas através de ferramentas web.
                    </Text>
                </CardBody>

                <CardFooter pt="2">
                    <Button onClick={()=> router.push("https://www.linkedin.com/in/tiagowl/")} variant='solid' w="100%" color="white" bg='gray.veryLight'>
                    Linkedin
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