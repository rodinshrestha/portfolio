import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css";
import { AppProps } from "next/app";
import Head from "next/head";

import AuthProvider from "@/Providers/AuthProvider";
import SocketProvider from "@/Providers/SocketProvider";
import ConfigProvider from "@/Providers/ConfigProvider";
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
          <ConfigProvider>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </ConfigProvider>
        </AuthProvider>
      </SocketProvider>
    </>
  );
}

export default MyApp;
