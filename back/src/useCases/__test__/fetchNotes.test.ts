import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import { Events } from "../../events/events.enum";
import { FetchNotes } from "../fetchNotes";
import { v4 } from "uuid";
import Note from "../../domain/class/note/note";

describe('Testing note', () => {
    test('Should fetch notes', async () => {
        
        const mochSocket = {
            emit: jest.fn()
        }
        
        const id = v4()
        const value = ''
        const x = 10
        const y = 10
        const date = new Date()
        const note = new Note(id, value, x, y, date)
        const spy = jest.spyOn(NoteRepository.prototype, 'find').mockResolvedValue([note])
        
        await FetchNotes(mochSocket as unknown as Socket)

        expect(spy).toBeCalledTimes(1)
        expect(mochSocket.emit).toBeCalledTimes(1)
        expect(mochSocket.emit).toBeCalledWith(Events.NOTES_FETCHED, [{
            id: note.id.value,
            value: note.value.value,
            x: note.x.value,
            y: note.y.value,
            createdAt: note.createdAt.value
        }])
    })
})