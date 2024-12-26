
import {useScrollTo} from "../../hooks/useScrollTo";
export default function Navigation() {
    const scrollTo = useScrollTo();
    const links = ['Experience', 'Projects', 'Skills', 'Contact'];
    
    return (
        <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Navigation
            </h4>
            <ul className="space-y-2">
                {links.map(link => (
                    <li key={link}>
                        <span
                            onClick={() => scrollTo( link.toLowerCase() )}
                            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                        >{link}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}