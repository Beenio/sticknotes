import { Document, model, models, Schema } from 'mongoose'

export interface INote extends Document {
    id: string,
    value: string,
    x: number,
    y: number,
    createdAt: Date
}

const schema = new Schema({
    id: String,
    value: String,
    x: Number,
    y: Number
}, { timestamps: true })

export default models.note || model<INote>("note", schema, "notes")
