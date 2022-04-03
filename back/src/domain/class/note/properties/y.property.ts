import BaseProperty, { InputValidation } from "../../../base/base.property";

export default class YProperty extends BaseProperty<number, number> {
    
    validade(input: number): InputValidation<number> {
        return {
            isValid: true,
            input,
            message: ``
        }
    }

    create(input: number): number {
        return input
    }
}