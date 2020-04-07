import React, { useState, useEffect } from "react";
import { Button, Form, } from "react-bootstrap";
import axios from "axios";

const CarForm = (props) => {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [color, setColor] = useState('')

    const car = {make: make, model: model, year: year, color: color}

    useEffect (() => {
      if (props.id) {
        setMake(props.make)
        setModel(props.model)
        setYear(props.year)
        setColor(props.color)
      }
    }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
      if (props.editCar) {
        props.editCar(props.id, car)
        // toggle form after info is submitted
        props.toggleEdit()
      } else {
        axios.post("/api/cars", car)
          .then( res => {
            props.addCar(res.data)
            props.toggleForm();
          })
     }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Make: </Form.Label>
        <Form.Control 
        placeholder="Make" 
        type="input"
        name="make"
        required
        value={make}
        onChange={(e) => setMake(e.target.value)}
        />
        <Form.Label>Model: </Form.Label>
        <Form.Control 
        placeholder="Model" 
        type="input"
        name="model"
        required
        value={model}
        onChange={(e) => setModel(e.target.value)}
        />
        <Form.Label>Year: </Form.Label>
        <Form.Control 
        placeholder="Year" 
        type="input"
        name="year"
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />
        <Form.Label>Color: </Form.Label>
        <Form.Control 
        placeholder="Color" 
        type="input"
        name="color"
        required
        value={color}
        onChange={(e) => setColor(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
};

export default CarForm;