import { useEffect, useState } from "react"
import '../css/todolist.css'
import axios from 'axios'
import CreateTask from "./CreateTask"

const Home = () => {

    const [todos,setTodos] = useState([])

    // Retrieve task 
    useEffect(() => {
        axios.get('http://localhost:8000/getTask')
        .then(result => {
            console.log(result);
            setTodos(result.data)            
        })
        .catch(err => console.log(err)
        )
    },[])

    // Delete Task 
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/deleteTask/'+id)
        .then(result => {
            console.log(result)
            alert('Are you sure to delete your task')
            location.reload()
        })
        .catch(err => console.log(err)
        )
    }
  return (
    <div className="container">
        <h1>Todo List</h1>
        <CreateTask />
        {
            todos.length === 0? <div className="errmsg">No Record</div> 
            :
            todos.map(todo => (
                <div className="task" key={todo._id}> 
                    <h2> {todo.task} </h2>
                    <button className="btn red delBtn" onClick={() => deleteHandler(todo._id)}>Delete</button>
                </div>
                
            ))
        }
    </div>
  )
}

export default Home