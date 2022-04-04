import { Socket } from "socket.io";
import Note from "../../domain/class/note/note";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import { CreateNote } from "../create";
import { v4 } from 'uuid';
import { Events } from "../../events/events.enum";

describe('Testing create note', () => {
    test('Should create and emit event', async () => {
        
        const mochSocket = {
            emit: jest.fn()
        }

        const id = v4()
        const value = ''
        const x = 10
        const y = 10
        const date = new Date()
        
        jest.spyOn(NoteRepository.prototype, 'saveOne').mockResolvedValue(new Note(id, value, x, y, date))
        
        await CreateNote(mochSocket as unknown as Socket)

        expect(mochSocket.emit).toBeCalledTimes(1)
        expect(mochSocket.emit).toBeCalledWith(Events.CARD_CREATED, {
            id,
            x,
            y,
            value,
            createdAt: date
        })
    })
})