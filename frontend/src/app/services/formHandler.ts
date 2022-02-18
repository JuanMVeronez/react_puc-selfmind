import { defineReturn, emailValidation, mixValidation, requiredValidation, lenValidator, numberValueValidation, TotalFormValidation, notRequired } from '../utils/validators';
import { CaseFormAction, CaseFormFormat } from './../types/caseForm';

type ValidationResponse = {
    isValid: boolean;
    error: string | undefined;
}

export const formBaseValue: CaseFormFormat = {
    isValid: false,
    email: {
        value: '', isValid: false, error: undefined
    }, 
    name: {
        value: '', isValid: false, error: undefined
    }, 
    text: {
        value: '', isValid: false, error: undefined
    }, 
    age: {
        value: '', isValid: false, error: undefined
    }, 
    phone: {
        value: '', isValid: false, error: undefined
    },
}

export function FormHandler(base: CaseFormFormat, action: CaseFormAction): CaseFormFormat {
    if (action.type === "change") {
        return {...base, [action.fieldId]: {...base[action.fieldId], value: action.value}}
    }
    if (action.type === "blur") {
        console.log(action.fieldId)
        
        let res: ValidationResponse | undefined;
        switch (action.fieldId) {
            case "name":
                res = mixValidation(requiredValidation(action.value));
                break
            case "text":
                res = mixValidation(requiredValidation(action.value));
                console.log(res)
                break;
            case "email":
                res = mixValidation(requiredValidation(action.value), emailValidation(action.value));
                break
            case "phone": 
                res = mixValidation(notRequired(action.value), lenValidator(action.value, 11, "exact"));
                break;
            case "age":
                res = mixValidation(notRequired(action.value), numberValueValidation(action.value, 120, "max"));
                break
            default:
                break;
        }
        const {isValid, ...rest} = defineReturn(res, base, action)
        const formIsValid = TotalFormValidation(Object.values(rest))
        return {isValid: formIsValid, ...rest};
    }
    return base;
}

