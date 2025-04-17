import React from 'react';
import ResourceCard from '../../components/resourceCard';
import data from '../../data/resources.json';
import { Container, Row, Col } from 'react-bootstrap';

const ResearchResourcesPage = () => {
    return (
        <Container className="mt-5">
            <Row>
                {data.resources.map((resource, index) => (
                    <Col key={index} className="mb-4">
                        <ResourceCard resource={resource} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ResearchResourcesPage;
