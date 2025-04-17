import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ projectTitle, pi, coPi, duration, fundingAgency, grantAmount }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{projectTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Principal Investigator: {pi}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Co-Principal Investigator: {coPi}</Card.Subtitle>
        <Card.Text><strong>Duration:</strong> {duration}</Card.Text>
        <Card.Text><strong>Funding Agency:</strong> {fundingAgency}</Card.Text>
        <Card.Text><strong>Grant Amount:</strong> {grantAmount}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
