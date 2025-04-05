import React from 'react';
import ImageComponent from './ImageComponent';

const Project = ({ project }) => {
  return (
    <div className="container py-12 space-y-16">
      {/* Hero Image Section */}
      <div className="mb-8">
        <ImageComponent
          src={project.image}
          alt={project.title}
          width="100%"
          height="auto"
          className="w-full h-auto rounded shadow-xl"
        />
      </div>

      {/* Project Overview Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <div className="mb-4 text-gray-700 space-y-2">
          <p>
            <span className="font-bold">Category:</span> {project.category}
          </p>
          <p>
            <span className="font-bold">Client:</span> {project.client}
          </p>
          <p>
            <span className="font-bold">Completion Date:</span> {project.completionDate}
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {project.extendedDescription}
        </p>
      </section>

      {/* Project Highlights Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold mb-4 text-textDark">Project Highlights</h3>
        <p className="text-gray-600 leading-relaxed">
          {project.projectHighlights}
        </p>
      </section>

      {/* Design & Execution Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-textDark">Design & Execution</h3>
        <p className="text-gray-600 leading-relaxed">
          {project.designExecution}
        </p>
      </section>

      {/* Client Feedback Section */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-textDark">Client Feedback</h3>
        <p className="text-gray-600 leading-relaxed">
          {project.clientFeedback}
        </p>
      </section>
    </div>
  );
};

export default Project;
