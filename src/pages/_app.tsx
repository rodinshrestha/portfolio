import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';
import 'animate.css';
import Head from 'next/head';

import '../styles/globals.scss';
import { useRouter } from 'next/router';
import React from 'react';
import { getFromLocalStorage } from '@/utils/localstorage';
import { checkAuthenticatedRoute } from '@/utils/check-authenticated-route';

function MyApp({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const isProtectedRoute = checkAuthenticatedRoute(router.pathname);
    if (isProtectedRoute) {
      const token = getFromLocalStorage('token');
      if (!token) {
        router.push('/login');
        return;
      }
    }
  }, [router.pathname]);

  // const router = useRouter();

  // React.useEffect(() => {
  //   if (!getFromLocalStorage('token')) router.push('/login');
  // }, []);

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
