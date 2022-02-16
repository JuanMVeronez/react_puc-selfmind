import { Icon, Text } from "@chakra-ui/react";
import { GiLotus } from "react-icons/gi";

export function Logo() {
    return (
        <Text fontWeight="bold"
            letterSpacing="tight" 
            fontSize={['2xl', '3xl']} 
        >
            Self 
            <Text as="span" ml="2" color="pink.300">Mind</Text>
            <Icon as={GiLotus} ml="1" fontSize={24}></Icon>
        </Text>
    );
}