import React, {useState} from 'react';

import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Icon, Popup } from 'semantic-ui-react';

import speakoutproj from './pics/speakoutproj.jpg';
import secretrecipeproj from './pics/secretrecipeproj.jpg';

import 'semantic-ui-css/semantic.min.css';
import './sidebar.scss';

const Projects = props => {

    const [expand, setExpand] = useState({
        speakOut : false,
        recipes: false
    })

    const handleExpand = e => {
        e.preventDefault();
        setExpand({
            ...expand,
            speakOut: !expand.speakOut
        })
    }

  return (
    
    // <Container fluid style={{border: "1px solid black", paddingLeft:0, height}}>
    <div className='projects'>
        <div className='header'>
            <h2>Projects</h2>
            <Icon name='cancel' size='large' onClick={()=>{props.setShowProjects(false)}}/>
        </div>
        <Row className='up'>
            <Col>
                <div className='inner' id={expand.speakOut ? 'bigger_view': null}>
                    <img src={speakoutproj} alt='Image of Speak Out Project'/>
                    <div className='info'>
                        <h4>Speak Out</h4>
                        {expand.speakOut ? <Icon name='minus' size='large' onClick={handleExpand}/> : <Icon name='plus' size='large' onClick={handleExpand}/>}
                        <p>Worked on a solution for English School microsoft database migration to a web based database</p>
                        <ul>
                            <li>Did user research and competitive research during the planning phase</li>
                            <li>Built out the front end view for students’ information using React framework</li>
                            <li>Implemented attendance taking functionality and CRUD methods</li>
                            <li>For state management, implemented Redux store</li>
                        </ul>
                        <div className='links'>
                            {/* <Popup content='Check out the code on Github' trigger = {<a href='https://github.com/Lambda-School-Labs/speak-out-fe' target='_blank'><Icon name='github' size='large' /></a>} position='top left' inverted/> */}
                            <a href='https://github.com/Lambda-School-Labs/speak-out-fe' target='_blank'><Icon name='github' size='large' /></a>
                            {/* <Popup content='Check out the actual website' trigger = {<a href='https://speakout-now.com/' target='_blank'><Icon name='linkify' size='large' /></a>} position='top left' inverted/> */}
                            <a href='https://speakout-now.com/' target='_blank'><Icon name='linkify' size='large' /></a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
                <div className='inner' style={expand.speakOut && !expand.recipes ? {'display':'none'} : null}>
                    <img src={secretrecipeproj} alt='Image of Speak Out Project'/>
                    <div className='info'>
                        <h4>Secret Recipes</h4>
                        <p className='date'>4 Day School Project</p>
                        <p>As a cross-functional team member worked on thise application to practice React framework.</p>
                        <div className='links'>
                            <a href='https://github.com/orgs/secret-family-recipe-s-cookbook/dashboard' target='_blank'><Icon name='github' size='large' /></a>
                            <a href='https://secret-recipes-marketpage.netlify.com/' target='_blank'><Icon name='linkify' size='large' /></a>
                            {/* <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='large' target='_blank'/></a> */}
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='down'>
            <Col>
                <div className='inner'>
                    {/* <img className='comingSoon' src='https://media.giphy.com/media/rgVLXMbhACKQ/giphy.gif' alt='Coming Soon'/> */}
                </div>
            </Col>
            <Col>
                <div className='inner'>
                    {/* <img className='comingSoon' src='https://media.giphy.com/media/rgVLXMbhACKQ/giphy.gif' alt='Coming Soon'/> */}
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Projects
