import { Button, Icon } from "@chakra-ui/react";
import { GiLotus } from "react-icons/gi";

type SubmitButtonProps = {
    disabled?: boolean
}

export function SubmitButton({disabled=false}: SubmitButtonProps) {
    return (
        <Button type="submit" disabled={disabled}
            _hover={{bg: "pink.500"}}  
            bg="pink.400"  
            w="100%" 
            h="10" 
            fontWeight={"bold"} 
        >
            Finalizar Cadastro <Icon as={GiLotus} ml="1" fontSize={24}></Icon> 
        </Button>

    );
}