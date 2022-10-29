import { FaRegTimesCircle } from 'react-icons/fa'

const Task = ({ task, onDelete, setReminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => setReminder(task.val)} >
      <h3>
        {task.val} <FaRegTimesCircle style={{ color:'red', cursor:'pointer' }} onClick={() => onDelete(task.val)}/>
      </h3>
      <p>{task.date}</p>
    </div>
  )
}

export default Task
