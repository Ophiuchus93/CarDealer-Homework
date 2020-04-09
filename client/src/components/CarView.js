import React, { useEffect, useState, } from "react";
import Features from "./Features";
import { Card, } from "react-bootstrap";
import axios from "axios";

const CarView = ({ id, make, model, year, color, match }) => {

  const [car, setCar] = useState({})


  useEffect(() => {
    axios.get(`/api/cars/${match.params.id}`)
      .then((res) => {
        setCar(res.data)
      })
  }, [])

  return (
    <>
      <h1>Car View</h1>
      <Card className="text-center">
        <Card.Header>{car.make} {car.model} </Card.Header>
        <Card.Body>Year: {car.year}</Card.Body>
        <Card.Body>Color: {car.color}</Card.Body>
      </Card>
        <Features carID={car.id} />
    </>
  )
};

export default CarView;