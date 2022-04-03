import InvalidInputException from "../../infra/exceptions/InvalidInput.exception"
import BaseClass from "./base.class"

export interface InputValidation<T> {
    input: T
    isValid: boolean
    message: string
}
export default abstract class BaseProperty<T, V> extends BaseClass {
    public value: V
    
    abstract validade(input: T) : InputValidation<T>
    abstract create(input: T) : V

    constructor(input: T) {
        super()

        const checkInput = this.validade(input)
        if(!checkInput.isValid) {
            throw new InvalidInputException(`${checkInput.message}`)
        }

        this.value = this.create(input)
    }
}