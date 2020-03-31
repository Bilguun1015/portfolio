import React,{ useState, useEffect } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import ImageFadeIn from "react-image-fade-in";

import { Row } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import mypic from './pics/mypic.jpg';
import background from './pics/background.jpg';
import 'semantic-ui-css/semantic.min.css';
import './main.scss';

const AboutMe = () => {
    const [loaded, setLoaded] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    useEffect(()=>{
        if(background){
            setLoaded(true)
        }
    },[]);


    const setProjectVisible = e => {
        e.preventDefault();
        setShowProjects(true);
        // setTimeout(()=> {
        // },1000)
    }

    const setContactVisible = e => {
        e.preventDefault();
        setShowContact(true);
    }

    const setSkillsVisible = e =>{
        e.preventDefault();
        setShowSkills(true);
    }



    return (
        <div className='about'>
            {loaded ? <ImageFadeIn id='background' src={background} alt='A Guy Looking Up To Night Sky.' opacityTransition={2}/> : null} 
            <Row className={showProjects || showContact || showSkills ? 'none' : 'middle'} >
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
                    <a href='https://github.com/Bilguun1015' target='_blank' rel='noopener'><Icon name='github' size='big' /></a>
                    <a href='https://www.linkedin.com/in/bilguun-nomch/' target='_blank' rel='noopener'><Icon name='linkedin' size='big' /></a>
                    <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='big' target='_blank' rel='noopener'/></a>
                </div>
                <div className='horizontal_line'></div>
                <div className='vertical_line'></div>
                <div className='bottom'>
                    <div className='one navigation' onClick={setProjectVisible}>
                        <p>Projects</p>
                    </div>
                    <div className='two navigation' onClick={setSkillsVisible}>
                        <p>Skills</p>
                    </div>
                    <div className='three navigation' onClick={setContactVisible}>
                        <p>Contact Me</p>
                    </div>
                </div>
            </Row>
            {showProjects ? <Projects setShowProjects = {setShowProjects}/> : null}
            {showSkills ? <Skills setShowSkills = {setShowSkills}/> : null}
            {showContact ? <ContactMe setShowContact = {setShowContact}/> : null}
            <div id='footer'>
                <p>Built By Bilguun Nomch Inspired By <a href='https://html5up.net/' target='_blank' rel='noopener'>HTML5 UP</a></p>
            </div>
        </div>
    )
}

export default AboutMe