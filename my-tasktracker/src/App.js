import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() *500);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }
  const deleteTask = (id) => {
    console.log("deleted", id);
    setTasks(tasks.filter((task)=> task.id!=id))
  }

  const toggleReminder = (id) => {
    console.log("deletoggleed", id);
  }
  return (
    <div className='container'>
      <Header />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks = {tasks} onDelete= {deleteTask} onToggle={toggleReminder}/> : <h2>No Tasks</h2>}
    </div>
  )
}

export default App

