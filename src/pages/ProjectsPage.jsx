// pages/ProjectsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ProjectsPage = ({ placeholderImg, projectsData }) => {
  const jsonLdProjectsPage = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": "Penrith Projects by Lightwater Plumbing",
    "description": "Collection of our latest plumbing projects completed in Penrith and beyond.",
    "url": "https://example.com/projects"
  };

  const stats = [
    { stat: "120", statType: "+", statDesc: "Residential Installations" },
    { stat: "800", statType: "+", statDesc: "Clients Served" },
    { stat: "2500", statType: "+", statDesc: "Projects Completed" }
  ];

  return (
    <>
      <SeoHelmet
        title="Projects | Lightwater Plumbing"
        description="Explore our plumbing projects that showcase quality workmanship and innovative solutions."
        canonicalUrl="https://example.com/projects"
        jsonSchema={jsonLdProjectsPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Projects"
        heading="Projects"
        subheading="Explore our portfolio of completed projects, demonstrating quality workmanship and innovative solutions."
      />
      <Stats stats={stats} bg="bg-primary" text="text-textWhite"/>
      <Projects
        bg="bg-white"
        text="text-textBlack"
        isHome={false}
        placeholderImg={placeholderImg}
        projectsData={projectsData}
      />
      <CTAMini text="Claim Your Exclusive Discount Now"/>
      <CTA bg="bg-white" text="text-textBlack"/>
    </>
  );
};

export default ProjectsPage;
