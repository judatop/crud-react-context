import { Heading } from './components/Heading.jsx'
import { TaskForm } from './components/TaskForm.jsx'
import { TaskList } from './components/TaskList.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ContextProvider } from './context/GlobalContext.jsx'

function App () {
  return (
    <main>
      <ContextProvider>
        <Heading />

        <Routes>
          <Route exact path='/' element={<TaskList />} />
          <Route path='/add' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
        </Routes>
      </ContextProvider>

    </main>

  )
}

export default App
