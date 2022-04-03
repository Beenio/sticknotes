import React from "react";
import { connect} from "socket.io-client";

export const socket = connect('http://localhost:4000');
export const SocketContext = React.createContext(socket);

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});
