import React, {useState, } from "react";
import { Button, Form, } from "react-bootstrap"
import axios from "axios"

const FeatureForm = (props) => {
  const [name, setName] = useState({})
  const [exists, setExists] = useState(true)

  const carFeature = { name: name }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/cars/${props.carID}/features`, carFeature)
      .then(res => {
        console.log(res.data)
        props.addFeature(res.data)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Add a Feature: </Form.Label>
        <Form.Control
          placeholder="Feature"
          type="input"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Does this car have this feature?" />
      </Form.Group>
      <Button type="submit" >Submit</Button>
    </Form>
  )
}

export default FeatureForm;