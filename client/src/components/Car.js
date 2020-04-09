import React, {  useState, } from "react";
import { Link, } from "react-router-dom";
import { Button, Card, } from "react-bootstrap";
import CarForm from "./CarForm";

const Car = (props) => {
  const [editing, setEditing] = useState(false)
 
  const car = {id : props.id, make: props.make, model: props.model, year: props.year, color: props.color}

  // <Link to={{pathname: `/CarForm`, car: car, isEditing: true }}>

  return (
    <>
      <Card border="dark" bg="light"  >
        <Card.Body>
          <Card.Header >{props.make} {props.model}</Card.Header>
          <Card.Body>Year: {props.year}</Card.Body>
          <Card.Body>Color: {props.color}</Card.Body>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning" type="button" size="sm" onClick={() => setEditing(!editing)} >Edit</Button> 
          <Button variant="danger" type="button" size="sm" onClick={() => props.deleteCar(props.id)}>Delete</Button>
          <Button as={Link} to={{pathname: `/cars/${props.id}`, car: car,  }} size="sm">Show Car</Button>
          {editing && <CarForm toggleEdit={setEditing} editCar={props.editCar} {...props} />}
        </Card.Footer>
      </Card>
      <br />
      <br />
    </>
  )
}

export default Car;