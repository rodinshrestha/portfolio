import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Heading,
  Avatar,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "@/components/Input";
import useToast from "@/hooks/useToast";
import axios from "@/utils/axios";
import { saveToLocalStorage } from "@/utils/localstorage";
import useAuth from "@/hooks/useAuth";
import useSocket from "@/hooks/useSocket";

const Login = () => {
  const toast = useToast();
  const [count, setCount] = React.useState(0);
  const ref: any = React.useRef();
  const { setUserDetails, email } = useAuth();
  const router = useRouter();
  const { socket } = useSocket();

  React.useEffect(() => {
    console.log(router);

    if (router.route === "/login" && email) {
      router.push("/dashboard");
    }
  }, [router, email]);

  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    touched,
    isSubmitting,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      email: Yup.string().email("not a valid email").required("is required"), //.email(` must be a valid email address.`),
      password: Yup.string().required("is required"),
    }),
    onSubmit: (values) =>
      axios
        .post("/user/login", { ...values })
        .then((res: any) => {
          saveToLocalStorage("token", res.data.token);
          setUserDetails((prev) => ({
            ...prev,
            email: res.data.email,
            id: res.data._id,
          }));
          console.log({ res });
          toast.success("success", `Logged in`);
          socket?.emit("newUser", res.data.email);
          router.push("/dashboard");
        })
        .catch((e) => {
          // console.log(e);
          toast.failed(
            "Failed",
            e?.response.data.message || "Internal server error"
          );
        }),
  });

  const handleMouseEnter = (error: any, handleSubmit: any) => {
    if (!dirty) handleSubmit();
    if (!Object.keys(error).length) {
      setCount(0);
      return;
    }

    setCount((prev) => prev + 1);

    const { justifyContent } = ref.current.style;

    if (justifyContent) {
      ref.current.style.justifyContent =
        justifyContent === "flex-start" ? "flex-end" : "flex-start";
    } else {
      ref.current.style.justifyContent = "flex-start";
    }
  };

  const errMsg =
    "Ain't you tired my friend? why don't u try to fill the form properly?";

  return (
    <Box display="flex" alignItems="center" height="100vh" overflow={"auto"}>
      <Container>
        <Stack spacing="8">
          <Stack
            display="flex"
            flexDirection="column"
            gap={6}
            alignItems="center"
            width="100%"
          >
            <Avatar />

            <Heading>{count > 5 ? errMsg : "welcome"}</Heading>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing="5">
                <Input
                  name="email"
                  label="email"
                  type="text"
                  error={errors.email}
                  value={values.email}
                  onChange={handleChange}
                  touched={touched.email}
                  dirty={!values.email ? true : dirty}
                />
                <Input
                  name="password"
                  label="password"
                  type="text"
                  error={errors.password}
                  value={values.password}
                  onChange={handleChange}
                  touched={touched.password}
                  dirty={!values.password ? true : dirty}
                />
              </Stack>
              <Box display="flex" justifyContent="flex-end" ref={ref}>
                <Button
                  isLoading={isSubmitting}
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="50%"
                  onMouseEnter={() => handleMouseEnter(errors, handleSubmit)}
                  loadingText="Loggingin..."
                  disabled={isSubmitting}
                  mt={6}
                >
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
