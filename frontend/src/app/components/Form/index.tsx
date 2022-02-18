import { Stack, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useCases } from "../../contexts/casesContext";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";

export function Form() {
    const {newCase, setNewCase} = useCases()

    function formHandler(e: ChangeEvent<HTMLInputElement>) {
        setNewCase({type: e.type, fieldId: e.target.id as any, value: e.target.value})
    }

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
                <Input value={newCase.name.value} onBlur={formHandler} onChange={formHandler} error={newCase.name.error} label="Nome *" name="name" placeholder="Seu nome" />
                <Input value={newCase.text.value} onBlur={formHandler} onChange={formHandler} error={newCase.text.error} label="Fale sua experiëncia conosco *" name="text" placeholder="Escreva o que quiser aqui ^^" />
                <Input value={newCase.email.value} onBlur={formHandler} onChange={formHandler} error={newCase.email.error} label="E-mail *" name="email" placeholder="email@dominio.com"/>
                <Input value={newCase.phone.value} onBlur={formHandler} onChange={formHandler} error={newCase.phone.error} label="Telefone" name="phone" type="number" placeholder="12345678901" />
                <Input value={newCase.age.value} onBlur={formHandler} onChange={formHandler} error={newCase.age.error} label="Idade" name="age" placeholder="00"/>
                
            </Stack>
            <SubmitButton disabled={!newCase.isValid}/>
        </Stack>
    );
}