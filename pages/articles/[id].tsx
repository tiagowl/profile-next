import { Avatar, Box, Button, Card, CardBody, CardHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Link, Stack, StackDivider, Tag, Text, useDisclosure } from "@chakra-ui/react";
import Main from "../../components/Main";
import {AiOutlineHeart} from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import React from "react";
import Commentary from "../../components/Commentary";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Article(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <Main>
            <Flex w="100%" justifyContent="flex-start" mb="6" display={["none", "flex", "flex"]} >
                <Avatar src="/avatar_profile.jpg" size="md" />
                <Flex flexDirection="column" ml="3" >
                    <Text color="white" mb="1" >Tiago Landi</Text>
                    <Text color="gray.light" >1 ano atrás</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" mb="5" >

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
            </Flex>

            <Flex mb="6" justifyContent={["center", "flex-start", "flex-start"]} >
                <AiOutlineHeart color="white" size={25}/>
                <Text color="white" ml="1" mr="4" >2</Text>
                <TfiCommentAlt color="white" onClick={onOpen} size={22} style={{marginTop: "3px", cursor: "pointer"}} />
                <Text color="white" ml="2" mr="4" >2</Text>
            </Flex>

            <Card bg="gray.middle" >
                <CardHeader>
                        <Heading size='md' fontWeight="semibold" color="white">More from Tiago Landi</Heading>
                </CardHeader>
                <CardBody>
                <Stack spacing='4'>
                    <Box borderBottom="1px solid" borderBottomColor="gray.veryLight" pb="4" >
                        <Heading size='md' color="white" textTransform='uppercase'>
                        CakePHP 3 — Acl Simples
                        </Heading>
                        <Text pt='2' color="white" fontSize='sm'>
                        Muitos tem me questionado sobre como proteger a administração dos vários tipos de usuários logados, menus distintos para tipos diferentes de usuários, enfim, como identificar o tipo do usuário e tomar decisões baseadas neste tipo, não da pra ir a fundo no assunto aqui, mas
                        </Text>
                        <Flex alignItems="center" >
                            <Tag bg="gray.light" mt="2" color="white" mr="2" size="sm" >Javascript</Tag>
                            <Text pt='2' color="gray.veryLight" fontSize='sm' >
                                May 23, 2018
                            </Text>
                        </Flex>
                    </Box>
                    <Box borderBottom="1px solid" borderBottomColor="gray.veryLight" pb="4" >
                        <Heading size='md' color="white" textTransform='uppercase'>
                        Primeiros passos no Laravel 5 - Instalando
                        </Heading>
                        <Text pt='2' color="white" fontSize='sm'>
                        Todos sabem que sou amante de frameworks de todos os tipos, não escondo de ninguém, uso os full-stacks e os micros todos os dias e não paro de me surpreender, a cada novo framework testado descubro
                        </Text>
                        <Flex alignItems="center" >
                            <Tag bg="gray.light" mt="2" color="white" mr="2" size="sm" >Javascript</Tag>
                            <Text pt='2' color="gray.veryLight" fontSize='sm' >
                                May 23, 2018
                            </Text>
                        </Flex>
                    </Box>
                    <Box borderBottom="1px solid" borderBottomColor="gray.veryLight" pb="4" >
                        <Heading size='md' color="white" textTransform='uppercase'>
                        Artigo no blog: PHP e MVC — Tudo o que você precisa saber
                        </Heading>
                        <Text pt='2' color="white" fontSize='sm'>
                        Um artigo postado no meu Blog! Sei que já disse isso antes, mas estou iniciando uma nova fase da minha carreira, não tenho mais vínculos com a School of Net, então decidi re-criar meu blog e focar em freelas. Este foi o primeiro artigo de verdade que eu postei no meu novo blog. PHP e
                        </Text>
                        <Flex alignItems="center" >
                            <Tag bg="gray.light" mt="2" color="white" mr="2" size="sm" >Javascript</Tag>
                            <Text pt='2' color="gray.veryLight" fontSize='sm' >
                                May 23, 2018
                            </Text>
                        </Flex>
                    </Box>
                </Stack>
                </CardBody>
            </Card>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent bg="gray.light" >
                <DrawerCloseButton />
                <DrawerHeader color="white" >Responses(4)</DrawerHeader>

                <DrawerBody>
                    
                    <Input placeholder='What you are thoughts?' mb="2" />
                    <Text color="white" mb="10" >SignIn to comment this post. 
                        <Link color="blue.400" ml="1" isExternal>
                            SignIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                    
                    <Commentary content="Sou uma dessas pessoas que aleatoriamente achou esse texto e se inspirou demais, obrigado por esse artigo!" />
                    <Commentary content="Sou uma dessas pessoas que aleatoriamente achou esse texto e se inspirou demais, obrigado por esse artigo!" />
                    <Commentary content="Sou uma dessas pessoas que aleatoriamente achou esse texto e se inspirou demais, obrigado por esse artigo!" />

                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Main>
    )
}