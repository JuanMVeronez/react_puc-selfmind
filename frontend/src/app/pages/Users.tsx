import { t } from "i18next";
import { DataTable } from "../components/DataTable";
import { TitleBelt } from "../components/TitleBelt";
import {User} from "../types/user"

const columns = [
    {value: 'name', title: t("users.table.name")}, 
    {value: 'age', title: t("users.table.age")}, 
    {value: 'phone', title: t("users.table.phone")}, 
    {value: 'email', title: t("users.table.email")}
]

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
            <TitleBelt title={t("users.title")}
                mt="8"
            />
            <DataTable data={users} columns={columns} />
        </>
    );
}