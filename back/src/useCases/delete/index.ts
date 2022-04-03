import { Socket } from "socket.io";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import noteModel from '../../infra/entities/note/note.entity'
import { Events } from "../../events/events.enum";

export const DeleteNote = async (socket: Socket, data: { id: string }) => {
    const repo = new NoteRepository(noteModel)
    await repo.removeById(data.id)
}