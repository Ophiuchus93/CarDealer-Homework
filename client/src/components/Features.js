import React, { useState, useEffect, } from "react";
import FeatureForm from "./FeatureForm";
import ShowFeature from "./ShowFeature";
import { InputGroup, } from "react-bootstrap";
import axios from "axios";

const Features = ({ carID }) => {
  const [features, setFeatures] = useState([])
  const [exists, setExists] = useState(false)


  useEffect(() => {
    axios.get(`/api/cars/${carID}/features`)
      .then(res => {
        setFeatures(res.data)
      })
  }, [])

  const addFeature = (feature) => setFeatures([feature, ...features])

  // const toggleExists = () => {setExists(!exists)}

  const renderFeatures = () => {
    return features.map(feature => (
      <ShowFeature  feature={feature} />
    ))
  }

  return (
    <>
      <h1> Features </h1>
      <div>
        <FeatureForm carID={carID} addFeature={addFeature} />
        {renderFeatures()}
      </div>
    </>
  )
}

export default Features;