import { Flex, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";

export function Header() {
    return (
        <Flex as="header" w="100%" bg="gray.700" align="center" justify="center">
            <Flex align="center" justify="space-between"
                w="100%"
                maxW={1480}
                h="20"
                mx="auto"
                px="8"
            >
                <Link to="/">
                    <Logo />
                </Link> 
                <Link to="users">
                    <Text 
                        letterSpacing="tight" 
                        fontSize={['xl', '2xl']} 
                        fontWeight="bold" 
                    >{t("shared.header.usersLink")}</Text>
                </Link>
            </Flex>
        </Flex>
    );
}