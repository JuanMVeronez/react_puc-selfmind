import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

type TableProps = {
    columns: string[];
    data: any[];
}

export function DataTable({ columns, data }: TableProps) {
    return (
        <Table bg="blue.200">
            <Thead>
                <Tr py="2" >
                    {columns.map(name => (
                        <Th border="0"
                            color="pink.600"
                        >{name}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data.map(row => (
                    <Tr>
                        {columns.map(name => (<Th color="white" >{row[name]}</Th>))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}