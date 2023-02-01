import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { experiences } from "../data/experiences";

export default function Experiences() {

    return(
        <>
            <Card bg={["gray.dark","gray.light","gray.light"]} boxShadow={["none", "md", "md"]} w="100%"  borderRadius="1rem">
            <CardHeader pt="2" pb="0" pl={["0", "4", "4"]} >
              <Heading size="sm" fontWeight="semibold" color="white" >Experiences</Heading>
            </CardHeader>
            <CardBody pl={["0", "4", "4"]} pr={["0", "4", "4"]} >
              {experiences?.map((experience)=>(
                <Card maxW='md' mb="3" bg="gray.middle" borderRadius="1rem" >
                    <CardHeader pb="0" >
                      <Flex>
                        <Flex flex='1' gap='3'>
                          <Avatar name='Segun Adebayo' borderStyle="solid" borderColor="gray.dark" borderWidth="3px" size="md" src={experience.logo} />
                          <Box>
                            <Heading size='xs' color="white">{experience.enterprise}</Heading>
                            <Text fontSize="xs" color="gray.veryLight" >{experience.post}</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Text color="white" fontSize="sm" >
                        {experience.description}
                      </Text>
                    </CardBody>
                  </Card>
              ))}
            </CardBody>
          </Card>
        </>
    );
}