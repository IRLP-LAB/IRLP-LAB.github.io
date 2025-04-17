import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../../components/projectCard/index';
import data from '../../data/projects.json';

const ResearchProjectsPage = () => {
  return (
    <Container>
      <h1 className='mt-5'>Research Projects</h1>
      
      <h3 className='my-4'>Ongoing Projects</h3>
      {data.projects.ongoing.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.project_title}
          pi={project.pi}
          coPi={project.co_pi}
          duration={project.duration}
          fundingAgency={project.funding_agency}
          grantAmount={project.grant_amount}
        />
      ))}

      <h3 className="my-4">Completed Projects</h3>
      {data.projects.completed.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.project_title}
          pi={project.pi}
          coPi={project.co_pi}
          duration={project.duration}
          fundingAgency={project.funding_agency}
          grantAmount={project.grant_amount}
        />
      ))}
    </Container>
  );
};

export default ResearchProjectsPage;
