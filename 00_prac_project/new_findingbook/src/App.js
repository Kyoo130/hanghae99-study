/* eslint-disable */

import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";


// CSS import
import './App.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

// page improt
import FindingBook from './Findingbook';
import Detail from './Detail';

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" style={{backgroundColor: "black"}}>
        <Navbar.Brand href="#home">FindingBook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => { history.push('/') }}>Home</Nav.Link>
          <Nav.Link href="#features">로그인</Nav.Link>
          <Nav.Link onClick={() => { history.push('/detail') }}>임시이동</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route path='/' exact>
          <FindingBook />
        </Route>

        <Route path='/detail'>
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
