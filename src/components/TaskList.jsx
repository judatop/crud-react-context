import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import '../styles/TaskCard.css'
import { useNavigate } from 'react-router-dom'

export function TaskList () {
  const { tasks, deleteTask } = useContext(GlobalContext)
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => deleteTask()}>Delete all</button>
      {tasks.map(task => (
        <div key={task.id} className='task-card'>
          <div className='task-card-info'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.done ? 'Realizado' : 'No realizado'}</p>
          </div>
          <div className='task-card-actions'>
            <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
            <button onClick={() => deleteTask({ taskId: task.id })}>Eliminar</button>
          </div>

        </div>
      ))}
    </div>
  )
}
