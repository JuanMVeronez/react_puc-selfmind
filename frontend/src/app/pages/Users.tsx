import { DataTable } from "../components/DataTable";
import { TitleBelt } from "../components/TitleBelt";
import {User} from "../types/user"

export default function Users() {
    const users: User[] = [
        {name: 'Valdemir', age: 22, phone: "123", email: "teste"},
        {name: 'Valdemir', age: 22, phone: "123", email: "teste"},
        {name: 'Valdemir', phone: "123", email: "teste"},
        {name: 'Valdemir', age: 22, phone: "123", email: "teste"},
        {name: 'Valdemir', age: 22, phone: "123", email: "teste"}
    ]    

    return (
        <>
            <TitleBelt title="Lista de usuários que mandaram mensagens"
                mt="8"
            />
            <DataTable data={users} columns={['name', 'age', 'phone', 'email']} />
        </>
    );
}