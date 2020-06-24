import React, {useState, useEffect} from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';

import speakoutproj from './pics/speakoutproj.jpg';
import secretrecipeproj from './pics/secretrecipeproj.jpg';
import nodejs from './pics/nodejs.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} indicators = {false} pause='hover'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={speakoutproj}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <Carousel.Caption>
            <button>Click me here</button>
            <button>Click me here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secretrecipeproj}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={nodejs}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Projects