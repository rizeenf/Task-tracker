import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showAddButton, setAddButton] = useState(false)
  const [tasks, setTasks] = useState([])
  // Fetch data

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
  // Fetch Data for Reminder
  const fetchValReminder = async(id) => {
    const resp = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await resp.json()

    return data
  }



  // Add Task
  const addTask = async (task) => {
    // Add in db
    const resp = await fetch('http://localhost:5000/tasks', {
      method : 'POST',
      headers : {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(task),
    })

    const data = await resp.json()

    // Add UI
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = {id, ...task}
    // setTasks([...tasks,newTask])
  }


  // Delete task
  const deleteTask = async (id) => {
    // Delete in db
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE'
    })
    // Delete UI
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('Deleting', id);
  }

  // Set Reminder
  const setReminder = async(val) =>{
    const getValFetch = await fetchValReminder(val)
    const updVal = { ...getValFetch, reminder: !getValFetch.reminder}

    const resp = await fetch(`http://localhost:5000/tasks/${val}`,{
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(updVal)
    })

    const data = await resp.json()

    
    setTasks(tasks.map((task) => task.id === val ? { ...task, reminder: data.reminder } : task ))

    console.log(`Change reminder ${val}`);
  }


  return (

      
        <Router>
            <div className="container" >
              <Header onAdd={() => setAddButton(!showAddButton)} setAdd={showAddButton} />
              <Routes>
              <Route path='/' element={
                <>
                {showAddButton && <AddTask onAdd={addTask}/>}

                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} setReminder={setReminder} /> : ('No task available')} 
              </>
              }/>
              <Route path='/about' element={<About/>} />
              </Routes>
              <Footer />
            </div>
        </Router>
      
  );
}

export default App;
