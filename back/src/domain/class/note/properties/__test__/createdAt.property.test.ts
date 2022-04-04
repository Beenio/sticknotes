import CreatedAtProperty from "../createdAt.property"

describe('[Input Validation] - Testing CreatedAt property', () => {
    test('Should return error when passing invalid values', () => {
        expect(() => {
            new CreatedAtProperty(null as unknown as Date)
        }).toThrow(Error)

        expect(() => {
            new CreatedAtProperty(undefined as unknown as Date)
        }).toThrow(Error)

        expect(() => {
            new CreatedAtProperty('' as unknown as Date)
        }).toThrow(Error)

        expect(() => {
            new CreatedAtProperty(10 as unknown as Date)
        }).toThrow(Error)
    })

    test('Should id value when passing valid values', () => {
        const date = new Date()
        const dateValue = new CreatedAtProperty(date)
        expect(dateValue.value).toBe(date)
    })
})