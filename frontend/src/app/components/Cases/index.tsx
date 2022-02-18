import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useCases } from "../../hooks/casesContext";
import { CaseCard } from "./CaseCard";

export function Cases() {
    const { cases } = useCases()
    if (!!cases.length) return (
        <>
            <Flex w="100%" align="center" justify="center" bg="gray.400" py="4">
                <Text as="h3" fontSize="2xl" fontWeight="bold"
                    color="pink.200"
                >Veja a história de algumas pessoas que decidiram estar conosco</Text>
            </Flex>
            <Flex
                align="center"
                justify="center"
                w="100%"
                bg="gray.100"
                p="4"
            
            >
                <SimpleGrid flex="1" gap="6" minChildWidth="320px" alignContent="flex-start" gridColumnStart="1" gridColumnEnd="3">
                    {cases.map(({name, text, age}) => (
                        <Box>
                            <CaseCard  name={name} text={text} age={age} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    );
    return (<></>);
}