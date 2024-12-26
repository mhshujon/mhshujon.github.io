export default function TechStack() {
    const technologies = [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "EmailJS",
        "ReCAPTCHA",
        "Lucide Icons",
    ];

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Built With</h3>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}