import BaseProperty, { InputValidation } from "../../../base/base.property";

export default class IdProperty extends BaseProperty<string, string> {
   
    create(input: string): string {
        return input
    }
    
    validade(input: string): InputValidation<string> {
        return {
            isValid: !!input,
            input,
            message: `ID must be valid`
        }
    }
}