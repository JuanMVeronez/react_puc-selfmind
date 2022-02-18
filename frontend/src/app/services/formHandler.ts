import { defineReturn, emailValidation, mixValidation, requiredValidation } from '../utils/validators';
import { CaseFormAction, CaseFormFormat } from './../types/caseForm';

type ValidationResponse = {
    isValid: boolean;
    error: string | undefined;
}

export const formBaseValue: CaseFormFormat = {
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
                console.log("s name")
                break
            case "text":
                res = mixValidation(requiredValidation(action.value));
                console.log(res)
                console.log("s text")
                break;
            case "email":
                res = mixValidation(requiredValidation(action.value), emailValidation(action.value));
                console.log("s email")
                break
            
            default:
                break;
        }
        const v = defineReturn(res, base, action)
        console.log(v)
        return v
    }
    return base;
}

