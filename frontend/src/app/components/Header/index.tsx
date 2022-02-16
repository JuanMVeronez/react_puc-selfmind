import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";

export function Header() {
    return (
        <Flex as="header"
            w="100%"
            maxW={1480}
            h="20"
            py="4"
            px="8"
            bg="gray.500"
        >
            <Logo />
        </Flex>
    );
}