import React, { useState } from 'react';

import { Transition } from 'react-transition-group';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './sidebar.scss';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)


  const setVisible = e => {
    e.preventDefault()
    if(sidebarVisible){
      setSidebarVisible(false)
    } else {
      setSidebarVisible(true)
    }
  }
  
  return (
    // <Container fluid style={{border: "1px solid black", paddingLeft:0, height}}>
    <>
     <Navbar className={sidebarVisible ? 'visible': null}>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar> 

      <div className={sidebarVisible ? 'inverse_icon' : 'navbar_icon'} onClick={setVisible}>
        <Icon name={sidebarVisible ? 'cancel' : 'bars'} size='big'/>
      </div>
    </>
  )
}

export default Sidebar