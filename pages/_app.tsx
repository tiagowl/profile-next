import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {Analytics} from "@vercel/analytics/react";
import Theme from "../styles/theme";
import { Auth0Provider } from '@auth0/auth0-react';
import "../styles/font.css";
import "../styles/scrollbar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Auth0Provider
      domain="dev-21o4k2um2qt8zohi.us.auth0.com"
      clientId="8ongDbfcin57qaQ2SVF7XLaIbeOYH06n"
      authorizationParams={{
        redirect_uri: "http://localhost:3000"
      }}
      >
        <ChakraProvider theme={Theme} >
          <Component {...pageProps} />
          <Analytics/>
        </ChakraProvider>
      </Auth0Provider>
    </>
  )
}
