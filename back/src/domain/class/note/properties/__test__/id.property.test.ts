import IdProperty from "../id.property"

describe('[Input Validation] - Testing ID property', () => {
    test('Should return error when passing invalid values', () => {
        expect(() => {
            new IdProperty(null as unknown as string)
        }).toThrow(Error)

        expect(() => {
            new IdProperty(undefined as unknown as string)
        }).toThrow(Error)
    })

    test('Should id value when passing valid values', () => {
        const id = new IdProperty('1231231')
        expect(id.value).toBe('1231231')
    })
})