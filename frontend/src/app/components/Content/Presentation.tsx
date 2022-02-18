import { Image, Stack, Text } from "@chakra-ui/react";

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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ab doloremque dolorum natus. Voluptates cumque fugiat, fuga dolorum iure mollitia voluptate a itaque voluptatibus libero debitis nesciunt maxime minima est.
                </Text>
            </Stack>
        </>
    );
}