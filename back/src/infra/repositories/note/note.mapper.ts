import Note from "../../../domain/class/note/note";
import { INote } from "../../entities/note/note.entity";

export const ToDomain = (note: INote): Note => {
    return new Note(note.id, note.value, note.x, note.y)
}