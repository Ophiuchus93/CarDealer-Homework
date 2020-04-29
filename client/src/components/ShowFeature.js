import React, { useState, useEffect, } from "react";
import { Form, } from "react-bootstrap";
import axios from "axios";

const ShowFeature = ({feature, carID, updateFeature,}) => {
  const [checked, setChecked] = useState()

    const singleFeature = { id: feature.id, name: feature.name, exists: checked}

  useEffect(() => {
    setChecked(feature.exists)
  }, [])

  // Create function to have checkbox axios.post to the feature id
  const handleCheck = (e) => {
    setChecked(!checked)
       updateFeature(singleFeature, carID, feature.id)
  }

  return (
    <>
    <Form onClick={handleCheck}>
      <Form.Check 
      label={feature.name}  
      />
    </Form>
    </>
  )
}

export default ShowFeature;