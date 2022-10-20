import {
  Box,
  Button,
  // Checkbox,
  Container,
  // Divider,
  // FormControl,
  // FormLabel,
  Heading,
  // HStack,
  Avatar,
  Stack,
  // Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import useToast from '@/hooks/useToast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/Input';
import React from 'react';
import axios from '@/utils/axios';
import { saveToLocalStorage } from '@/utils/localstorage';

const Login = () => {
  const toast = useToast();
  const ref: any = React.useRef();

  const { handleChange, handleSubmit, errors, values, touched, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      email: Yup.string().email('not a valid email').required('is required'), //.email(` must be a valid email address.`),
      password: Yup.string().required('is required')
    }),
    onSubmit: (values) =>
      axios
        .post('/user/login', { ...values })
        .then((res) => {
          saveToLocalStorage('token', res.data.token);
          toast.success('success', `Logged in`);
        })
        .catch((e) => {
          toast.failed('Failed', e?.response.data || 'Internal server error');
        })
  });

  const handleMouseEnter = (error: any, touched: any) => {
    console.log(error, touched);
    if (!Object.keys(error).length) return;

    const { justifyContent } = ref.current.style;

    if (justifyContent) {
      ref.current.style.justifyContent =
        justifyContent === 'flex-start' ? 'flex-end' : 'flex-start';
    } else {
      ref.current.style.justifyContent = 'flex-start';
    }
  };

  // console.log(errors);

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack display="flex" flexDirection="column" gap={6} alignItems="center">
          <Avatar />

          <Heading>Welcome</Heading>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}>
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
              />
              <Input
                name="password"
                label="password"
                type="text"
                error={errors.password}
                value={values.password}
                onChange={handleChange}
                touched={touched.password}
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
                onMouseEnter={() => handleMouseEnter(errors, touched)}
                loadingText="Loggingin..."
                disabled={isSubmitting}
                mt={6}>
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
