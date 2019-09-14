import React, {useState, useEffect} from 'react'

export default function AvengerForm({setAvengers, avengers, history, edit, match:{params:{id}}}) {

    const [formValues, setFormValues] = useState({
        id: Date.now(),
        name: '',
        img: ''
    })

    useEffect(() =>{
        if(edit){
            const editAvenger = avengers.filter(avengers => avengers.id.toString() === id)[0]
            setFormValues(editAvenger);
        }
    },[])

    function updateAvenger(AvengerId){
        const updatedAvengers = avengers.map(avenger => {
            if(avenger.id === AvengerId){
                return formValues      
            }else{
                return avenger;
            }
        })
        setAvengers(updatedAvengers) 
    }

    function addAvenger(){
        setFormValues(state => ({...state, id: Date.now()}))
        setAvengers([...avengers, formValues])
    }

    const handleChange = ({target: {name, value}}) =>{
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        edit ? updateAvenger(formValues.id) : addAvenger()
        history.push('/')
    }

    return (
        <div>
            <h1>Create New Avenger</h1>
            <form onSubmit={handleSubmit}>
                <label>Task</label>
                <input name="name" value={formValues.name} onChange={handleChange}></input>
                <input name="img" value={formValues.img} onChange={handleChange}></input>
                <button type="submit">Submit</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}
