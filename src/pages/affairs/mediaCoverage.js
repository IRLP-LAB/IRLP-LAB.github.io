import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import news from '../../data/news.json';
import NewsCard from '../../components/newsCard/index';

const MediaCoveragePage = () => {
  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

  return (
    <Container className="mt-5">
      <h2>IRLP Lab in News</h2>
      <Row>
        {sortedNews.map((item, index) => (
          <Col key={index} md={6}>
            <NewsCard news={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MediaCoveragePage;
