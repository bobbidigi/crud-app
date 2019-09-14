import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg,
    CardTitle, Button, CardBody
  } from 'reactstrap';

function Avenger({avenger, deleteAvenger}) {
    return (
            <Card color="warning" className="character-card">{avenger.avenger}
            
            <CardImg src={avenger.img}/>
            <CardBody>
                <CardTitle>{avenger.name}</CardTitle>
                <Link to={`editAvenger/${avenger.id}`}><Button color="info" size="sm">Edit</Button></Link>
                <Button color="danger" size="sm" onClick={() => deleteAvenger(avenger.id)}>Delete</Button>
            </CardBody>
            
            </Card>
    )
}

export default Avenger