import { Code2, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ExpandableSection from './common/ExpandableSection';
import TruncatedText from './common/TruncatedText';

export default function Projects() {
  const projectItems = projects.map((project, index) => (
      <div
          key={index}
          className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
            {project?.title}
          </h3>
          <TruncatedText text={project?.description} />
          <div className="space-y-4 mt-6">
            <div className="flex flex-wrap gap-2">
              {project?.tech.map((tech, techIndex) => (
                  <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                      {tech}
                  </span>
              ))}
            </div>
            <a
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              View Project <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
  ));

  return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Code2 className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Collaborative Projects</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <ExpandableSection
                items={projectItems}
                title="Projects"
            />
          </div>
        </div>
      </section>
  );
}