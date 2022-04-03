import './App.css';
import { Fab } from 'react-tiny-fab';
import { FaPlus } from 'react-icons/fa';
import 'react-tiny-fab/dist/styles.css';
import { useEffect, useReducer } from 'react';
import { SocketContext, socket } from './context/socket';
import Draggable from 'react-draggable';
import MDEditor from '@uiw/react-md-editor';
import { HeaderNote, StyledContent, StyledDragContainer } from './styled';
import { REDUCER_EVENTS, SOCKET_EVENTS } from './events/enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const initialState = {
  notes: []
}

const notesReducer = (prevState: any, action: any) => {
  switch(action.type) {
    case REDUCER_EVENTS.SET_NOTES: {
      const newState = {
        notes: action.payload
      }

      return newState
    }
    case REDUCER_EVENTS.ADD_NOTE: {
      const newState = {
        notes: [...prevState.notes, action.payload]
      }

      return newState
    }
    case REDUCER_EVENTS.CHANGE_VALUE: {
      const index = prevState.notes?.findIndex((item: any) => item.id === action.payload.id)

      if(index<0) {
        return prevState
      }

      const newState = {
        notes: [...prevState.notes]
      }

      newState.notes[index].value = action.payload.value

      return newState
    }

    case REDUCER_EVENTS.MOVE: {
      const index = prevState.notes?.findIndex((item: any) => item.id === action.payload.id)

      if(index<0) {
        return prevState
      }

      const newState = {
        notes: [...prevState.notes]
      }

      newState.notes[index].x = action.payload.x
      newState.notes[index].y = action.payload.y

      return newState
    }

    case REDUCER_EVENTS.REMOVE: {
      const newNotes = prevState.notes?.filter((item: any) => item.id !== action.payload.id)

      const newState = {
        notes: [...newNotes]
      }

      return newState
    }
  }
}

const App = () => {
  const [notesState, dispatch] = useReducer(notesReducer, initialState)

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.FETCH_NOTES)
    
    socket.on(SOCKET_EVENTS.CARD_CREATED, ({id, value, x,  y}) => {
      dispatch({type: REDUCER_EVENTS.ADD_NOTE, payload: { id, value, x, y }})
    })

    socket.on(SOCKET_EVENTS.NOTES_FETCHED, (notes) => {
      dispatch({type: REDUCER_EVENTS.SET_NOTES, payload: notes})
    })

  }, [socket])

  const onClick = (event: any) => {
    event.preventDefault()
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
    <div className="App">
      <SocketContext.Provider value={socket}>
          <>
            {notesState?.notes.map(({ id, value, x, y }: {id: string, value: string, x: number, y: number}) => 
                  <Draggable
                    defaultPosition={{ x, y }}
                    position={{x, y}}
                    onStop={(_, data) => moveCard(id, data.x, data.y)}
                  >
                      <StyledContent>
                        <HeaderNote>
                          <FontAwesomeIcon icon={faTrash} onClick={() => removeCard(id) } />
                        </HeaderNote>

                        <MDEditor
                          value={value}
                          visiableDragbar={false}
                          hideToolbar={true}
                          preview="edit"
                          onChange={(value) => changeValue(id, value)}
                        />
                      </StyledContent>
                  </Draggable>
            )}
          </>
      </SocketContext.Provider>
      <Fab
          alwaysShowTitle={true}
          icon={<FaPlus/>}
          onClick={onClick}
        >
      </Fab>
    </div>
  );
}

export default App;
