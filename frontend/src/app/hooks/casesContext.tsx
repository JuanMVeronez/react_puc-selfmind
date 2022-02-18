import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react"
import { useGet, usePost } from "./crudHooks";
import { formBaseValue, FormHandler } from "../services/formHandler";
import { UserCase } from "../types/case";
import { CaseFormAction, CaseFormFormat } from "../types/caseForm";
import { formatFormData } from "../utils/formatFormData";

type CasesProviderProps = {
    children: ReactNode;
}

type CasesContextData = {
    cases: UserCase[],
    newCase: CaseFormFormat,
    setNewCase: React.Dispatch<CaseFormAction>,
    createUserCase: () => Promise<void>,
    creationLoading: boolean
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

export function CasesProvider({children}: CasesProviderProps) {
    const [cases, setCases] = useState<UserCase[]>([]);
    const [newCase, setNewCase] = useReducer(FormHandler, formBaseValue);

    const {response} = useGet<UserCase[]>('cases');
    const {apiPost, loading: creationLoading} = usePost<UserCase>('cases')

    const createUserCase = async () => {
        const caseData = formatFormData(newCase)
        await apiPost(caseData);
        setCases([...cases, caseData])
        setNewCase({type: "reset"} as any)
    }
    
    useEffect(() => {
        if (!!response) {
            setCases(response.data);    
        } 
    }, [response, newCase])

    return (
        <CasesContext.Provider value={{
            cases,
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