import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";

export function Header() {
    return (
        <Flex as="header" w="100%" bg="gray.700" align="center" justify="center">
            <Flex align="center"
                w="100%"
                maxW={1480}
                h="20"
                mx="auto"
                px="8"
            >
                <Logo />
            </Flex>
        </Flex>
    );
}