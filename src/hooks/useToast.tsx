import { useToast as useChakraToast } from "@chakra-ui/react";

// interface Itoast {
//   title: string;
//   description: string;
// }

const useToast = () => {
  const toast = useChakraToast();

  const defaultProperties = {
    duration: 5000,
    isClosable: true,
  };

  const success = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
      status: "success",
      ...defaultProperties,
    });
  };

  const failed = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
      status: "error",
      ...defaultProperties,
    });
  };

  return { success, failed };
};

export default useToast;
