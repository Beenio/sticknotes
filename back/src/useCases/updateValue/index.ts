import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import noteModel from '../../infra/entities/note/note.entity'

export const UpdateValue =  async (socket: Socket, data: { id: string, value: string }) => {
    const repo = new NoteRepository(noteModel)
    await repo.updateValue(data.id, data.value)
}