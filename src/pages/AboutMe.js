import React from 'react';
import Sidebar from './Sidebar.js';
import Projects from './Projects';
import ContactMe from './ContactMe';

import { Container, Col, Row } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import mypic from './pics/IMG_0097.jpg';
import 'semantic-ui-css/semantic.min.css';
import './sidebar.scss';

const AboutMe = () => {

    return (
        <div className='about'>
            <Row className='top'>
                <Col className='left'>
                    <img src={mypic} alt='Picture of Bilguun.'/>
                </Col>
                <Col className='right'>
                    <h1>Bilguun T. Nomch </h1>
                    <h3>Full Stack Software Developer</h3>
                    <p> I am an energetic Full Stack Web Developer with experience in developing fully functional, responsive and interactive websites. 
                     I not only design and develop well-structured web applications, 
                        I contribute to these projects by being a motivated team-player in a collaborative environment. My areas of expertise include (but are not limited to) 
                        Front-End: React, JavaScript, HTML, CSS, SASS, LESS
                        Back-End: NodeJS - Express, KNEX, JavaScript, Django, RESTful API
                        Databases: Postgres, SQLITE3
                        Version Control: Git
                        Computer Science: Python – Algorithms, Data Structures, Computer Architecture
                        Strong collaboraTve skills
                        Excellent problem-solving skills
                        Please feel free to take a look around and learn a little bit more about me.  </p>
                </Col>
            </Row>
            <Row className='bottom'>
                <div>
                    <a href='https://github.com/Bilguun1015'><Icon name='github' size='big' /></a>
                    <a href='https://www.linkedin.com/in/bilguun-nomch/'><Icon name='linkedin' size='big' /></a>
                    <Icon name='mail' size='big' />
                </div>
            </Row>
        </div>
    )
}

export default AboutMe