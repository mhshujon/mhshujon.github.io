import React from 'react';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com"
  },
  {
    title: "Task Management System",
    description: "Real-time task management application with team collaboration features. Built using React and Firebase.",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    link: "https://github.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive analytics dashboard with data visualization using D3.js and React.",
    tech: ["React", "D3.js", "TypeScript", "REST API"],
    link: "https://github.com"
  },
  {
    title: "Social Media Platform",
    description: "A social media platform with real-time messaging and post sharing capabilities.",
    tech: ["React", "Socket.io", "Express", "PostgreSQL"],
    link: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Code2 className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}