type Testimonial = {
    id: number;
    name: string;
    role: string;
    company: string;
    companyUrl: string;
    companyLogo: string;
    image: string;
    review: string;
    social: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Engineering Manager",
        company: "Code Rex",
        companyUrl: "https://coderex.co",
        companyLogo: "/assets/logo/coderex.svg",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        review: "One of the most dedicated developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
        social: {
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            twitter: "https://twitter.com"
        }
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Software Architect",
        company: "Code Rex",
        companyUrl: "https://coderex.co",
        companyLogo: "/assets/logo/coderex.svg",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        review: "An exceptional team player with strong technical skills. They consistently deliver high-quality code and mentor others effectively.",
        social: {
            linkedin: "https://linkedin.com",
            github: "https://github.com"
        }
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "Code Rex",
        companyUrl: "https://coderex.co",
        companyLogo: "/assets/logo/coderex.svg",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        review: "Their technical expertise combined with business understanding makes them an invaluable asset to any project.",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    }
];