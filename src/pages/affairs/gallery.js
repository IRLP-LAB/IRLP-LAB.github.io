import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const images = [
  require('../../assets/fire_9.jpg'),
  require('../../assets/fire_10.jpg'),
  require('../../assets/fire_12.jpg'),
  require('../../assets/fire_13.jpg'),
  require('../../assets/blackboard.jpeg'),
];

const GalleryPage = () => {
  return (
    <Container>
      <h1 className="my-4 text-center">Gallery</h1>
      <Row>
        {images.map((image, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <div
                style={{
                  height: '200px',
                  overflow: 'hidden',
                }}
              >
                <Card.Img
                  variant="top"
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              {/* <Card.Body>
                <Card.Title>Image {index + 1}</Card.Title>
                <Card.Text>Image description or any other details can go here.</Card.Text>
              </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryPage;
