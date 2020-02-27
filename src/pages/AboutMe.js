import React,{ useState } from 'react';
import Sidebar from './Sidebar.js';
import Projects from './Projects';
import ContactMe from './ContactMe';

import { Container, Col, Row } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import mypic from './pics/IMG_6836.JPG';
import background from './pics/background.jpg'
import 'semantic-ui-css/semantic.min.css';
import './sidebar.scss';

const AboutMe = () => {
    const [showProjects, setShowProjects] = useState(false)
    const [showContact, setShowContact] = useState(false)

    const setProjectVisible = e => {
        e.preventDefault();
        setShowProjects(true)
    }

    const setContactVisible = e => {
        e.preventDefault();
        setShowContact(true)
    }

    return (
        <div className='about'>
            <img id='background' src={background} alt='A Guy Looking Up To The Sky.'/>
            <Row className={showProjects || showContact ? 'none' : 'middle'} >
                <div className='my_pic'>
                    <img src={mypic} alt='A picture of me'/>
                </div>
                <div className='vertical_line'></div>
                <div className='horizontal_line'></div>
                <div className='intro'>
                    <h1>Bilguun T. Nomch </h1>
                    <h3>Full Stack Software Developer</h3>
                    <div className='content'>
                        <p> I am an energetic Full Stack Web Developer with experience in developing fully functional, responsive and interactive websites. 
                            I not only design and develop well-structured web applications, 
                            I contribute to these projects by being a motivated team-player in a collaborative environment. 
                            Please feel free to take a look around and learn a little bit more about me.  </p>
                    </div>
                </div>
                <div className='links'>
                    <a href='https://github.com/Bilguun1015' target='_blank'><Icon name='github' size='big' /></a>
                    <a href='https://www.linkedin.com/in/bilguun-nomch/' target='_blank'><Icon name='linkedin' size='big' /></a>
                    <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='big' target='_blank'/></a>
                </div>
                <div className='horizontal_line'></div>
                <div className='vertical_line'></div>
                <div className='bottom'>
                    <div className='navigation' onClick={setProjectVisible}>
                        <p>Projects</p>
                    </div>
                    <div className='navigation' onClick={setContactVisible}>
                        <p>Contact Me</p>
                    </div>
                </div>
            </Row>
            {showProjects ? <Projects setShowProjects = {setShowProjects}/> : null}
            {showContact ? <ContactMe setShowContact = {setShowContact}/> : null}
            <p id='footer'>Built By Bilguun Nomch Inspired By <a href='https://html5up.net/'>HTML5 UP</a></p>
        </div>
    )
}

export default AboutMe