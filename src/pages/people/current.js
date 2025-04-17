import React from 'react';
import UserCard from '../../components/userCard/index';
import data from '../../data/people.json';
import { Container, Row, Col } from 'react-bootstrap';
import { imageMap } from '../../assets/images';

const CurrentPeoplePage = () => {
  return (
    <Container className="mt-5">
      {data
        .filter(category => category.title !== 'Alumni (Ph.D.)' && category.title !== 'Alumni (M.Tech.)')
        .map((category, index) => (
          <div key={index}>
            <h2 className="mt-4 mb-4">{category.title}</h2>
            <Row className='mx-3 mx-md-0'>
              {category.people.map((person, idx) => {
                const image = imageMap[person.name] || "https://via.placeholder.com/150";
                return (
                  <Col key={idx} xs={12} md={4} lg={3} className="mb-4">
                    <UserCard name={person.name} image={image} socials={person.socials} />
                  </Col>
                );
              })}
            </Row>
          </div>
        ))}
    </Container>
  );
};

export default CurrentPeoplePage;
