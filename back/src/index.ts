import { Server } from "socket.io"
import { Events } from "./events/events.enum";
import { CreateNote } from "./useCases/create";
import { DeleteNote } from "./useCases/delete";
import { MoveNote } from "./useCases/move";
import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import { FetchNotes } from "./useCases/fetchNotes";
import mongoose from 'mongoose'
import { UpdateValue } from "./useCases/updateValue";

const port = 4000
const app = express()
app.use(cors)

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      }
});

io.on("connection", (socket) => {
    socket.on(Events.FETCH_NOTES, () => FetchNotes(socket))
    socket.on(Events.CREATE, () => CreateNote(socket))
    socket.on(Events.DELETE, (data) => DeleteNote(socket, data))
    socket.on(Events.UPDATE_VALUE, (data) => UpdateValue(socket, data))
    socket.on(Events.MOVE, (data) => MoveNote(socket, data))
});

httpServer.listen(port, async () => {
    await mongoose.connect('mongodb://test:test@localhost:27017/admin')
    console.log(`Server running on port ${port}`)
});