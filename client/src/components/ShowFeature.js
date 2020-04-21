import React from "react";
import { Form, } from "react-bootstrap";
import axios from "axios";

const ShowFeature = (props) => {

  // Create function to have checkbox axios.post to the feature id

  return (
    <>
      <Form.Check label={props.feature.name} />
    </>
  )
}

export default ShowFeature;