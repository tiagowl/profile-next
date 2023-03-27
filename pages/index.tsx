import { Avatar, Card, CardBody, Flex, HStack, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, TagLabel, TagLeftIcon, useDisclosure } from "@chakra-ui/react";
import Main from "../components/Main";
import {BsFillCalendarWeekFill, BsImage} from "react-icons/bs";
import {RiArticleFill, RiArticleLine, RiPriceTag2Line, RiVideoFill} from "react-icons/ri";
import {ImList2} from "react-icons/im";
import {GiHammerBreak} from "react-icons/gi";
import {BrowserView, MobileView} from "react-device-detect";
import { useEffect, useState } from "react";
import Skills from "../components/Skills";
import Formations from "../components/Formations";
import Experiences from "../components/Experiences";
import Posts from "../components/Posts";
import Tools from "../components/Tools";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {

  const [show, setShow] = useState(false);

  const {isOpen, onToggle} = useDisclosure();
  const router = useRouter();
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(()=>{
    if(typeof window !== "undefined"){
      setShow(true);
      if(sessionStorage.getItem("urlRedirect") != null){
        localStorage.setItem("username", user?.name as string);
        localStorage.setItem("user_avatar", user?.picture as string);
        router.push(sessionStorage.getItem("urlRedirect") as string);
        sessionStorage.removeItem("urlRedirect");
      }
    }else{
      setShow(false)
    }
  }, []);

  if(show) return (
    <Main>
      <BrowserView>
        {/* Post input */}
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
              <Tools/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MobileView>
    </Main>
  )
}
