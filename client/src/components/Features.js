import React, { useState, useEffect, } from "react";
import FeatureForm from "./FeatureForm";
import { InputGroup, } from "react-bootstrap";
import axios from "axios";

const Features = ({ carID }) => {
  const [features, setFeatures] = useState([])


  useEffect(() => {
    axios.get(`/api/cars/${carID}/features`)
      .then(res => {
        setFeatures(res.data)
      })
  }, [])

  const addFeature = (feature) => setFeatures([feature, ...features])

  const renderFeatures = () => {
    return features.map(feature => {
      return <ul>
      {feature.name}
      </ul>
    })
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