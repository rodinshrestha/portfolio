import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { checkAuthenticatedRoute } from "@/utils/check-authenticated-route";
import { getFromLocalStorage } from "@/utils/localstorage";

import theme from "../../theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const isProtectedRoute = checkAuthenticatedRoute(router.pathname);
    if (isProtectedRoute) {
      const token = getFromLocalStorage("token");
      if (!token) {
        router.push("/login");
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />

        <title>Home - Rodin Shrestha</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
