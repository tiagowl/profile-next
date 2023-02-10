import { Avatar, Card, CardBody, Flex, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, TagLabel, TagLeftIcon, useDisclosure } from "@chakra-ui/react";
import Main from "../components/Main";
import {BsFillCalendarWeekFill, BsImage} from "react-icons/bs";
import {RiVideoFill} from "react-icons/ri";
import {ImList2} from "react-icons/im";
import {GiHammerBreak} from "react-icons/gi";
import {BrowserView, MobileView} from "react-device-detect";
import { useEffect, useState } from "react";
import Skills from "../components/Skills";
import Formations from "../components/Formations";
import Experiences from "../components/Experiences";
import Posts from "../components/Posts";

export default function Home() {

  const tagPosts = [
    { IconColor: "green.300", Icon: BsImage, label: "Photo" },
    { IconColor: "blue.300", Icon: RiVideoFill, label: "Video" },
    { IconColor: "red.300", Icon: ImList2, label: "Poll" },
    { IconColor: "yellow.300", Icon: BsFillCalendarWeekFill, label: "Schedule" }
  ]

  const [show, setShow] = useState(false);

  const {isOpen, onToggle} = useDisclosure();

  useEffect(()=>{
    if(typeof window !== "undefined"){
      setShow(true);
    }else{
      setShow(false)
    }
  }, []);

  if(show) return (
    <Main>
      <BrowserView>
        {/* Post input */}
        <Card borderRadius="1rem" bg="gray.light" mb="3">
          <CardBody padding="4" >
            <Flex>
              <Avatar borderWidth="3px" size="md" bg="gray.veryLight" borderStyle="solid" borderColor="gray.dark" />
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
        <Posts/>
      </BrowserView>
      <MobileView>
        <Tabs isFitted >
          <TabList borderBottomWidth="0.5px" borderBottomColor="gray.light" >
            <Tab display="flex" justifyContent="center" alignItems="center" _selected={{borderBottomWidth: "0.5px", borderBottomColor: "#6b6a67"}} >
              <BsImage fontSize="1.5rem" color="#68D391" />
            </Tab>
            <Tab display="flex" justifyContent="center" alignItems="center" _selected={{borderBottomWidth: "0.5px", borderBottomColor: "#6b6a67"}} >
              <GiHammerBreak fontSize="1.8rem" color="#63B3ED" />
            </Tab>
            <Tab display="flex" justifyContent="center" alignItems="center" _selected={{borderBottomWidth: "0.5px", borderBottomColor: "#6b6a67"}} >
              <ImList2 fontSize="1.5rem" color="#FC8181" />
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Posts/>
            </TabPanel>
            <TabPanel>
              <Skills/>
            </TabPanel>
            <TabPanel>
              <Formations/>
              <Experiences/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MobileView>
    </Main>
  )
}
