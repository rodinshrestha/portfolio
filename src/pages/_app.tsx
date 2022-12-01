import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css";
import { AppProps } from "next/app";
import Head from "next/head";

import AuthProvider from "@/Providers/AuthProvider";
import SocketProvider from "@/Providers/SocketProvider";
// import useSocket from "@/hooks/useSocket";

import theme from "../../theme";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home - Rodin Shrestha</title>
      </Head>
      <SocketProvider>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AuthProvider>
      </SocketProvider>
    </>
  );
}

export default MyApp;
