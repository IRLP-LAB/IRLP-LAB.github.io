import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
    require('../../assets/fire_9.jpg'),
    require('../../assets/fire_10.jpg'),
    require('../../assets/fire_12.jpg'),
    require('../../assets/fire_13.jpg'),
    require('../../assets/blackboard.jpeg'),
];

const ImageCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block mx-auto"
            src={image}
            alt={`Slide ${index}`}
            style={{ height: '350px', width: '90%', objectFit: 'cover' }}
          />
          {/* <Carousel.Caption>
            <h3>Slide {index + 1}</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
