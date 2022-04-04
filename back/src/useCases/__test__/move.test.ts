import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import { v4 } from "uuid";
import { MoveNote } from "../move";

describe('Testing note', () => {
    test('Should move note', async () => {
        
        const mochSocket = {
            emit: jest.fn()
        }
        
        const id = v4()
        const x = 10
        const y = 10

        const spy = jest.spyOn(NoteRepository.prototype, 'updatePosition').mockResolvedValue()
        
        await MoveNote(mochSocket as unknown as Socket, { id, x, y })

        expect(spy).toBeCalledTimes(1)
        expect(spy).toBeCalledWith(id, x, y)
    })
})