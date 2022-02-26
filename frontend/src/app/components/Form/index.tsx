import { Stack, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { ChangeEvent, FormEvent } from "react";
import { useCases } from "../../hooks/casesContext";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";

// TODO: #1 form não está funcionando corretamente e não mostra erros

export function Form() {
    const {newCase, setNewCase, createUserCase} = useCases()

    function formHandler(e: ChangeEvent<HTMLInputElement>) {
        setNewCase({type: e.type, fieldId: e.target.id as any, value: e.target.value})
    }

    function submitHandler(e: FormEvent<HTMLDivElement>) {
        e.preventDefault();
        createUserCase()
    }

    return (
        <Stack as="form" spacing="8" onSubmit={submitHandler}
            mr="4"
            my="8"
            bg="gray.500"
            w="40%"
            maxW={650}
            borderRadius={8}
            align="center"
            p={6}>
            <Text as="h2" fontWeight="bold" fontSize={["xl","2xl"]} align="center">
                {t("home.form.title")}
            </Text>
            <Stack spacing={4} w="100%">
                <Input label={`${t("home.form.label.name")} *`} name="name" placeholder={t("home.form.placeholder.name")}
                    value={newCase.name.value} onBlur={formHandler} onChange={formHandler} error={newCase.name.error}
                />
                <Input label={`${t("home.form.label.text")} *`} name="text" placeholder={t("home.form.placeholder.text")} 
                    value={newCase.text.value} onBlur={formHandler} onChange={formHandler} error={newCase.text.error}
                />
                <Input label={`${t("home.form.label.email")} *`} name="email" placeholder={t("home.form.placeholder.email")}
                    value={newCase.email.value} onBlur={formHandler} onChange={formHandler} error={newCase.email.error}
                />
                <Input label={t("home.form.label.phone")} name="phone" type="number" placeholder={t("home.form.placeholder.phone")}
                     value={newCase.phone.value} onBlur={formHandler} onChange={formHandler} error={newCase.phone.error}
                />
                <Input label={t("home.form.label.age")} name="age" placeholder={t("home.form.placeholder.age")}
                    value={newCase.age.value} onBlur={formHandler} onChange={formHandler} error={newCase.age.error} 
                />
            </Stack>
            <SubmitButton disabled={!newCase.isValid}/>
        </Stack>
    );
}