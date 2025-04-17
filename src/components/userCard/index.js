import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const UserCard = ({ name, image, socials }) => {
  const renderSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn':
        return <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#888888' }} />;
      case 'GitHub':
        return <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#888888' }} />;
      case 'Twitter':
        return <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#888888' }} />;
      case 'Facebook':
        return <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#888888' }} />;
      default:
        return null;
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start' }}>
          {socials &&
            Object.entries(socials).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                {renderSocialIcon(platform)}
              </a>
            ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
