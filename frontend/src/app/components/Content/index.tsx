import { Flex } from "@chakra-ui/react";
import { Form } from "../Form";
import { Presentation } from "./Presentation";

export function Content() {
    return (
        <Flex
            justify="space-between"
            align="center"
        >
            <Presentation />
            <Form />
        </Flex>
    );
}