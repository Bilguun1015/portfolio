import React from 'react';

import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import speakoutproj from './pics/speakoutproj.jpg';
import secretrecipeproj from './pics/secretrecipeproj.jpg';

import './sidebar.scss';

const Projects = props => {

  return (
    
    // <Container fluid style={{border: "1px solid black", paddingLeft:0, height}}>
    <div className='projects'>
        <div className='header'>
            <h2>Projects</h2>
            <Icon name='cancel' size='large' onClick={()=>{props.setShowProjects(false)}}/>
        </div>
        <Row className='up'>
            <Col>
                <div className='inner'>
                    <img src={speakoutproj} alt='Image of Speak Out Project'/>
                    <div className='info'>
                        <h4>Speak Out</h4>
                        <p className='date'>2019 Nov - 2019 Dec</p>
                        <p>Worked on a solution for English School microsoft database migration to a web based database</p>
                        <div className='links'>
                            <a href='https://github.com/Lambda-School-Labs/speak-out-fe' target='_blank'><Icon name='github' size='large' /></a>
                            <a href='https://speakout-now.com/' target='_blank'><Icon name='linkify' size='large' /></a>
                            {/* <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='large' target='_blank'/></a> */}
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
                <div className='inner'>
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


{/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card> */}