import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import { DeleteNote } from "../delete";

describe('Testing note', () => {
    test('Should delete note', async () => {
        
        const mochSocket = {
            emit: jest.fn()
        }
        
        const spy = jest.spyOn(NoteRepository.prototype, 'removeById').mockResolvedValue()
        
        const id = '1234'
        
        await DeleteNote(mochSocket as unknown as Socket,{ id })

        expect(spy).toBeCalledTimes(1)
        expect(spy).toBeCalledWith(id)
    })
})