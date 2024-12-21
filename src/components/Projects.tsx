import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Product Feed Manager for WooCommerce",
    description: "Helps WooCommerce store owners generate and manage product feeds for over 180 online marketplaces like Google Shopping and Facebook. It features automated updates, advanced filtering options, and integration with Google Content API for real-time product sync and diagnostics reports.",
    tech: ["PHP", "JavaScript", "jQuery", "SASS", "WPML", "TranslatePress", "WooCommerce", "Google Content API"],
    link: "https://wordpress.org/plugins/best-woocommerce-feed"
  },
  {
    title: "Mail Mint - Email Marketing Automation Tool",
    description: "An email marketing and automation plugin for WordPress. It includes tools for lead management, email campaigns, an intuitive email builder, cart abandonment recovery, and detailed analytics.",
    tech: ["PHP", "React", "Redux", "TypeScript", "SASS", "REST API", "Email Builder", "WooCommerce"],
    link: "https://wordpress.org/plugins/mail-mint"
  },
  {
    title: "WP VR – 360° Panorama and Free Virtual Tour Builder For WordPress",
    description: "A virtual tour builder for WordPress that allows users to create interactive 360° panoramic views with hotspots, scene transitions, floor planning, and many more exciting features. It's perfect for showcasing properties, shops, or exhibitions online.",
    tech: ["PHP", "JavaScript", "TypeScript", "REST API", "WooCommerce", "Divi", "Astra", "Kadence", "Blocksy", "Elementor", "Gutenberg", "Beaver Builder"],
    link: "https://wordpress.org/plugins/wpvr"
  },
  {
    title: "Checkoutify – WooCommerce Checkout Customizer",
    description: "A powerful WordPress plugin to customize WooCommerce checkout with a drag-and-drop editor. Features include multi-step checkout, field management, order bumps, and payment gateway support, optimizing the checkout process to boost sales.",
    tech: ["PHP", "Vue", "JavaScript", "SASS", "REST API", "Stripe", "WooCommerce", "Divi", "Astra", "Elementor", "Gutenberg", "WooCommerce Blocks"],
    link: "https://rextheme.com/checkoutify-checkout-field-manager-for-woocommerce/"
  },
  {
    title: "Cart Lift – Abandoned Cart Recovery for WooCommerce and EDD",
    description: "A WooCommerce and EDD plugin designed to recover abandoned carts with automated email and SMS reminders, customizable templates, and performance analytics.",
    tech: ["PHP", "Vue", "JavaScript", "SASS", "REST API", "Woocommerce", "Easy Digital Downloads (EDD)"],
    link: "https://wordpress.org/plugins/cart-lift"
  },
  {
    title: "Product Recommendations for WooCommerce",
    description: "Allows WooCommerce store owners to display upsell and cross-sell product recommendations based on categories, tags, or user behavior to boost sales and engagement.",
    tech: ["PHP", "React", "TailWindCSS", "REST API", "Woocommerce", "Divi", "Astra", "Elementor", "Gutenberg", "WooCommerce Blocks"],
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