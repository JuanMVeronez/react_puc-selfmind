import { t } from "i18next";

import { DataTable } from "../components/DataTable";
import { TitleBelt } from "../components/TitleBelt";
import { useCases } from "../hooks/casesContext";

const columns = [
    {value: 'name', title: t("users.table.name")}, 
    {value: 'age', title: t("users.table.age")}, 
    {value: 'phone', title: t("users.table.phone")}, 
    {value: 'email', title: t("users.table.email")}
]

export default function Users() {
    const {users} = useCases()

    return !!users && (
        <>
            <TitleBelt title={t("users.title")}
                mt="8"
            />
            <DataTable data={users} columns={columns} />
        </>
    );
}