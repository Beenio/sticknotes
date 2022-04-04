import BaseProperty, { InputValidation } from "../../../base/base.property";

export default class ValueProperty extends BaseProperty<string, string> {
   
    create(input: string): string {
        return input
    }
    
    validade(input: string): InputValidation<string> {
        return {
            isValid: typeof input == 'string',
            input,
            message: ``
        }
    }
}