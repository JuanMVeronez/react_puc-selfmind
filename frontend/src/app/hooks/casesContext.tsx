import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react"
import { useQuery, useMutation } from '@apollo/client';

import { formBaseValue, FormHandler } from "../services/formHandler";
import { UserCase } from "../types/case";
import { CaseFormAction, CaseFormFormat } from "../types/caseForm";
import { formatFormData } from "../utils/formatFormData";
import { User } from "../types/user";
import { LOAD_CASES, LOAD_CLIENTS } from "../gql/Queries";
import { CREATE_CASE_MUTATION } from "../gql/Mutations";


type CasesProviderProps = {
    children: ReactNode;
}

type CasesContextData = {
    cases: UserCase[],
    users: User[],
    newCase: CaseFormFormat,
    setNewCase: React.Dispatch<CaseFormAction>,
    createUserCase: () => Promise<void>,
    creationLoading: boolean
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

export function CasesProvider({children}: CasesProviderProps) {
    const [cases, setCases] = useState<UserCase[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [newCase, setNewCase] = useReducer(FormHandler, formBaseValue);

    const { data: casesData } = useQuery(LOAD_CASES);
    const { data: clientsData } = useQuery(LOAD_CLIENTS);
    
    const [ createCase, { loading: creationLoading }] = useMutation(CREATE_CASE_MUTATION);


    const createUserCase = async () => {
        const caseData = formatFormData(newCase)
        const {data: { createCase: res }} = await createCase({
            variables: {
                name: caseData.name,
                age: caseData.age,
                email: caseData.email,
                phone: caseData.phone,
                text: caseData.text
            }
        })
        setCases([...cases, res])
        setNewCase({type: "reset"} as any)
    }
    
    useEffect(() => {
        if (!!casesData) setCases(casesData.getAllCases);
        if (!!clientsData) setUsers(clientsData.getAllCases);
    }, [casesData, clientsData]);

    return (
        <CasesContext.Provider value={{
            cases,
            users,
            newCase,
            setNewCase,
            createUserCase,
            creationLoading,
        }}>
            {children}
        </CasesContext.Provider>
    );
}

export const useCases = () => useContext(CasesContext)