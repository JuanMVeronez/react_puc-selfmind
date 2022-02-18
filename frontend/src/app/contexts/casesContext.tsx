import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react"
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
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

export function CasesProvider({children}: CasesProviderProps) {
    const [cases, setCases] = useState<UserCase[]>([]);
    const [newCase, setNewCase] = useReducer(FormHandler, formBaseValue)   

    useEffect(() => {
        api.get<UserCase[]>('/cases').then(res => setCases(res.data));
    }, [])
    
    
    return (
        <CasesContext.Provider value={{
            cases,
            newCase,
            setNewCase
        }}>
            {children}
        </CasesContext.Provider>
    );
}

export const useCases = () => useContext(CasesContext)