import React from 'react';
import { Route, Switch } from "react-router-dom";


// CSS import
import './App.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';


// page improt
import FindingBook from './Findingbook';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" style={{backgroundColor: "black"}}>
        <Navbar.Brand href="#home">FindingBook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">로그인</Nav.Link>
          <Nav.Link href="#pricing">회원가입</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route>
          <FindingBook />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
