import React, {useState, useEffect} from 'react';

import { Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import speakoutproj from './pics/speakoutproj.jpg';
import secretrecipeproj from './pics/secretrecipeproj.jpg';
import nodejs from './pics/nodejs.png';

import 'semantic-ui-css/semantic.min.css';
import './main.scss';

const Projects = props => {

    const [expand, setExpand] = useState({
        speakOut : false,
        recipes: false,
        vacation: false    })

    const handleExpandSpeakOut = e => {
        e.preventDefault();
        setExpand({
            ...expand,
            speakOut: !expand.speakOut,
            recipes: false,
            vacation: false
        })
    }

    const handleExpandRecipes = e => {
        e.preventDefault();
        setExpand({
            ...expand,
            recipes: !expand.recipes,
            speakOut: false,
            vacation: false
        })
    }

    const handleExpandVacation = e => {
        e.preventDefault();
        setExpand({
            vacation: !expand.vacation,
            speakOut: false,
            recipes: false
        })
    }

    useEffect(() => {
        window.addEventListener('keyup', e => {
            if(e.keyCode === 27){
                props.setShowProjects(false)
            }
        })
    },[])

  return (
    <div className='projects'>
        <div className='header'>
            <h2>Projects</h2>
            <Icon name='cancel' size='large' onClick={()=>{props.setShowProjects(false)}}/>
        </div>
        <Row className='up'>
            <Col className={expand.recipes || expand.vacation ? 'not-visible' : null}>
                <div className='inner' id={expand.speakOut ? 'bigger_view': null}>
                    <img src={speakoutproj} alt='Image of Speak Out Project'/>
                    <div className='info'>
                        <h4>Speak Out</h4>
                        {expand.speakOut ? <Icon name='minus' size='large' onClick={handleExpandSpeakOut}/> : <Icon name='plus' size='large' onClick={handleExpandSpeakOut}/>}
                        <p>Worked on a solution for English School microsoft database migration to a web based database</p>
                        <ul>
                            <li>Did user research and competitive research during the planning phase</li>
                            <li>Built out the front end view for students’ information using React framework</li>
                            <li>Implemented attendance taking functionality and CRUD methods</li>
                            <li>For state management, implemented Redux store</li>
                        </ul>
                        <div className='links'>
                            <a href='https://github.com/Lambda-School-Labs/speak-out-fe' target='_blank' rel='noopener'><Icon name='github' size='large' /></a>
                            <a href='https://speakout-now.com/' target='_blank' rel='noopener'><Icon name='linkify' size='large' /></a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className={expand.speakOut || expand.vacation ? 'not-visible' : null}>
                <div className='inner' id={expand.recipes ? 'bigger_view': null} >
                    <img src={secretrecipeproj} alt='Image of Speak Out Project'/>
                    <div className='info'>
                        <h4>Secret Recipes</h4>
                        {expand.recipes ? <Icon name='minus' size='large' onClick={handleExpandRecipes}/> : <Icon name='plus' size='large' onClick={handleExpandRecipes}/>}
                        <p>As a cross-functional team member worked on thise application to practice React framework.</p>
                        <ul>
                            <li>Built out the Login Modal using React-Semantic-UI library and React hook</li>
                            <li>Displayed different recipes on the landing page by making Axios API call</li>
                            <li>Built out the recipe card component using React framework</li>
                            <li>Styled the re-usable components using CSS</li>
                        </ul>
                        <div className='links'>
                            <a href='https://github.com/orgs/secret-family-recipe-s-cookbook/dashboard' target='_blank' rel='noopener'><Icon name='github' size='large' /></a>
                            <a href='https://secret-recipes-marketpage.netlify.com/' target='_blank' rel='noopener'><Icon name='linkify' size='large' /></a>
                            {/* <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='large' target='_blank'/></a> */}
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className={expand.vacation ? 'up': 'down'}>
            <Col className={expand.recipes || expand.speakOut ? 'not-visible' : null}>
                <div className='inner' id={expand.vacation ? 'bigger_view': null}>
                    <img src={nodejs} id='nodejs' alt='Image of NodeJS and Express, Postgress'/>
                    <div className='info'>
                        <h4>Vacation Planner</h4>
                        {expand.vacation ? <Icon name='minus' size='large' onClick={handleExpandVacation}/> : <Icon name='plus' size='large' onClick={handleExpandVacation}/>}
                        <p>Node.Js and Express project families and friends to plan thier dream trip</p>
                        <ul>
                            <li>Implemented RESTful APIs</li>
                            <li>Used PostgreSQL for data persistancy</li>
                            <li>Development environment Sqlite3 was used</li>
                            <li>Implemented JSON Web Token for secure authentication and authorization</li>
                            <li>Bcript was used for secure password storage</li>
                            <li>Implemented Unit testing</li>
                            <li>Documentation was done for client side request</li>
                        </ul>
                        <div className='links'>
                            <a href='https://github.com/BuildWeekVacationPlanner/BACKEND' target='_blank' rel='noopener'><Icon name='github' size='large' /></a>
                            {/* <a href='https://speakout-now.com/' target='_blank'><Icon name='linkify' size='large' /></a> */}
                        </div>
                    </div>
                </div>
            </Col>
            <Col style={{'display':'none'}}>
                <div className='inner'>
                    {/* <img className='comingSoon' src='https://media.giphy.com/media/rgVLXMbhACKQ/giphy.gif' alt='Coming Soon'/> */}
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Projects
