import { Button, Icon, Spinner, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { GiLotus } from "react-icons/gi";
import { useCases } from "../../hooks/casesContext";

type SubmitButtonProps = {
    disabled?: boolean
}

export function SubmitButton({disabled=false}: SubmitButtonProps) {
    const { creationLoading } = useCases();
    return (
        <Button type="submit" disabled={disabled}
            _hover={{bg: "pink.500"}}  
            bg="pink.400"  
            w="100%" 
            h="10" 
            fontWeight={"bold"} 
        >
            {creationLoading
                ? <Spinner /> 
                : <>
                    <Text as="span">{t("home.form.submitButton")}</Text>  
                    <Icon as={GiLotus} ml="1" fontSize={24}></Icon>
                </>
            } 
        </Button>
    );
}