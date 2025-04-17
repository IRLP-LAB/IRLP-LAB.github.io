import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../data/publications.json';

const PublicationsPage = () => {
    const groupedPublications = data || {};

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Publications</h1>
            {Object.keys(groupedPublications)
                .sort((a, b) => b - a) // Sort years in reverse order
                .map((year) => (
                    <Row key={year} className="mb-5">
                        <Col md={12}>
                            <h2>{year}</h2>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                {groupedPublications[year].map((pub, index) => (
                                    <li key={index} style={{ marginBottom: '1rem' }}>
                                        <p>
                                            <strong>{pub.authors.join(', ')}</strong>. "{pub.title}."
                                            {pub.conference && (
                                                <> <em>{pub.conference}</em>,</>
                                            )}
                                            {pub.journal && (
                                                <> <em>{pub.journal}</em>,</>
                                            )}
                                            {pub.year}.
                                            {pub.doi && (
                                                <> DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a>.</>
                                            )}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                ))}
        </Container>
    );
};

export default PublicationsPage;
