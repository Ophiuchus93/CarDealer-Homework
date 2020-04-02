import React from "react";
import { Button, Card, } from "react-bootstrap";

const Car = (props) => {
  return (
    <>
    <Card >
        <Card.Body>
          <Card.Title>{props.make}</Card.Title>
          <Card.Body>{props.model}</Card.Body>
          <Card.Body>{props.year}</Card.Body>
          <Card.Body>{props.color}</Card.Body>
        </Card.Body>
      </Card>
      <Button variant="danger" type="button" size="sm" onClick={() => props.deleteCar(props.id)}>Delete</Button>
      <br />
      <br />
    </>
  )
}

export default Car;