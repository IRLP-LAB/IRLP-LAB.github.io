import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PublicationCard from '../../components/publicationCard/index';
import data from '../../data/publications.json';

const PublicationsPage = () => {
    console.log(data);
    return(
        <Container className="mt-5">
            <h1 className="mb-4">Publications</h1>
            <Row>
                {data.publications.map((pub, index) => (
                <Col key={index} md={12}>
                    <PublicationCard publication={pub} />
                </Col>
                ))}
            </Row>
        </Container>
    )
};

export default PublicationsPage;
