import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { GiLotus } from "react-icons/gi";
import { Input } from "./Input";

export function Form() {
    return (
        <Stack as="form" spacing="8"
            mr="4"
            my="8"
            bg="gray.500"
            w="40%"
            maxW={650}
            borderRadius={8}
            align="center"
            p={6}>
            <Text as="h2" fontWeight="bold" fontSize={["xl","2xl"]} >Se cadastre e venha <Text as="span" color="pink.400" >aprender</Text> com a gente</Text>
            <Stack spacing={4} w="100%">
                <Input label="Nome *" name="name" />
                <Input label="Fale sua experiëncia conosco *" name="declaration"/>
                <Input label="E-mail *" name="email" />
                <Input label="Telefone" name="phone" />
                <Input label="Idade" name="age" />
                
            </Stack>
            <Button bg="pink.400" type="submit" w="100%" h="10" fontWeight={"bold"} >Finalizar Cadastro <Icon as={GiLotus} ml="1" fontSize={24}></Icon> </Button>
        </Stack>
    );
}