import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import noteModel from '../../infra/entities/note/note.entity'

export const MoveNote =  async (socket: Socket, data: { x: number, y: number, id: string }) => {
    const repo = new NoteRepository(noteModel)
    await repo.updatePosition(data.id, data.x, data.y)
}