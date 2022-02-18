import { UserCase } from '../types/case';
import { CaseFormFormat } from './../types/caseForm';

export function formatFormData(formData: CaseFormFormat): UserCase {
    const {isValid, ...labels} = formData;
    
    return {
        name: labels.name.value,
        email: labels.email.value,
        text: labels.text.value,
        age: Number(labels.age.value),
        phone: Number(labels.phone.value),
    }
}