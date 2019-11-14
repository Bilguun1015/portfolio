import React from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';

import './sidebar.scss';

const Sidebar = () => {

  return (
    // <Container fluid style={{border: "1px solid black", paddingLeft:0, height}}>
      <Navbar >
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact Me</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default Sidebar