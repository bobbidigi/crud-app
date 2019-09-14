import React, {useState, useEffect} from 'react'

export default function TaskForm({setTasks, tasks, history, edit, match:{params:{id}}}) {

    const [formValues, setFormValues] = useState({
        id: Date.now(),
        task: '',
        Completed: false
    })

    useEffect(() =>{
        if(edit){
            const editTask = tasks.filter(tasks => tasks.id.toString() === id)[0]
            setFormValues(editTask);
        }
    },[])

    function updateTask(taskId){
        const updatedTasks = tasks.map(task => {
            if(task.id === taskId){
                return formValues      
            }else{
                return task;
            }
        })
        setTasks(updatedTasks) 
    }

    function addTask(){
        setFormValues(state => ({...state, id: Date.now()}))
        setTasks([...tasks, formValues])
    }

    const handleChange = ({target: {name, value}}) =>{
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        edit ? updateTask(formValues.id) : addTask()
        history.push('/')
    }

    return (
        <div>
            <h1>Task Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Task</label>
                <input name="task" value={formValues.task} onChange={handleChange}></input>
                <button type="submit">Submit</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}
