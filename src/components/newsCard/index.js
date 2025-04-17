import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const NewsCard = ({ news }) => {
  return (
    <Card className="mb-3">
      <Row>
        <Col md={4}>
          <Card.Img 
            variant="top" 
            src={news.image} 
            style={{ objectFit: 'cover', height: '100%' }} // Apply object-fit: cover here
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{news.headline}</Card.Title>
            <Card.Text>{news.date}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default NewsCard;
