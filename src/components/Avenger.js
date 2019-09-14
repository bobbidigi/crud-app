import React from 'react'
import {Link} from 'react-router-dom'

function Avenger({avenger, setAvengers, deleteAvenger}) {
    return (
            <li>{avenger.avenger}
            <p>{avenger.name}</p>
            <img src={avenger.img}/>
            <Link to={`editAvenger/${avenger.id}`}><button>Edit</button></Link>
            <button onClick={() => deleteAvenger(avenger.id)}>Delete</button>
            </li>
    )
}

export default Avenger