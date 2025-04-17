import React from 'react';
import { Card } from 'react-bootstrap';

const PublicationCard = ({ publication }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{publication.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {publication.authors.join(', ')}
        </Card.Subtitle>
        <Card.Text>
          <strong>Year:</strong> {publication.year}
        </Card.Text>
        {publication.conference && (
          <Card.Text>
            <strong>Conference:</strong> {publication.conference}
          </Card.Text>
        )}
        {publication.journal && (
          <Card.Text>
            <strong>Journal:</strong> {publication.journal}
          </Card.Text>
        )}
        {publication.doi && (
          <Card.Text>
            <strong>DOI:</strong> <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">{publication.doi}</a>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default PublicationCard;
