import React from 'react'
import Task from './Task'
import {Link} from 'react-router-dom'

function TaskList({tasks, deleteTask}) {
    return (
        <>
            <Link to="/addTask"><button>Add Task</button></Link>
            <ul>
            {tasks.map(task => <Task deleteTask={deleteTask} key={task.id} task={task}/>)}
            </ul>
        </>
    )
}

export default TaskList
