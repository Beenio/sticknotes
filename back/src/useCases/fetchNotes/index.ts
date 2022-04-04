import { Socket } from "socket.io";
import { Events } from "../../events/events.enum";
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import noteModel from '../../infra/entities/note/note.entity'

export const FetchNotes = async (socket: Socket) => {
    const repo = new NoteRepository(noteModel)
    const notes = await repo.find({})
    socket.emit(Events.NOTES_FETCHED, notes.map(note => ({
        id: note.id.value,
        value: note.value.value,
        x: note.x.value,
        y: note.y.value,
        createdAt: note.createdAt.value
    })))
}