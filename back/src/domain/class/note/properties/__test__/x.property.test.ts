import XProperty from "../x.property"

describe('[Input Validation] - Testing x property', () => {
    test('Should return error when passing invalid values', () => {
        expect(() => {
            new XProperty(null as unknown as number)
        }).toThrow(Error)

        expect(() => {
            new XProperty(undefined as unknown as number)
        }).toThrow(Error)
    })

    test('Should return X when passing valid values', () => {
        const x = new XProperty(100)
        expect(x.value).toBe(100)
    })
})