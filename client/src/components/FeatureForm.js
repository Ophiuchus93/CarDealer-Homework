import React, {useState, } from "react";
import { Button, Form, } from "react-bootstrap"
import axios from "axios"

const FeatureForm = (props) => {
  const [name, setName] = useState("")
  const [exists, setExists] = useState(false)

  const carFeature = { name: name, exists: exists, }

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
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label="Does this car have this feature?" 
        name="exists"
        value={exists}
        onChange={(e) => setExists(!exists)}
        />
      </Form.Group>
      <Button type="submit" >Submit</Button>
    </Form>
  )
}

export default FeatureForm;