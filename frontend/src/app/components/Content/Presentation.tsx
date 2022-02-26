import { Image, Stack, Text } from "@chakra-ui/react";
import { t } from "i18next";

export function Presentation() {
    return (
        <>
            <Stack
                w={["auto", "auto", 600, 700, 800]}
            >
                <Image src={require('../../../assets/meditationImage.jpg')} 
                    
                />
                <Text as="p" fontSize={"xl"} fontWeight="600"
                    position="relative"
                    color="pink.300"
                    px="16"
                    top="-10"
                    textAlign="center"
                >
                    {t("home.presentation")}
                </Text>
            </Stack>
        </>
    );
}