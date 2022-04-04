import { Socket } from "socket.io";
import { Events } from "../../events/events.enum";
import { v4 as uuid } from 'uuid'
import { NoteRepository } from "../../infra/repositories/note/note.repository";
import noteModel from '../../infra/entities/note/note.entity'
import Note from "../../domain/class/note/note";

export const CreateNote = async (socket: Socket) => {
    const id = uuid()
    const repo = new NoteRepository(noteModel)
    const note = new Note(id, '', 50, 50, new Date())

    const noteSaved = await repo.saveOne(note)

    socket.emit(Events.CARD_CREATED, {
        id: noteSaved.id.value,
        x: noteSaved.x.value,
        y: noteSaved.y.value,
        value: noteSaved.value.value,
        createdAt: noteSaved.createdAt.value
    })
}