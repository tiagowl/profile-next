import { Avatar, Card, CardBody, Container, Flex, HStack, Input, Tag, TagLabel, TagLeftIcon, Text, useDisclosure } from "@chakra-ui/react";
import Experiences from "./Experiences";
import Informations from "./Informations";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiArticleLine, RiPriceTag2Line, RiVideoFill } from "react-icons/ri";
import { BsFillCalendarWeekFill, BsImage } from "react-icons/bs";
import { ImList2 } from "react-icons/im";
import { useRouter } from "next/router";

interface Props{
    children?: ReactNode
}

export default function Main({children}: Props){

    const tagPosts = [
        { IconColor: "green.300", Icon: BsImage, label: "Photo" },
        { IconColor: "blue.300", Icon: RiVideoFill, label: "Video" },
        { IconColor: "red.300", Icon: ImList2, label: "Poll" },
        { IconColor: "yellow.300", Icon: BsFillCalendarWeekFill, label: "Schedule" }
    ]

    const router = useRouter();

    const [avatarUrl, setAvatar] = useState("");

    const notMainPage = () => {
        if(router.pathname !== "/"){
            return "5";
        }else{
            return "0"
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("user_avatar")){
            setAvatar(localStorage.getItem("user_avatar") as string);
        }else{
            setAvatar("");
        }
        console.log(router);
    }, [])

    return(
        <Container maxWidth="1140px" pl="0" pr="0" >
            <Flex flexDirection={["column", "row", "row"]} pt={["0", "4", "4"]} >
                <Flex w={["100%", "25%", "25%"]} h="auto" direction="column" mr="4" >
                    <Informations/>
                </Flex>
                <Flex borderRadius="1rem" w={["100%", "47%", "47%"]} direction="column" pr={["0", "1", "1"]} px={[notMainPage(), "0", "0"]} h="auto" mr={["0", "1", "1"]} >
                    <Flex w="100%" justifyContent="center" display={["none", "flex", "flex"]} >
                        <HStack mb="3" spacing="30px" >
                            <AiOutlineFundProjectionScreen color={router.pathname === "/" ? "yellow": "white"} style={{cursor: "pointer"}} onClick={()=>router.push("/")} fontSize="1.8rem" />
                            <RiArticleLine color={router.pathname.includes("articles") ? "yellow": "white"} fontSize="1.8rem" style={{cursor: "pointer"}} onClick={()=>router.push("/articles")} />
                            <RiPriceTag2Line color={router.pathname === "/promoted" ? "yellow": "white"} style={{cursor: "pointer"}} onClick={()=>router.push("/promoted")} fontSize="1.8rem" />
                        </HStack>
                    </Flex>
                    <Flex flexDirection="column" w="100%" className="scrollbar" >
                        <Card borderRadius="1rem" bg="gray.light" mb="3" display={["none", "flex", "flex"]}>
                            <CardBody padding="4" >
                                <Flex>
                                <Avatar size="md" src={avatarUrl as string} bg="gray.veryLight" />
                                <Input type="text" size="lg" border="None" bg="gray.middle" ml="2"></Input>
                                </Flex>
                                <Flex pl="14" mt="3" justifyContent="space-between" >
                                {tagPosts.map((tag)=>(
                                    <Tag bg="gray.middle">
                                    <TagLeftIcon color={tag.IconColor} as={tag.Icon} />
                                    <TagLabel color="white" >{tag.label}</TagLabel>
                                    </Tag>
                                ))}
                                </Flex>
                            </CardBody>
                        </Card>
                        {children}
                    </Flex>
                </Flex>
                <Flex w={["100%", "25%", "25%"]} display={["none", "flex", "flex"]} flexDirection="column" h="auto" >
                    <Flex w="100%" justifyContent="flex-end" display={["none", "flex", "flex"]} >
                        <Tag size='lg' bg="gray.light" mb="2" borderRadius='full'>
                            <Avatar
                                src={avatarUrl}
                                size='xs'
                                name='Segun Adebayo'
                                ml={-1}
                                mr={2}
                            />
                            <TagLabel color="white" fontSize="sm" >
                                Segun
                            </TagLabel>
                        </Tag>
                    </Flex>
                    <Experiences/>
                </Flex>
            </Flex>
        </Container>
    )
}