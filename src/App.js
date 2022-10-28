import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        val:'Meeting at office',
        date: '25 Okt 2022, 22:10',
        reminder: true,
    },
    {
        id: 2,
        val:'Go to gym',
        date: '26 Okt 2022, 15:10',
        reminder: true,
    },
    {
        id: 3,
        val:'Study english',
        date: '15 Okt 2022, 01:10',
        reminder: false,
    },
    {
        id: 4,
        val:'Create a task',
        date: '29 Okt 2022, 20:10',
        reminder: true,
    },

  ])

  const deleteTask = (val) => {
    setTasks(tasks.filter((task) => task.val !== val))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No task available'}
    </div>
  );
}

export default App;
