
import { createContext, useReducer } from 'react'
import { appReducer } from './AppReducer'

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Esta es una tarea',
      description: 'Esta es la descripcion',
      done: false
    },
    {
      id: 2,
      title: 'Esta es una asdasd',
      description: 'Esta es la descasdasdasdsaripcion',
      done: true
    },
    {
      id: 3,
      title: 'Esta es una tarea',
      description: 'Esta es la descripcion',
      done: false
    }
  ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = ({ newTask }) => {
    dispatch({ type: 'ADD_TASK', payload: newTask })
  }

  const updateTask = ({ taskToUpdate }) => {
    dispatch({ type: 'UPDATE_TASK', payload: taskToUpdate })
  }

  const deleteTask = ({ taskId }) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId })
  }

  return (
    <GlobalContext.Provider value={{ ...state, addTask, updateTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  )
}
