import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led development of enterprise web applications using React and Node.js. Improved application performance by 40%."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and automated testing."
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2018 - 2019",
    description: "Built responsive web applications and contributed to the company's core product development."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-gray-600 text-sm">{exp.period}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}