import {MapPin} from 'lucide-react';
import SocialIcons from "./SocialIcons.tsx";

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold">MD MONIR HOSSAIN</h3>
              <p className="text-gray-400">Web Application Engineer</p>
              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <MapPin size={16} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="flex gap-6">
              <SocialIcons iconSize={24}/>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} MHSHUJON. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}