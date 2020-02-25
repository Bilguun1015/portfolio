import React from 'react';

import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import speakoutproj from './pics/speakoutproj.png';
import secretrecipeproj from './pics/secretrecipeproj.png';

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
                    <h4>Database Migration Project</h4>
                    <p>hello</p>
                    <p>some randome stuff I had to come up with to check if it works or i dont know if it will</p>
                    <p>some randome stuff I had to come up with to check if it works or i dont know if it will</p>
                </div>
            </Col>
            <Col>
                <div className='inner'>
                    <img src={secretrecipeproj} alt='Image of Speak Out Project'/>
                    <h4>Save Your Perfect Recipes</h4>
                    <p>hello</p>
                    
                </div>
            </Col>
        </Row>
        <Row className='down'>
            <Col>
                <div className='inner'>
                    <img className='comingSoon' src='https://media.giphy.com/media/rgVLXMbhACKQ/giphy.gif' alt='Coming Soon'/>
                </div>
            </Col>
            <Col>
                <div className='inner'>
                    <img className='comingSoon' src='https://media.giphy.com/media/rgVLXMbhACKQ/giphy.gif' alt='Coming Soon'/>
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