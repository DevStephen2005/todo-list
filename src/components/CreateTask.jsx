import { useState } from "react"
import axios from 'axios'

const CreateTask = () => {

    const [task,setTask] = useState('')

    // addTask Function
    const addTask = () => {
        axios.post('http://localhost:8000/addTask',{task})
        .then(result => {
            console.log(result);
            setTask('')
            location.reload()
            
        })
        .catch(err => console.log(err)
        )
    }

  return (
    <div>
        <input type="text" placeholder="Enter the task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="button" className="btn green" onClick={addTask}>Add Task</button> 
    </div>
  )
}

export default CreateTask