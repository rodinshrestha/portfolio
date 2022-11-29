import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
import React from "react";

import { ucFirst } from "@/utils/string";

interface IProps {
  type: "text" | "password";
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  touched: boolean | undefined;
  dirty: boolean;
}

const Input = ({
  type,
  label,
  value,
  onChange,
  name,
  error,
  touched,
  dirty,
}: IProps) => {
  // console.log({ error });
  return (
    <FormControl isInvalid={!!error && !!touched && dirty}>
      {label && <FormLabel htmlFor={label}>{ucFirst(label)}</FormLabel>}
      <ChakraInput
        id={type}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
