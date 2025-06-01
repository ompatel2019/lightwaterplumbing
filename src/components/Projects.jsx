import React from 'react'
import { Link } from 'react-router-dom';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { slugify } from '../utils/slugify';
import placeholder from '../assets/images/placeholder.png';

const Projects = ({ bg, text, isHome, projectsData }) => {
  const displayProjects = isHome ? projectsData.slice(0, 4) : projectsData;

  return (
    <Section bg={bg} text={text}>
      <div>
        <SectionHeader 
          sectionName="Our Projects" 
          sectionHeader="View Our Latest Projects"
          sectionDesc="Explore our gallery of completed projects to see the quality and scope of our plumbing work. From routine repairs to complex installations, we showcase our commitment to excellence and attention to detail in every task we undertake."
          centre={true}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12 max-sm:px-2">
        {displayProjects.map((project) => {
          const projectSlug = slugify(project.title); // Create the slug outside JSX
          return (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{project.client}</span>
                  <span>{project.completionDate}</span>
                </div>
                <Link
                  to={`/projects/${projectSlug}`}
                  className="block mt-4 text-center bg-gray-100 hover:bg-gray-200 text-primary font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {isHome && (
        <div className="flex text-center">
          <Link to="/projects" className="flex-1">
            <button className="w-fit bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 group">
              View All Projects
              <i className="bi bi-arrow-right ml-2 inline-block transform group-hover:translate-x-1 transition-transform"></i>
            </button>
          </Link>
        </div>
      )}
    </Section>
  )
}

export default Projects;
