import React, { useState, useContext, useEffect } from 'react'
import '../styles/TaskForm.css'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export function TaskForm ({ props }) {
  const { id } = useParams()
  const { tasks, addTask, updateTask } = useContext(GlobalContext)
  const [errors, setErrors] = useState({})
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const navigate = useNavigate()

  function foundTask (task) {
    return parseInt(task.id) === parseInt(id)
  }

  useEffect(() => {
    if (id) {
      const taskFounded = tasks.find(foundTask)
      setTask(taskFounded)
    }
  }, [id, tasks])

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }

  const submit = (event) => {
    event.preventDefault()

    let errors = null

    if (task.title === '') {
      errors = { ...errors, title: 'El titulo es obligatorio' }
    }

    if (task.description === '') {
      errors = { ...errors, description: 'La descripcion es obligatoria' }
    }

    if (errors) {
      setErrors(errors)
      return
    }

    if (task.id) {
      updateTask({ taskToUpdate: task })
    } else {
      // creando
      task.id = uuidv4()
      addTask({ newTask: task })
    }
    navigate('/')
  }

  const showError = (error) => {
    return (
      <p style={{ color: 'red' }}>{error}</p>
    )
  }

  return (
    <div className='task-form-container'>
      <form className='task-form-form' onSubmit={submit}>
        <label>Title</label>
        <input name='title' type='text' onChange={handleChange} value={task.title} />
        {errors && showError(errors.title)}
        <label>Description</label>
        <textarea name='description' value={task.description} onChange={handleChange} />{errors && showError(errors.description)}
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
