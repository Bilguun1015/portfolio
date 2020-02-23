import React from 'react';
import Sidebar from './Sidebar.js';
import Projects from './Projects';
import ContactMe from './ContactMe';

import { Container, Col, Row } from 'react-bootstrap';

import './sidebar.scss';

const AboutMe = () => {

    return (
        <div className='about'>
            <Row>
                <Col className='left'>
                    <p></p>
                </Col>
                <Col className='right'>
                    <p>My name is Bilguun Nomch who is a Full Stack Web Developer.</p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe