import { createContext, ReactNode, useContext, useState } from "react"

type CasesProviderProps = {
    children: ReactNode;
}

type CasesContextData = {

}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

export function CasesProvider({children}: CasesProviderProps) {
    
    return (
        <CasesContext.Provider value={{}}>
            {children}
        </CasesContext.Provider>
    );
}

export const useCases = () => useContext(CasesContext)