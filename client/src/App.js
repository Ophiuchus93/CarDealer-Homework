import React from 'react';
import { Route, } from "react-router-dom";
import Cars from "./components/Cars";
import { Container, } from "react-bootstrap";

const App = () => (
  <>
    <Container>
      <Route exact path="/" component={Cars} />
    </Container>
  </>
);

export default App;
