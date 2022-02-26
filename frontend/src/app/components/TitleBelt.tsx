import { Flex, FlexProps, Text } from "@chakra-ui/react";

type TitleBeltProps = FlexProps & {
    title: string;
}

export function TitleBelt({ title, ...rest }: TitleBeltProps) {
    return (
        <Flex w="100%" align="center" justify="center" bg="gray.400" py="4" {...rest}>
            <Text as="h3" fontSize="2xl" fontWeight="bold"
                color="pink.200"
            >{title}</Text>
        </Flex>
    );
}