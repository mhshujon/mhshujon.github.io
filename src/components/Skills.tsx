import { Code } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Code className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, { icon: Icon, skills: categorySkills }]) => (
                <div
                    key={category}
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                    <Icon className="text-blue-600" size={20} />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {category}
                    </h3>
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