import { Flex, IconButton } from "@chakra-ui/react";
import { RiNotification3Fill } from "react-icons/ri";

const DashboardNavbar = () => {
  return (
    <Flex
      position="relative"
      boxShadow="base"
      h="14"
      px="6"
      alignItems="center"
      bg="white"
      justifyContent="flex-end"
    >
      <IconButton
        variant=""
        colorScheme="blue"
        color="blue"
        size="sm"
        fontSize="xl"
        aria-label="notification"
        icon={<RiNotification3Fill />}
        // onClick={() => setShowSidebar(!showSidebar)}
      />
    </Flex>
  );
};

export default DashboardNavbar;
