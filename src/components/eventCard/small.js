import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const EventCard = ({ event }) => {
  return (
    <Card className="mb-3">
      <Row>
        <Col md={4}>
          <Card.Img 
            variant="top" 
            src={event.image} 
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>
              <strong>Date:</strong> {event.formattedDate}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCard;
