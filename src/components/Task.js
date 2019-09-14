import React from 'react'
import {Link} from 'react-router-dom'

function Task({task, setTasks, deleteTask}) {
    return (
            <li>{task.task}
            <Link to={`editTask/${task.id}`}><button>Edit</button></Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
    )
}

export default Task