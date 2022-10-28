import { FaRegTimesCircle } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.val} <FaRegTimesCircle style={{ color:'red', cursor:'pointer' }} onClick={() => onDelete(task.val)}/>
      </h3>
      <p>{task.date}</p>
    </div>
  )
}

export default Task
