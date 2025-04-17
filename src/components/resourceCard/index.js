import React from 'react';
import { Card } from 'react-bootstrap';

const ResourceCard = ({ resource }) => {
  return (
    <Card className="mb-4 mx-5">
      <Card.Body>
        <Card.Title>{resource.name}</Card.Title>
        <Card.Text><strong>Description:</strong> {resource.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
