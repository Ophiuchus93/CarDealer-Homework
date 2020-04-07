import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Car from "./Car";
import CarForm from "./CarForm";
import { Button, CardDeck, } from "react-bootstrap";



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
    return cars.map(car => (
      <Car key={car.id} {...car} deleteCar={deleteCar} editCar={editCar} />
    ))
  };

  const deleteCar = (id) => {
    axios.delete(`/api/cars/${id}`)
      .then(res => {
        setCars(cars.filter(car => car.id !== id))
      })
  }

  const editCar = (id, car) => {
    axios.put(`/api/cars/${id}`, car)
      .then( res => {
        const updateCar = cars.map( car => {
          if (car.id === id)
            return res.data
           return car; 
        })
          setCars(updateCar)
      })
  }

  return (
    <div>
      <h1 align="center">DPL Dealership</h1>
      <hr />
      <Button variant="success" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Show Form"}
      </Button>
      {showForm && <CarForm addCar={addCar} toggleForm={setShowForm} />}
      <br />
      <br />
      <CardDeck>
        {renderCars()}
      </CardDeck>
    </div>
  );
};

export default Cars;