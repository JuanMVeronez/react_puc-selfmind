import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { t } from "i18next";

import { useCases } from "../../hooks/casesContext";
import { TitleBelt } from "../TitleBelt";
import { CaseCard } from "./CaseCard";

export function Cases() {
    const { cases } = useCases()
    if (!!cases.length) return (
        <>
            <TitleBelt title={t("home.cases.title")}/>
            <Flex align="center" justify="center"
                w="100%"
                bg="gray.100"
                p="4"
            >
                <SimpleGrid flex="1" gap="6" minChildWidth="320px" alignContent="flex-start" gridColumnStart="1" gridColumnEnd="3">
                    {cases.map(({name, text, age, id}) => (
                        <Box key={id}>
                            <CaseCard  name={name} text={text} age={age} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    );
    return (<></>);
}