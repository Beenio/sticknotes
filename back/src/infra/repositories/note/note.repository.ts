import { IBaseRepository } from "../base/base.repository.interface";
import Note from "../../../domain/class/note/note";
import { INote } from '../../entities/note/note.entity'
import mongoose from "mongoose";
import { ToDomain } from "./note.mapper";
import { INoteRepository } from "./note.repository.interface";

export class NoteRepository implements INoteRepository, IBaseRepository<Note> {

    constructor(private readonly model: mongoose.Model<INote>){}
    
    async updateValue(id: string, value: string): Promise<void> {
        await this.model.updateOne({
            id
        }, {
            $set: {
                value
            }
        })
    }

    async updatePosition(id: string, x: number, y: number): Promise<void> {
        await this.model.updateOne({
            id
        }, {
            $set: {
                x, y
            }
        })
    }
   
    async saveOne(note: Note): Promise<Note> {
        const saved =  await this.model.create({
            id: note.id.value,
            x: note.x.value,
            y: note.y.value,
            value: note.value.value
        })
        
        return ToDomain(saved)
    }
    
    async find(where: Partial<Note>): Promise<Note[]> {
        const entities = await this.model.find(where)
        return entities.map(ToDomain)
    }

    async findOne(where: Partial<Note>): Promise<Note> {
        const entity = await this.model.findOne(where)

        if(!entity) {
            throw new Error('Note not found')
        }

        return ToDomain(entity)
    }

    async findById(id: string): Promise<Note> {
        const entity = await this.model.findOne({
            id
        })

        if(!entity) {
            throw new Error('Note not found')
        }

        return ToDomain(entity)
    }

    async removeById(id: string): Promise<void> {
        const entity = await this.model.deleteOne({
            id
        })

        if(!entity) {
            throw new Error('Note not found')
        }
    }
}