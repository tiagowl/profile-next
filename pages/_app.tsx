import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Theme from "../styles/theme";
import "../styles/font.css";
import "../styles/scrollbar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
