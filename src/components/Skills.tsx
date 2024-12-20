import React from 'react';
import { Code } from 'lucide-react';

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Express", "GraphQL", "REST APIs"],
  "Database": ["PostgreSQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Docker", "CI/CD"],
  "Tools & Methods": ["Git", "Agile", "TDD", "Microservices"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Code className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
              <div
                  key={category}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/*<h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">*/}
                {/*  {category}*/}
                {/*</h3>*/}
                <div className="flex gap-2 mb-4 pb-2 border-b border-gray-100">
                  <Code className="text-blue-600" size={28}/>
                  <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                      <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm
                             hover:bg-blue-100 transition-colors duration-200"
                      >
                    {skill}
                  </span>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}