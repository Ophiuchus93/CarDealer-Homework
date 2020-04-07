import React from 'react';
import { Route, } from "react-router-dom";
import Cars from "./components/Cars";
import CarView from "./components/CarView";
import { Container, } from "react-bootstrap";

const App = () => (
  <>
    <Container>
      <Route exact path="/" component={Cars} />
      <Route exact path="/cars/:id" component={CarView} />
    </Container>
  </>
);

export default App;
