import { ucFirst } from '@/utils/string';
import { FormControl, FormLabel, Input as ChakraInput, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormikValues {
  [field: string]: any;
}

interface IProps {
  type: 'text' | 'password';
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  touched: boolean | undefined;
}

const Input = ({ type, label, value, onChange, name, error, touched }: IProps) => {
  console.log({ error, case: !!error && label !== 'email' ? true : !!touched });
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={label}>{ucFirst(label)}</FormLabel>}
      <ChakraInput id={type} type={type} value={value} onChange={onChange} name={name} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
