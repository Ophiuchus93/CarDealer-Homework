import React, { useState, useEffect, } from "react";
import FeatureForm from "./FeatureForm";
import ShowFeature from "./ShowFeature";
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
 
  
  const updateFeature = (feature, carID, id, ) => {
    axios.put(`/api/cars/${carID}/features/${id}`, feature)
      .then( res => {
        const updateFeature = (features.map(feature => {
          if (feature.id === id)
            return res.data
           return feature; 
          }))
          setFeatures(updateFeature)
      })
  }

  const renderFeatures = () => {
    return features.map(feature => (
      <ShowFeature key={feature.id}  feature={feature} carID={carID} updateFeature={updateFeature}/>
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