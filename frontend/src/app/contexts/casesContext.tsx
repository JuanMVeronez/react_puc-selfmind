import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useReducer, useState } from "react"
import { formBaseValue, FormHandler } from "../services/formHandler";
import { api } from "../services/server";
import { CaseFormAction, CaseFormFormat } from "../types/caseForm";

export type UserCase = {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    age?: number;
    text: string;
}

type CasesProviderProps = {
    children: ReactNode;
}

type CasesContextData = {
    cases: UserCase[],
    newCase: CaseFormFormat,
    setNewCase: React.Dispatch<CaseFormAction>,
    createCase: boolean, 
    setCreateCase: Dispatch<SetStateAction<boolean>>,
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

export function CasesProvider({children}: CasesProviderProps) {
    const [cases, setCases] = useState<UserCase[]>([]);
    const [createCase, setCreateCase] = useState<boolean>(false);
    const [newCase, setNewCase] = useReducer(FormHandler, formBaseValue);

    useEffect(() => {
        api.get<UserCase[]>('/cases').then(res => setCases(res.data));
    }, [newCase])


    
    
    return (
        <CasesContext.Provider value={{
            cases,
            newCase,
            setNewCase,
            createCase, 
            setCreateCase,
        }}>
            {children}
        </CasesContext.Provider>
    );
}

export const useCases = () => useContext(CasesContext)