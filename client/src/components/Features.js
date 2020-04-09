import React, { useState, useEffect, } from "react";
import { InputGroup, } from "react-bootstrap";
import axios from "axios";

const Features = ({ carID }) => {
  const [features, setFeatures] = useState([])

  // const [selfDriving, setSelfDriving] = useState(false)
  // const [sunRoof, setSunRoof] = useState(false)
  // const [electric, setElectric] = useState(false)
  // const [fourWD, setFourWD] = useState(false)
  // const [heatedSeats, setHeatedSeats] = useState(false)
  // const [backUpCamera, setBackUpCamera] = useState(false)
  // const [used, setUsed] = useState(false)


  useEffect(() => {
    axios.get(`/api/cars/${carID}/features`)
      .then(res => {
        setFeatures(res.data)
      })
  }, [])

  return (
    <>
      <h1> Features </h1>
      <InputGroup.Prepend>
        <InputGroup.Checkbox aria-label="Self Driving" /> 
        Self Driving
      </InputGroup.Prepend>
    </>
  )
}

export default Features;