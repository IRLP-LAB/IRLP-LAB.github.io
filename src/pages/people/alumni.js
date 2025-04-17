import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import data from '../../data/people.json';

const AlumniPage = () => {
  // Function to render icons based on the social media platform
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
    <div className="container mt-5">
      {data
        .filter(category => category.title === 'Alumni (Ph.D.)' || category.title === 'Alumni (M.Tech.)')
        .map((category, index) => (
          <div key={index}>
            <h2 className="mt-4 mb-4">{category.title}</h2>
            <Row className='mx-3 mx-md-0'>
              {category.title === 'Alumni (M.Tech.)' ? (
                category.people.map((person, idx) => (
                  <Col key={idx} xs={12} md={4} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                category.people.map((person, idx) => (
                  <Col key={idx} xs={12} md={4} lg={3} className="mb-4">
                    <Card>
                      {person.image && <Card.Img variant="top" src={person.image} />}
                      <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                        {person.image && person.socials && (
                          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start' }}>
                            {person.socials.LinkedIn && (
                              <a href={person.socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                                {renderSocialIcon('LinkedIn')}
                              </a>
                            )}
                            {person.socials.GitHub && (
                              <a href={person.socials.GitHub} target="_blank" rel="noopener noreferrer">
                                {renderSocialIcon('GitHub')}
                              </a>
                            )}
                            {person.socials.Twitter && (
                              <a href={person.socials.Twitter} target="_blank" rel="noopener noreferrer">
                                {renderSocialIcon('Twitter')}
                              </a>
                            )}
                            {person.socials.Facebook && (
                              <a href={person.socials.Facebook} target="_blank" rel="noopener noreferrer">
                                {renderSocialIcon('Facebook')}
                              </a>
                            )}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </div>
        ))}
    </div>
  );
};

export default AlumniPage;
