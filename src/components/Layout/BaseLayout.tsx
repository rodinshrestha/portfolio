import { Box } from "@chakra-ui/react";
import React from "react";
import Router from "next/router";

import useAuth from "@/hooks/useAuth";

import DashboardNavbar from "../DashboardNavBar";
import Sidebar from "../Sidebar";

interface IProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IProps) => {
  const { email, loader } = useAuth();

  React.useEffect(() => {
    if (!email && !loader) {
      Router.push("/login");
    }
  }, [email, loader]);

  if (loader) return <div>loading</div>;

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
            md: 6,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default BaseLayout;
