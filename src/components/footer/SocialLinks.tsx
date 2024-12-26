import SocialIcons from '../SocialIcons';

export default function SocialLinks() {
    return (
        <div className="space-y-6">
            {/* Name and Role */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    MD MONIR HOSSAIN
                </h3>
                <p className="text-white-400 font-medium">
                    Web Application Engineer
                </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
                <SocialIcons 
                    iconSize={20}
                    customClass="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
                />
            </div>
        </div>
    );
}