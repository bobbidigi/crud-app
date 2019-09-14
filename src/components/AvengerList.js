import React from 'react'
import Avenger from './Avenger'
import {Link} from 'react-router-dom'

function AvengerList({avengers, deleteAvenger}) {
    return (
        <>
            <Link to="/addAvenger"><button>Add New Avengers</button></Link>
            <ul className="characters-list-wrapper">
            {avengers.map(avenger => <Avenger deleteAvenger={deleteAvenger} key={avenger.id} avenger={avenger}/>)}
            </ul>
        </>
    )
}

export default AvengerList
