import { useEffect, useState } from 'react';
import {Quote, ArrowLeft, ArrowRight, Linkedin, Github, Twitter, LucideIcon} from 'lucide-react';

type Testimonial = {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    review: string;
    social: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
};

const iconMap: Record<string, { component: LucideIcon; color: string }> = {
    linkedin: { component: Linkedin, color: "hover:text-blue-600" },
    github: { component: Github, color: "hover:text-gray-600" },
    twitter: { component: Twitter, color: "hover:text-blue-400" },
};


const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Engineering Manager",
        company: "Tech Solutions Inc",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        review: "One of the most dedicated developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
        social: {
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            twitter: "https://twitter.com"
        }
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Software Architect",
        company: "Innovation Labs",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        review: "An exceptional team player with strong technical skills. They consistently deliver high-quality code and mentor others effectively.",
        social: {
            linkedin: "https://linkedin.com",
            github: "https://github.com"
        }
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "Digital Ventures",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        review: "Their technical expertise combined with business understanding makes them an invaluable asset to any project.",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000); // Change testimonial every 5 seconds

            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-2 mb-12">
                    <Quote className="text-blue-600" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800">What People Say</h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div
                        className="overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                width: `${testimonials.length * 100}%`,
                                transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`,
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full px-4 pb-2"
                                >
                                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md">
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-24 h-24 rounded-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-grow text-center md:text-left">
                                                <p className="text-gray-600 italic mb-4">"{testimonial.review}"</p>
                                                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                                <p className="text-blue-600">{testimonial.role}</p>
                                                <p className="text-gray-500 mb-4">{testimonial.company}</p>
                                                <div className="flex gap-4 justify-center md:justify-start">
                                                    {Object.entries(testimonial.social).map(([platform, url]) => {
                                                        const Icon = iconMap[platform]?.component; // Get the icon component dynamically
                                                        const color = iconMap[platform]?.color || "hover:transition-colors"; // Default if no color is defined
                                                        return (
                                                            Icon && (
                                                                <a
                                                                    key={platform}
                                                                    href={url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={`text-gray-400 ${color} transition-colors`}
                                                                >
                                                                    <Icon size={20} />
                                                                </a>
                                                            )
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Previous testimonial"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Next testimonial"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}