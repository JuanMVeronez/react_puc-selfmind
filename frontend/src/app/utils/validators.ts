import { t } from 'i18next';
import { ValidationResponse, CaseFormFormat, CaseFormAction, FormField } from './../types/caseForm';

const errorMsg = {
    required: t("home.form.errors.required"),
    emailType: t("home.form.errors.emailType"),
    numberType: t("home.form.errors.numberType"),
    maxLen: t("home.form.errors.maxLen"),
    minLen: t("home.form.errors.minLen"),
    equalLen: t("home.form.errors.equalLen"),
    maxValue: t("home.form.errors.maxValue"),
    minValue: t("home.form.errors.minValue"),

}


export function defineReturn(validation: ValidationResponse | undefined, base: CaseFormFormat, action: CaseFormAction) {
    if (!!validation?.error) return {...base, [action.fieldId]: { ...base[action.fieldId], isValid: false, error: validation.error }}
    return {...base, [action.fieldId]: { ...base[action.fieldId], isValid: true, error: undefined }}
}

export function mixValidation(...validations: ValidationResponse[]): ValidationResponse | undefined {
    return validations.find(validation => !validation.isValid)
}

export function requiredValidation(value: string): ValidationResponse {
    const isValid = !!value;
    return {isValid, error: !isValid? errorMsg.required : undefined};
}

export function notRequired(value: string): ValidationResponse {
    const isValid = !!value;
    return {isValid, error: undefined};
}

export function emailValidation(value: string): ValidationResponse {
    const isValid = value.search("@") !== -1
    return {isValid, error: !isValid? errorMsg.emailType : undefined};
}

export function lenValidator(value:string, len: number, type: "min" | "max" | "exact"): ValidationResponse {
    let isValid: boolean;
    let errorRes: string;
    if (type === "max") {
        isValid = value.length <= len;
        errorRes = `${errorMsg.maxLen} ${len}`; 
    } if (type === "min") {
        isValid = value.length >= len;
        errorRes = `${errorMsg.minLen} ${len}`;
    } else {
        isValid = value.length === len;
        errorRes = `${errorMsg.equalLen} ${len}`;
    }
    return {isValid, error: !isValid? errorRes : undefined};
}

export function numberValueValidation(value: string, comparation: number, type: "min" | "max"): ValidationResponse {
    if (isNaN(Number(value))) return {isValid: false, error: errorMsg.numberType};
    let isValid: boolean;
    let errorRes: string;
    if (type === "max") {
        isValid = Number(value) < comparation;
        errorRes = `${errorMsg.maxValue} ${comparation}`; 
    } else {
        isValid = Number(value) >= comparation;
        errorRes = `${errorMsg.minValue} ${comparation}`;
    }
    return {isValid, error: !isValid? errorRes : undefined};
}

export function TotalFormValidation(fields: FormField[]) {
    return fields.reduce((acc: boolean, field: FormField) => field.isValid === acc && field.isValid === true, true)
}