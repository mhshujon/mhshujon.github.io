import {useEffect, useState} from 'react';
import {Quote, ArrowLeft, ArrowRight} from 'lucide-react';
import {testimonials} from '../data/testimonials';
import {iconMap} from '../constants/iconMap';
import TruncatedText from "./common/TruncatedText.tsx";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials?.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials?.length - 1 ? 0 : prev + 1));
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
                    <Quote className="text-blue-600" size={28}/>
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
                                width: `${testimonials?.length * 100}%`,
                                transform: `translateX(-${(currentIndex * 100) / testimonials?.length}%)`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full px-4 pb-2"
                                >
                                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={testimonial?.image}
                                                    alt={testimonial?.name}
                                                    className="w-24 h-24 rounded-full object-cover"
                                                    loading={`lazy`}
                                                />
                                            </div>
                                            <div className="flex-grow text-center md:text-left">
                                                <p className="text-gray-600 italic mb-4">
                                                    <TruncatedText text={`"${testimonial?.review}"`} maxLines={3}/>
                                                </p>
                                                <h3 className="text-xl font-semibold text-gray-800">{testimonial?.name}</h3>
                                                <p className="text-blue-600 font-medium">{testimonial?.role}</p>
                                                <a href={testimonial?.companyUrl} target={`_blank`} className="flex items-center gap-2 text-gray-500 mb-4 hover:text-gray-600 font-medium">
                                                    {testimonial?.companyLogo && (
                                                        <img
                                                            src={testimonial?.companyLogo}
                                                            alt={`${testimonial?.company} logo`}
                                                            className="h-5 w-auto"
                                                            loading={`lazy`}
                                                        />
                                                    )}
                                                    <span>{testimonial?.company}</span>
                                                </a>
                                                <div className="flex gap-4 justify-center md:justify-start">
                                                    {Object.entries(testimonial?.social).map(([platform, url]) => {
                                                        const Icon = iconMap[platform]?.component;
                                                        const hoverColor = iconMap[platform]?.color || "hover:transition-colors";
                                                        return (
                                                            Icon && (
                                                                <a
                                                                    key={platform}
                                                                    href={url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={`text-gray-400 ${hoverColor} transition-colors`}
                                                                >
                                                                    <Icon size={20}/>
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
                        <ArrowLeft size={24}/>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Next testimonial"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <ArrowRight size={24}/>
                    </button>
                </div>
            </div>
        </section>
    );
}