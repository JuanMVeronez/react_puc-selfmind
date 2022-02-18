import { ValidationResponse, CaseFormFormat, CaseFormAction, FormField } from './../types/caseForm';

export function defineReturn(validation: ValidationResponse | undefined, base: CaseFormFormat, action: CaseFormAction) {
    if (!!validation?.error) return {...base, [action.fieldId]: { ...base[action.fieldId], isValid: false, error: validation.error }}
    return {...base, [action.fieldId]: { ...base[action.fieldId], isValid: true, error: undefined }}
}

export function mixValidation(...validations: ValidationResponse[]): ValidationResponse | undefined {
    return validations.find(validation => !validation.isValid)
}

export function requiredValidation(value: string): ValidationResponse {
    const isValid = !!value;
    return {isValid, error: !isValid? "Campo necessário" : undefined};
}

export function notRequired(value: string): ValidationResponse {
    const isValid = !!value;
    return {isValid, error: undefined};
}

export function emailValidation(value: string): ValidationResponse {
    const isValid = value.search("@") !== -1
    return {isValid, error: !isValid? "Precisa ser um e-mail" : undefined};
}

export function lenValidator(value:string, len: number, type: "min" | "max" | "exact"): ValidationResponse {
    let isValid: boolean;
    let errorRes: string;
    if (type === "max") {
        isValid = value.length <= len;
        errorRes = `Esse campo precisa ter até ${len} caracteres`; 
    } if (type === "min") {
        isValid = value.length >= len;
        errorRes = `Esse campo precisa ter pelo menos ${len} caracteres`;
    } else {
        isValid = value.length === len;
        errorRes = `Esse campo precisa ter ${len} caracteres`;
    }
    return {isValid, error: !isValid? errorRes : undefined};
}

export function numberValueValidation(value: string, comparation: number, type: "min" | "max"): ValidationResponse {
    if (isNaN(Number(value))) return {isValid: false, error: "O valor deve ser um número"};
    let isValid: boolean;
    let errorRes: string;
    if (type === "max") {
        isValid = Number(value) < comparation;
        errorRes = `Precisa ser menor que ${comparation}`; 
    } else {
        isValid = Number(value) >= comparation;
        errorRes = `Precisa ser maior que ${comparation}`;
    }
    return {isValid, error: !isValid? errorRes : undefined};
}

export function TotalFormValidation(fields: FormField[]) {
    return fields.reduce((acc: boolean, field: FormField) => field.isValid === acc && field.isValid === true, true)
}