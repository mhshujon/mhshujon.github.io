import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer",
    company: "Code Rex",
    companyUrl: "https://coderex.co/",
    period: "Aug 2022 - Present",
    description: "Led development of enterprise web applications using React and Node.js. Improved application performance by 40%.",
    highlights: ["Led team of 5 developers", "Reduced loading time by 40%", "Implemented CI/CD pipeline"]
  },
  {
    title: "Junior Software Engineer",
    company: "Code Rex",
    companyUrl: "https://coderex.co/",
    period: "Mar 2021 - Jul 2022",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and automated testing.",
    highlights: ["Built 10+ client projects", "Reduced bug reports by 60%", "Mentored junior developers"]
  },
  {
    title: "Intern Developer",
    company: "Code Rex",
    companyUrl: "https://coderex.co/",
    period: "Dec 2020 - Feb 2021",
    description: "Built responsive web applications and contributed to the company's core product development.",
    highlights: ["Developed 3 major features", "Improved UI/UX", "Learned Agile methodology"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Briefcase className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <a href={exp.companyUrl} target={`_blank`}>
                          <p className="text-blue-600">{exp.company}</p>
                        </a>
                      </div>
                      <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}