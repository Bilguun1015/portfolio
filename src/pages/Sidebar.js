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

  const duration = 10000
  const sidebarStyle = {
    transition: `width ${duration}ms`
  }
  const sidebarTransitionStyles = {
    entering: { width: 0 },
    entered: { width: '180px' },
    exiting: { width: '180px' },
    exited: { width: 0 }
  }
  // const linkStyle = {
  //   transition: `opacity ${duration}ms`
  // }
  // const linkTransitionStyles = {
  //   entering: { opacity: 0 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 1 },
  //   exited: { opacity: 0 }
  // }

  // const renderLinks = () => {
  //   return <Transition in={sidebarVisible} timeout={duration}>
  //     {(state) => (
  //       <div style={{
  //         ...linkStyle,
  //         ...linkTransitionStyles[state]
  //       }}>
  //         <div className="sidebar-link">Home</div>
  //         <div className="sidebar-link">About</div>
  //         <div className="sidebar-link">Contact</div>
  //       </div>
  //     )}
  //   </Transition>
  // }

  return (
    // <Container fluid style={{border: "1px solid black", paddingLeft:0, height}}>
    <>
        <Transition in={sidebarVisible} timeout={duration}>
          {state => (
            <Navbar style={{
              ...sidebarStyle,
              ...sidebarTransitionStyles[state]
            }}>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">Contact Me</Nav.Link>
            </Nav>
          </Navbar>
          )}
         </Transition> 

      <div className={sidebarVisible ? 'inverse_icon' : 'navbar_icon'} onClick={setVisible}>
        <Icon name='bars' size='big'/>
      </div>
    </>
  )
}

export default Sidebar