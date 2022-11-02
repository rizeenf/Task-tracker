import {useState} from 'react'

const AddTask = ({ onAdd }) => {
  const [val, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, cekReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!val){
      alert('Please input task')
      return
    }

    onAdd({ val, date, reminder })

    setText('')
    setDate('')
    cekReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={val} onChange={(e) => setText(e.target.value) } />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input type='text' placeholder='Add Day and Time' value={date} onChange={(e) => setDate(e.target.value) } />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => cekReminder(e.currentTarget.checked) } />
      </div>
        <input type='submit' className="btn btn-block" value='Save task' />
    </form>
  )
}
export default AddTask
