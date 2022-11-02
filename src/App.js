import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'


function App() {
  const [showAddButton, setAddButton] = useState(false)
  const [tasks, setTasks] = useState([])
  // Fetch

  useEffect(() => {
    const getVal = async () => {
      const tasksServer = await fetchVal()
      setTasks(tasksServer)
    }

    getVal()
  }, [])

  // Fetch Data
  const fetchVal = async() => {
    const resp = await fetch('http://localhost:5000/tasks')
    const data = await resp.json()

    return data
  }



  // Add Task
  const addTask = async (task) => {
    const resp = await fetch('http://localhost:5000/tasks', {
      method : 'POST',
      headers : {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(task),
    })

    const data = await resp.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = {id, ...task}
    // setTasks([...tasks,newTask])
  }


  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE'
    })


    setTasks(tasks.filter((task) => task.id !== id))
    console.log('Deleting', id);
  }

  // Set Reminder
  const setReminder = (val) =>{
    setTasks(tasks.map((task) => task.val === val ? { ...task, reminder: !task.reminder } : task ))

    console.log(`Change reminder ${val}`);
  }

  return (
    <div className="container" >
      <Header onAdd={() => setAddButton(!showAddButton)} setAdd={showAddButton} />
      {showAddButton && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} setReminder={setReminder} /> : 'No task available'}
    </div>
  );
}

export default App;
