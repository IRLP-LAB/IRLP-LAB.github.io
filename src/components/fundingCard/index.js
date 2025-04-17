import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const FundingCard = () => {
  return (
    <Card className='my-3' style={{ backgroundColor: '#eff6ff', borderRadius: '10px' }}>
        <Card.Body>
            <Row>
                <Col xs={3} className="d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 shadow-sm">
                        <FontAwesomeIcon icon={faWallet} size="2x" style={{ color: '#007bff' }} />
                    </div>
                </Col>
                <Col xs={9}>
                    <Card.Title style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        Funding Achievement
                    </Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>
                        Received total funds worth Rs. 3.3 crore for ongoing and completed projects
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
  );
};

export default FundingCard;