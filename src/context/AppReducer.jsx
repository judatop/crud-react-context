
export function appReducer (state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload]
      }
    case 'UPDATE_TASK':{
      const taskToUpdate = action.payload
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskToUpdate.id) {
          taskToUpdate.done = task.done
          return taskToUpdate
        }
        return task
      })
      return {
        ...state,
        tasks: updatedTasks
      }
    }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    default:
      break
  }
}
