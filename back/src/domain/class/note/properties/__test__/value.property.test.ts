import ValueProperty from "../value.property"

describe('[Input Validation] - Testing value property', () => {
    test('Should return error when passing invalid values', () => {
        expect(() => {
            new ValueProperty(null as unknown as string)
        }).toThrow(Error)

        expect(() => {
            new ValueProperty(undefined as unknown as string)
        }).toThrow(Error)
    })

    test('Should return value when passing valid values', () => {
        const text = new ValueProperty('')
        expect(text.value).toBe('')
    })
})