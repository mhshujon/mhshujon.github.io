import {MapPin} from 'lucide-react';
import SocialLinks from './footer/SocialLinks';
import Navigation from './footer/Navigation';
import Technologies from './footer/Technologies';
import Copyright from './footer/Copyright';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-800 ">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <SocialLinks />
                    </div>
                    <div className="flex gap-6">
                        <Navigation />
                    </div>
                    <div className="flex gap-6">
                        <Technologies />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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