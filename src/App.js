import React from 'react'
import './App.css'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div className='tasksContainer'>
      <div className='listTask'>
        <h1>My Tasks</h1>
        {/* <TaskForm /> */}
        {/* <Task text="aprender react muy bien!"/> */}
        <TaskList /> 
      </div>
    </div>
  )
}

export default App
