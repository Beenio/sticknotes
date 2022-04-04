import { REDUCER_EVENTS } from "../../events/enum"

export const notesInitialState = {
  notes: []
}

export const notesReducer = (prevState: any, action: any) => {
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
  