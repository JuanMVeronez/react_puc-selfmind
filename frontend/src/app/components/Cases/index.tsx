import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

import { useCases } from "../../hooks/casesContext";
import { TitleBelt } from "../TitleBelt";
import { CaseCard } from "./CaseCard";

export function Cases() {
    const { cases } = useCases()
    if (!!cases.length) return (
        <>
            <TitleBelt title="Veja a história de algumas pessoas que decidiram estar conosco"/>
            <Flex align="center" justify="center"
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