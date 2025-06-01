import React from "react";
import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="container px-4 space-y-12">
      {/* Hero Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white p-2">
            <ImageComponent
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-textDark mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                <strong>Category:</strong> {project.category}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                <strong>Client:</strong> {project.client}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                <strong>Completed:</strong> {project.completionDate}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{project.extendedDescription}</p>
          </div>

          {/* Optional Action */}
          <div>
            <Link to='/contact-us' className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
              Book Similar Service
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <section className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-textDark mb-4">Project Highlights</h3>
        <p className="text-gray-700 leading-relaxed">{project.projectHighlights}</p>
      </section>
    </div>
  );
};

export default Project;
