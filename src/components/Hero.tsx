import { ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';
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
                    <div className="order-2 lg:order-1 space-y-10">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight tracking-tight">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'WordPress Engineer',
                                                'WordPress Core Contributor',
                                                'WordPress Enthusiast'
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                            deleteSpeed: 35,
                                            pauseFor: 850,
                                            cursor: '|'
                                        }}
                                    />
                                </h1>
                                <div className="h-1 w-24 bg-blue-600 mt-6"></div>
                            </div>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                                {professionalSummary}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button
                                onClick={() => scrollTo('contact')}
                                Icon={ArrowRight}
                                className="w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
                            >
                                Get in Touch
                            </Button>
                            <ResumeButton/>
                        </div>

                        <div className="flex gap-6">
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