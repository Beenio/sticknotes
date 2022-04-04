import { Fab } from 'react-tiny-fab';
import { FaPlus } from 'react-icons/fa';
import 'react-tiny-fab/dist/styles.css';
import { useEffect, useReducer } from 'react';
import { SocketContext, socket } from './context/socket';
import { ToastContainer } from 'react-toastify';
import { REDUCER_EVENTS, SOCKET_EVENTS } from './events/enum';
import { notesInitialState, notesReducer } from './reducers/note/note.reducer';
import { INote } from './dtos/note.dto';
import DraggableComp from './components/draggable';


const DraggableContainer = () => {
  const [notesState, dispatch] = useReducer(notesReducer, notesInitialState)

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.FETCH_NOTES)
    
    socket.on(SOCKET_EVENTS.CARD_CREATED, (note) => {
      dispatch({type: REDUCER_EVENTS.ADD_NOTE, payload: note })
    })

    socket.on(SOCKET_EVENTS.NOTES_FETCHED, (notes) => {
      dispatch({type: REDUCER_EVENTS.SET_NOTES, payload: notes})
    })

  }, [socket])

  const onClick = () => {
    socket.emit(SOCKET_EVENTS.CREATE); 
  }

  const changeValue = (id: string, value: string | undefined) => {
    dispatch({type: REDUCER_EVENTS.CHANGE_VALUE, payload: { id, value }})
    socket.emit(SOCKET_EVENTS.UPDATE_VALUE, { id, value } )
  }

  const moveCard = (id: string, x: number, y: number) => {
    dispatch({type: REDUCER_EVENTS.MOVE, payload: { id, x, y }})
    socket.emit(SOCKET_EVENTS.MOVE, { id, x, y })
  }

  const removeCard = (id: string) => {
    dispatch({type:  REDUCER_EVENTS.REMOVE, payload: { id }})
    socket.emit(SOCKET_EVENTS.DELETE, { id })
  }

  return (
    <>
      <SocketContext.Provider value={socket}>
          <>
            {notesState?.notes.map(({ id, value, x, y, createdAt } : INote) => 
                  <DraggableComp
                    id={id}
                    value={value}
                    createdAt={createdAt}
                    x={x}
                    y={y}
                    onChange={changeValue}
                    onRemove={removeCard}
                    onStop={moveCard}
                  />
            )}
          </>
      </SocketContext.Provider>
      <Fab
          alwaysShowTitle={true}
          icon={<FaPlus/>}
          onClick={onClick}
        >
      </Fab>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}

export default DraggableContainer;
