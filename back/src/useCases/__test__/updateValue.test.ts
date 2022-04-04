import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import { Events } from "../../events/events.enum";
import { FetchNotes } from "../fetchNotes";
import { v4 } from "uuid";
import Note from "../../domain/class/note/note";
import { MoveNote } from "../move";
import { UpdateValue } from "../updateValue";

describe('Testing note', () => {
    test('Should update value', async () => {
        
        const mochSocket = {
            emit: jest.fn()
        }
        
        const id = v4()
        const value = ''

        const spy = jest.spyOn(NoteRepository.prototype, 'updateValue').mockResolvedValue()
        
        await UpdateValue(mochSocket as unknown as Socket, { id, value })

        expect(spy).toBeCalledTimes(1)
        expect(spy).toBeCalledWith(id, value)
    })
})