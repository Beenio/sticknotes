import Note from "../note"

describe('[Input Validation] - Testing note', () => {
    test('Should return error when passing a invalid values', () => {
        expect(() => {
            new Note('123', '123', 10, 10, '' as unknown as Date) //INVALID CREATED AT
        }).toThrow(Error)
        
        expect(() => {
            new Note('123', '123', 10, undefined as unknown as number, new Date()) //INVALID Y
        }).toThrow(Error)

        expect(() => {
            new Note('123', '123', undefined as unknown as number, 10, new Date()) //INVALID X
        }).toThrow(Error)

        expect(() => {
            new Note('123', undefined as unknown as string, 10, 10, new Date()) //INVALID VALUE
        }).toThrow(Error)
        
        expect(() => {
            new Note(undefined as unknown as string, '123', 10, 10, new Date()) //INVALID ID
        }).toThrow(Error)
    })

    test('Should return note when passing valid parameters', () => {

        const date = new Date()
        const note = new Note('ID', 'VALUE', 10, 20, date)
        
        expect(note.id.value).toBe('ID')
        expect(note.value.value).toBe('VALUE')
        expect(note.createdAt.value).toBe(date)
        expect(note.x.value).toBe(10)
        expect(note.y.value).toBe(20)
    })
})