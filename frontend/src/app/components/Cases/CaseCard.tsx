import { Avatar, Flex, Text } from "@chakra-ui/react";
import { t } from "i18next";

export type CaseCardProps = {
    name: string;
    age?: number;
    text: string;
}

export function CaseCard({name, age, text}: CaseCardProps) {
    return (
        <Flex bg="blue.200" w="200" direction="column" borderRadius="8" px="8" py="4">
            <Flex align="center" justify="space-between" mb="8">
                <Flex align="center">
                    <Avatar name={name} size="sm" mr="2" />
                    <Text fontSize="2xl" fontWeight="bold">{name}</Text>

                </Flex>
                {!!age && <Text fontSize="lg">{`${age} ${t('shared.units.age')}`}</Text>}
            </Flex>
            <Text fontSize="xl">{text}</Text>
        </Flex>
    );
}