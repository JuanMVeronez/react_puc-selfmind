import { ValidationResponse, CaseFormFormat, CaseFormAction } from './../types/caseForm';

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

export function emailValidation(value: string): ValidationResponse {
    const isValid = value.search("@") !== -1
    return {isValid, error: !isValid? "Precisa ser um e-mail" : undefined};
}

export function lenValidator(value:string, len: number, type: "min" | "max") {
    // let isValid: boolean;
    // if (type === "max") {

    // }
    // return {isValid, error: !isValid? "Precisa ser um e-mail" : undefined};
}