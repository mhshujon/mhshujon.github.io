import { MapPin, Clock, Zap } from 'lucide-react';
import SocialIcons from "../SocialIcons";

const highlights = [
    {
        icon: Clock,
        title: "Quick Response",
        description: "Usually within 24 hours"
    },
    {
        icon: Zap,
        title: "Ready to Start",
        description: "Available for new projects"
    }
];

export default function ContactInfo() {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-white h-full flex flex-col">
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3>

                <div className="space-y-4 mb-8">
                    <p className="flex items-center gap-3">
                        <MapPin className="flex-shrink-0" size={20}/>
                        <span>Available for remote work worldwide</span>
                    </p>
                    <p className="text-blue-100">
                        I'm always excited to connect with fellow developers, potential clients,
                        and anyone interested in web development and technology.
                    </p>
                </div>

                {/* Highlights */}
                <div className="grid gap-4 mb-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                        >
                            <div className="p-2 bg-white/10 rounded-full">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-blue-100">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-auto">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                    <SocialIcons
                        hover="none"
                        customClass="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        iconSize={24}
                    />
                </div>
            </div>
        </div>
    );
}