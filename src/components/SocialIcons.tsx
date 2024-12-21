import { contacts } from '../constants/contacts';
import { iconMap } from '../constants/iconMap';

export default function SocialIcons({ hover = '', customClass = '', iconSize = 20 }: { hover?: string, customClass?: string, iconSize?: number }) {
    return (
        <>
            {Object.entries(contacts).map(([platform, url]) => {
                const Icon = iconMap[platform]?.component; // Get the icon component dynamically
                const hoverColor = hover || iconMap[platform]?.color || "hover:transition-colors"; // Default if no color is defined
                return (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition ${hoverColor} ${customClass}`}
                    >
                        {Icon && <Icon size={iconSize} />}
                    </a>
                );
            })}
        </>
    );
}