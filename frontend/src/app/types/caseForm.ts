export type CaseFormFormat = {
    email: {
        value: string, isValid: boolean, error?: string
    }, 
    name: {
        value: string, isValid: boolean, error?: string
    }, 
    text: {
        value: string, isValid: boolean, error?: string
    }, 
    age: {
        value: string, isValid: boolean, error?: string
    }, 
    phone: {
        value: string, isValid: boolean, error?: string
    }, 
}

export type CaseFormAction = {
    value: string, 
    type: string, 
    fieldId: "email" | "name" | "text" | "age" | "phone"
}

export type ValidationResponse = {
    isValid: boolean;
    error: string | undefined;
}