import InvalidInputException from "../../../../../infra/exceptions/InvalidInput.exception"
import YProperty from "../y.property"

describe('[Input Validation] - Testing y property', () => {
    test('Should return error when passing invalid values', () => {
        expect(() => {
            new YProperty(null as unknown as number)
        }).toThrow(Error)

        expect(() => {
            new YProperty(undefined as unknown as number)
        }).toThrow(Error)
    })

    test('Should return Y when passing valid values', () => {
        const y = new YProperty(100)
        expect(y.value).toBe(100)
    })
})