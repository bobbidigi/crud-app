import React, {useState} from 'react'

export default function TaskForm() {

    const [formValues, setFormValues] = useState({
        id: null,
        task: '',
        Completed: false
    })

    const handleChange = ({target: {name, value}}) =>{
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    return (
        <div>
            <h1>Task Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Task</label>
                <input name="task" value={formValues.task} onChange={handleChange}></input>
            </form>
        </div>
    )
}
