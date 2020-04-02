import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Car from "./Car";
import CarForm from "./CarForm";
import { Button, } from "react-bootstrap";



const Cars = () => {
  const [cars, setCars] = useState([]);
  const [showForm, setShowForm] = useState(false)
  
  
  useEffect(() => {
    axios.get("/api/cars")
      .then(res => {
        setCars(res.data)
      })
  }, []);

  const addCar = (car) => setCars([car, ...cars])

  const renderCars = () => {
    return cars.map( car => (
      <Car key={car.id} {...car} deleteCar={deleteCar} />
    ))
  };

  const deleteCar = (id) => {
    axios.delete(`/api/cars/${id}`)
      .then( res => {
        setCars( cars.filter( car => car.id !== id ))
      })
  }

  return (
    <>
      <h1>DPL Dealership</h1>
      <hr />
      <Button  variant="success" onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Form" : "Show Form"}
      </Button>
        { showForm && <CarForm addCar={addCar} toggleForm={setShowForm} />  }
      <br />
      <br />
      {renderCars()}
    </>
  );
};

export default Cars;