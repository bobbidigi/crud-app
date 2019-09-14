import React from 'react'
import {Link} from 'react-router-dom'

function Task({task, setTasks}) {
    return (
            <li>{task.task}
            <Link to={`editTask/${task.id}`}><button>edit</button></Link>
            
            </li>
    )
}

export default Task