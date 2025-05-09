// pages/ProjectPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { slugify } from '../utils/slugify';

// Tools & Components
import SeoHelmet from '../tools/SeoHelmet';
import CTAMini from '../components/CTAMini';
import Section from '../components/Section';
import PageHeadingHeader from '../components/PageHeadingHeader';
import CTA from '../components/CTA';
import NotFoundPage from './NotFoundPage';
import Project from '../components/Project';

const ProjectPage = ({ projectsData }) => {
  const { slug } = useParams();
  const project = projectsData.find((p) => slugify(p.title) === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const canonicalUrl = `https://lightwatergroup.com.au/projects/${slug}`;

  return (
    <>
      <SeoHelmet
        title={`${project.title} | Lightwater Plumbing`}
        description={project.description}
        canonicalUrl={canonicalUrl}
        jsonSchema={{
          "@context": "https://schema.org",
          "@type": "Project",
          "name": project.title,
          "description": project.description,
          "creator": {
            "@type": "Organization",
            "name": "Lightwater Plumbing",
            "location": "Penrith, Australia"
          },
          "url": canonicalUrl
        }}
      />

      <CTAMini text="Book online and receive $50 off your first service" />

      <Section bg="bg-white" text="text-white">
        <PageHeadingHeader
          route={`Home / Projects / ${project.title}`}
          heading={project.title}
        />

        <Project project={project} />
      </Section>

      <CTA />
    </>
  );
};

export default ProjectPage;
