import React from "react";
import { Card, } from "react-bootstrap";

const CarView = (props) => {
  return (
    <>
      <Card>{props.location.car.make} {props.location.car.model} </Card>
      {/* <h1>Car View</h1> */}
    </>
  )
};

export default CarView;