import { ArrowRight } from 'lucide-react';
import SocialIcons from "./SocialIcons";
import Button from './common/Button';
import ResumeButton from './common/ResumeButton';
import { useScrollTo } from "../hooks/useScrollTo";
import { professionalSummary } from "../data/professionalSummery.ts";

export default function Hero() {
    const scrollTo = useScrollTo();

    return (
        <div className="relative min-h-screen flex items-center justify-center py-20">
            {/* Background img */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-90"/>
                <img
                    src="/assets/mern-hero-bg.webp"
                    alt="MERN Stack Background"
                    className="w-full h-full object-cover opacity-10"
                    loading={`eager`}
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
                        {/* Available for Projects badge */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 animate-fade-in leading-tight">
                                Web Application <span className="text-blue-600">Engineer</span>
                            </h1>
                            <p className="text-xl text-gray-600 animate-slide-up">
                                {professionalSummary}
                            </p>
                        </div>

                        <div
                            className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center lg:justify-start w-full">
                            <Button
                                onClick={() => scrollTo('contact')}
                                Icon={ArrowRight}
                                className="w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
                            >
                                Get in Touch
                            </Button>
                            <ResumeButton/>
                        </div>

                        <div className="flex gap-6 pt-4 pb-8 justify-center lg:justify-start">
                            <SocialIcons
                                customClass="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Profile image section */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative mt-10 lg:mt-0">
                            <div
                                className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"/>
                            <div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-white animate-float">
                                <img
                                    src="/assets/profile-img/mhshujon.webp"
                                    alt="mhshujon.webp"
                                    className="w-full h-full object-cover rounded-full shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}