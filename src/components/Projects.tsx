import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Product Feed Manager for WooCommerce",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://wordpress.org/plugins/best-woocommerce-feed"
  },
  {
    title: "Mail Mint - Email Marketing Automation Tool",
    description: "Real-time task management application with team collaboration features. Built using React and Firebase.",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    link: "https://wordpress.org/plugins/mail-mint"
  },
  {
    title: "WP VR – 360° Panorama and Free Virtual Tour Builder For WordPress",
    description: "Interactive analytics dashboard with data visualization using D3.js and React.",
    tech: ["React", "D3.js", "TypeScript", "REST API"],
    link: "https://wordpress.org/plugins/wpvr"
  },
  {
    title: "Cart Lift – Abandoned Cart Recovery for WooCommerce and EDD",
    description: "A social media platform with real-time messaging and post sharing capabilities.",
    tech: ["React", "Socket.io", "Express", "PostgreSQL"],
    link: "https://wordpress.org/plugins/cart-lift"
  },
  {
    title: "Product Recommendations for WooCommerce",
    description: "Interactive analytics dashboard with data visualization using D3.js and React.",
    tech: ["React", "D3.js", "TypeScript", "REST API"],
    link: "https://wordpress.org/plugins/product-recommendations-addon-for-woocommerce/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Code2 className="text-blue-600" size={28} />
          <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}