import React from "react";
import { connect} from "socket.io-client";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const socket = connect(String(process.env.REACT_APP_URL));
export const SocketContext = React.createContext(socket);

socket.on("connect_error", (err) => {
    toast.dismiss()
    toast.error('Connection Error', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'ERROR'
    });
});

socket.on("connect", () => {
    toast.dismiss()
    toast.success('Connected', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
})
