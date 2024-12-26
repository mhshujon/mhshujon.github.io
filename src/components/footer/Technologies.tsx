export default function Technologies() {
    const tech = ['React', 'TypeScript', 'Tailwind'];
    const tools = ['EmailJS', 'Lucide'];
    
    return (
        <div className="space-y-6">
            <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                    {tech.map(item => (
                        <span 
                            key={item}
                            className="inline-flex px-2.5 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            
            <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                    {tools.map(item => (
                        <span 
                            key={item}
                            className="inline-flex px-2.5 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}