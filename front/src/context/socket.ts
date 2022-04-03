import React from "react";
import { connect} from "socket.io-client";

export const socket = connect(String(process.env.REACT_APP_URL));
export const SocketContext = React.createContext(socket);

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});
