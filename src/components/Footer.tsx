import { MapPin } from 'lucide-react';
import SocialLinks from './footer/SocialLinks';
import Navigation from './footer/Navigation';
import Technologies from './footer/Technologies';
import Copyright from './footer/Copyright';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* Main Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-8 border-b border-gray-800">
                    <div className="space-y-4">
                        <SocialLinks />
                    </div>
                    <div className="space-y-4">
                        <Navigation />
                    </div>
                    <div className="space-y-4">
                        <Technologies />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} className="text-blue-400"/>
                        <span>Dhaka, Bangladesh</span>
                    </div>
                    <Copyright />
                </div>
            </div>
        </footer>
    );
}