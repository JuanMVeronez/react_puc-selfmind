import { Input as ChakraInput, InputProps as ChakraInputProps, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = ChakraInputProps & {
    name: string;
    label?: string;
    error?: any
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    {name, label, error=null, ...rest}, ref
) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="pink.300"
                bg="gray.300"
                variant="filled"
                _hover={{
                    bg: 'gray.300',
                }}
                size='lg'
                ref={ref}
                {...rest}
            />
            {!!error && 
                <FormErrorMessage>
                    {error}
                </FormErrorMessage>
            }
        </FormControl>
    );
}

export const Input = forwardRef(InputBase);