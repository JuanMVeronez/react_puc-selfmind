import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

type TableProps = {
    columns: {
        value: string;
        title: string;
    }[]
    data: any[];
}

export function DataTable({ columns, data }: TableProps) {
    return (
        <Table bg="blue.200">
            <Thead>
                <Tr py="2" >
                    {columns.map(({title}) => (
                        <Th border="0"
                            color="pink.600"
                        >{title}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data.map(row => (
                    <Tr>
                        {columns.map(({value}) => (<Th color="white" >{row[value]}</Th>))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}