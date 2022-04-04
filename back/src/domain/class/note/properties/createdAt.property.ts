import BaseProperty, { InputValidation } from "../../../base/base.property";

export default class CreatedAtProperty extends BaseProperty<Date, Date> {
    
    validade(input: Date): InputValidation<Date> {
        return {
            isValid: input instanceof Date,
            input,
            message: `CreatedAt must be a valid date`
        }
    }

    create(input: Date): Date {
        return input
    }
}