export type CaseFormFormat = {
    isValid: boolean,
    email: FormField, 
    name: FormField, 
    text: FormField, 
    age: FormField, 
    phone: FormField, 
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

export type FormField = {
    value: string, isValid: boolean, error?: string
}