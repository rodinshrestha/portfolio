import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import DashboardNavbar from '../DashboardNavBar';
import Sidebar from '../Sidebar';
import { userInfo } from '@/api/user';
import { getFromLocalStorage } from '@/utils/localstorage';

interface IProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IProps) => {
  const [authLoader, setAuthLoader] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    console.log('i am runnign');
    setAuthLoader(true);
    const token = getFromLocalStorage('token');
    // if (token) {
    //   userInfo()
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // } else {
    //   router.push('/login');
    // }
    if (!getFromLocalStorage('token')) {
      // setAuthLoader(false);
      router.push('/login');
    }
  }, []);

  console.log(router);

  if (authLoader) return <div>Loading....</div>;

  return (
    <Box display="flex" width="100vw" height="100vh">
      <Sidebar />
      <Box width="100%">
        <DashboardNavbar />

        <Box
          as="div"
          overflowY="auto"
          bg="white"
          height="100%"
          color="black"
          p={{
            base: 6,
            sm: 6,
            md: 6
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default BaseLayout;
