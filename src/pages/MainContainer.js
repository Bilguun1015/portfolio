import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';

import { Container, Col, Row } from 'react-bootstrap';

import './main.scss';

const MainContainer = () => {

    return (
        // <Container fluid={true}>
        <>  
            {/* <Sidebar /> */}
            <AboutMe />
        </>
        // </Container>
    )
}

export default MainContainer