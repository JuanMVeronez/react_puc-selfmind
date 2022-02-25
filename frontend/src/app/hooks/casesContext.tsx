import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react"
import { useGet, usePost } from "./crudHooks";
import { formBaseValue, FormHandler } from "../services/formHandler";
import { UserCase } from "../types/case";
import { CaseFormAction, CaseFormFormat } from "../types/caseForm";
import { formatFormData } from "../utils/formatFormData";
import { User } from "../types/user";

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

    const {response: caseResponse} = useGet<UserCase[]>('cases');
    const {response: userResponse} = useGet<User[]>('users')
    
    const {apiPost, loading: creationLoading} = usePost<UserCase>('cases')

    const createUserCase = async () => {
        const caseData = formatFormData(newCase)
        await apiPost(caseData);
        setCases([...cases, caseData])
        setNewCase({type: "reset"} as any)
    }
    
    useEffect(() => {
        if (!!caseResponse) setCases(caseResponse.data);
        if (!!userResponse) setUsers(userResponse.data)
    }, [caseResponse, userResponse, newCase])

    return (
        <CasesContext.Provider value={{
            cases,
            users,
            newCase,
            setNewCase,
            createUserCase,
            creationLoading
        }}>
            {children}
        </CasesContext.Provider>
    );
}

export const useCases = () => useContext(CasesContext)