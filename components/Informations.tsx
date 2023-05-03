import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Circle, Flex, Heading, Slide, Square, Stack, Text, useDisclosure } from "@chakra-ui/react";
import {isMobile} from "react-device-detect";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import Formations from "./Formations";
import {useRouter} from "next/router";
import Tools from "./Tools";
import { BsFillChatRightFill } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {RiArticleLine, RiPriceTag2Line} from "react-icons/ri";

export default function Informations(){

  const [show, setShow] = useState(false);
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure()

  useEffect(()=>{
    if(typeof window !== "undefined"){
      setShow(true);
    }else{
      setShow(false)
    }
  }, []);   

    if(show){
    } return(
        <>
            <Flex w="100%" display={["none", "flex", "flex"]} >
              <Circle mb="3" size={8} bg="white" >
                <BsFillChatRightFill fontSize="1.1rem" color="#363533" />
              </Circle>
            </Flex>
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
                <CardHeader position="relative" display="flex" flexDirection="column" alignItems="center" height="12rem" backgroundSize="cover" backgroundImage="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60">
                    <Flex w="100%" justifyContent="flex-end" display={["flex", "none", "none"]} >
                      <Square color="gray.veryLight" onClick={onToggle} border="1px solid" size="2.5rem" borderRadius="lg" >
                        <HamburgerIcon fontSize="lg" />
                      </Square>
                    </Flex>
                    <Avatar name='Segun Adebayo' size={["xl", "lg", "lg"]} mt={["4rem","8rem","8rem"]} borderStyle="solid" borderWidth="5px" borderColor="gray.dark" src='/avatar_profile.jpg' />
                </CardHeader>
                <CardBody borderBottomStyle="solid" borderBottomWidth="1px" borderColor="gray.dark" pb="1" pt="8" >
                    <Heading size='sm' color="white" textAlign="center">Tiago Winkel Landi</Heading>

                    <Text py='2' fontSize="sm" color="white" textAlign="center">
                    Olá, sou desenvolvedor web e mobile, apaixonado por aplicar soluções personalizadas afim de impactar a vida das pessoas através de ferramentas web.
                    </Text>
                </CardBody>

                <CardFooter pt="2">
                    <Button onClick={()=> router.push("https://github.com/tiagowl")} variant='solid' w="100%" color="white" bg='gray.veryLight'>
                    Github
                    </Button>
                </CardFooter>
                </Stack>
            </Card>
            {!isMobile &&
                <>    
                    <Skills/>
                    <Formations/>
                    <Tools/>
                </>
            }

          <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Card bg="gray.middle" mx="4" mb="4" >
              <CardHeader display="flex" alignItems="center" flexDirection="column" >
                <Flex bg="gray.veryLight" width="4rem" height="0.4rem" borderRadius="lg" mb="5"></Flex>
                <Heading size='md' color="white" textAlign="center">Menu</Heading>
              </CardHeader>

              <CardBody>
                <Stack spacing='4'>
                  <Box borderBottom="1px solid" onClick={()=>router.push("/")} borderBottomColor="gray.veryLight" display="flex" >
                    <AiOutlineFundProjectionScreen color={"white"} fontSize="1.8rem" />
                    <Text pt='2' color="white" ml="3" fontSize='lg'>
                      Posts
                    </Text>
                  </Box>
                  <Box borderBottom="1px solid" onClick={()=>router.push("/articles")} borderBottomColor="gray.veryLight" display="flex" >
                    <RiArticleLine color={"white"} fontSize="1.8rem" />
                    <Text pt='2' color="white" ml="3" fontSize='lg'>
                      Articles
                    </Text>
                  </Box>
                  <Box borderBottom="1px solid" onClick={()=>router.push("/promoted")} borderBottomColor="gray.veryLight" display="flex" >
                    <RiPriceTag2Line color={"white"} fontSize="1.8rem" />
                    <Text pt='2' color="white" ml="3" fontSize='lg'>
                      Promoted
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Slide>
          </>
    );
      
}