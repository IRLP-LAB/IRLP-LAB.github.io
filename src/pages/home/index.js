import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import news from '../../data/news.json';
import events from '../../data/events.json';
import fire_9 from '../../assets/fire_9.jpg';
import fire_10 from '../../assets/fire_10.jpg';
import './styles.css';
import ResearchCard from '../../components/researchCard';
import FundingCard from '../../components/fundingCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faFileAlt, faGavel, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    // const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
    const today = new Date();

    const formatDateRange = (startDate, endDate) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const start = new Date(startDate).toLocaleDateString('en-GB', options);
        const end = new Date(endDate).toLocaleDateString('en-GB', options);
        return `${start} to ${end}`;
    };

    const upcomingEvents = events?.events?.filter(event => new Date(event.start_date) > today) || [];

    const researchData = [
        {
          icon: faLanguage,
          title: 'Cross Lingual Information Retrieval',
          description: 'Developing systems for retrieving information across different languages',
        },
        {
          icon: faFileAlt,
          title: 'Financial Text Mining',
          description: 'Analyzing and extracting insights from financial documents and data',
        },
        {
          icon: faGavel,
          title: 'Legal AI',
          description: 'Applying AI techniques to legal document analysis and processing',
        },
        {
          icon: faStar,
          title: 'Recommendation Systems',
          description: 'Building intelligent systems for personalized content recommendations',
        },
        {
          icon: faLanguage,
          title: 'Machine Translation',
          description: 'Developing systems for automated translation between languages',
        },
        {
          icon: faStar,
          title: 'Social Media Analytics',
          description: 'Analyzing social media data for insights and patterns',
        },
    ];

    return (
        <div className="mt-4" style={{ overflow: "hidden" }}>
            <Container fluid>
                <Card className="text-white card-responsive">
                    <Card.Img
                        src={fire_9}
                        alt="Card image"
                        style={{ objectFit: 'cover' }}
                        className="img-fluid h-100 d-block"
                    />
                    <Card.ImgOverlay
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: '100%' }}
                    >
                        <div className="text-center">
                            <Card.Title className="card-title-responsive">
                                Information Retrieval and <br />
                                Language Processing Lab
                            </Card.Title>
                            <Card.Text className="my-3 card-text-responsive">
                                Established in 2010, we specialize in information retrieval from unstructured documents and natural language processing of Indic languages, delivering research-based prototypes for societal benefit.
                            </Card.Text>
                            <Button variant="primary" className="m-2 btn-lg rounded-pill">
                                Our Research
                            </Button>
                            <Button variant="outline-dark" className="m-2 btn-lg rounded-pill">
                                Work With Us
                            </Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                
                <Container className='mt-5'>
                    <Row>
                        <Col md={6}>
                            <h2>About IRLP Lab</h2>
                            <p>The Information Retrieval and Language Processing Lab (IRLP Lab) was established in the year 2010 with the aim of doing research in the area of information retrieval (IR) wherein we deal with retrieval of information from unstructured documents and natural language processing (NLP) wherein we deal with processing of Indic languages.</p>
                            <p>The objective of IRLP Lab is to do research as well as deliver prototypes based on this research which can be used by the society.</p>
                            <ResearchCard />
                            <FundingCard />
                        </Col>
                        <Col md={6}>
                        <img 
                            src={fire_10}
                            alt="Example" 
                            className="img-fluid rounded" 
                        />
                        </Col>
                    </Row>
                </Container>

                <div className="container mt-5">
                    <h2 className="text-center mb-4">Research Areas</h2>
                    <p className="text-center mb-4">
                        Our research spans across various domains of Information Retrieval and Natural Language Processing
                    </p>
                    <Row>
                        {researchData.map((area, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className='shadow' style={{ height: '200px' }}>
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={area.icon} size="3x" style={{ color: '#4db8ff' }} />
                                <Card.Title className="mt-3">{area.title}</Card.Title>
                                <Card.Text>{area.description}</Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </div>

                <Container className='mt-5'>
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4 p-3 shadow" style={{ backgroundColor: "#f3f3f3" }}>
                                <Card.Body>
                                    <h2 className='mb-3'>Upcoming Events</h2>
                                    {upcomingEvents.length === 0 ? (
                                        <p>No upcoming events</p>
                                    ) : (
                                        upcomingEvents.map((event, index) => (
                                        <Card key={index} className="mb-3 shadow-sm">
                                            <Card.Body>
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="ms-3 me-4" size="2x" style={{ color: '#4db8ff' }} />
                                                <div>
                                                <h6>{event.title}</h6>
                                                <p>
                                                    {formatDateRange(event.start_date, event.end_date)}
                                                </p>
                                                </div>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                        ))
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className='p-3 shadow' style={{ backgroundColor: "#f3f3f3" }}>
                                <Card.Body>
                                    <h2 className='mb-3'>Want to Work with Us?</h2>
                                    <p>
                                                To apply for the <strong>M.Tech. / PhD position</strong>, <a href="/">click here</a>.
                                            </p>
                                            <p>
                                                To apply for the <strong>Research Assistant (RA) / Post Doctoral position</strong>, drop a mail to <a href="mailto:irlab@daiict.ac.in">irlab@daiict.ac.in</a>.
                                            </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
                {/* {upcomingEvents.length > 0 && (
                    <Row className="mt-4 mx-3 mx-md-5">
                        <Col md={12}>
                            <h2 className="mt-3 mb-3"><strong>Upcoming Events</strong></h2>
                            <Row>
                                {upcomingEvents.map((event, index) => (
                                    <Col key={index} xs={12} md={6} className="mb-4">
                                        <EventCard
                                            event={{
                                                ...event,
                                                formattedDate: formatDateRange(event.start_date, event.end_date)
                                            }}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                )}
                
                <Row className="mt-4 mx-3 mx-md-5">
                    <Col xs={12} md={6}>
                        <h2 className='mt-3 mb-3'><strong>News</strong></h2>
                        <ul className="list-unstyled ms-5" style={{ listStyleType: 'square' }}>
                            {sortedNews.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <span className="text-muted"><strong>{item.date}:</strong></span> {item.headline}
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 className='mt-3 mb-3'><strong>Want to work with us?</strong></h2>
                        <p style={{ color: 'grey' }}>
                            To apply for the <strong>M.Tech. / PhD position</strong>, <a href="/">click here</a>.
                        </p>
                        <p style={{ color: 'grey' }}>
                            To apply for the <strong>Research Assistant (RA) / Post Doctoral position</strong>, drop a mail to <a href="mailto:irlab@daiict.ac.in">irlab@daiict.ac.in</a>.
                        </p>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default HomePage;
