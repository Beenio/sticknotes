export default class InvalidInputException extends Error {
    constructor(message: string) {
        super(`Invalid Input: ${message}`)
    }
}