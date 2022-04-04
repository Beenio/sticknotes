import BaseProperty, { InputValidation } from "../../../base/base.property";

export default class YProperty extends BaseProperty<number, number> {
    
    validade(input: number): InputValidation<number> {
        return {
            isValid: typeof input == 'number',
            input,
            message: `Y should be a number`
        }
    }

    create(input: number): number {
        return input
    }
}