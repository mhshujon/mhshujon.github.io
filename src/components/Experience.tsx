import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experiences';
import ExpandableSection from './common/ExpandableSection';
import TruncatedText from './common/TruncatedText';

export default function Experience() {
    const experienceItems = experiences.map((exp, index) => (
        <div key={index} className="relative pl-12">
            <div className="absolute left-0 top-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp?.title}</h3>
                        <a href={exp?.companyUrl} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                            {exp?.companyLogo && (
                                <img
                                    src={exp?.companyLogo}
                                    alt={`${exp?.company} logo`}
                                    className="h-6 w-auto"
                                    loading={`lazy`}
                                />
                            )}
                            <span>{exp?.company}</span>
                        </a>
                    </div>
                    <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {exp?.period}
                    </span>
                </div>
                <TruncatedText text={exp?.description} />
                <div className="flex flex-wrap gap-2 mt-4">
                    {exp?.highlights.map((highlight, i) => (
                        <span key={i}
                              className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-sm">
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    ));

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-2 mb-12">
                    <Briefcase className="text-blue-600" size={28}/>
                    <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline line that stops at content */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100" />
                        <ExpandableSection
                            items={experienceItems}
                            title="Experience"
                            initialCount={3}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}