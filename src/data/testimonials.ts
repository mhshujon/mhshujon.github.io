type Testimonial = {
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
        facebook?: string;
        email?: string;
    };
};

export const testimonials: Testimonial[] = [
    {
        name: "Sadi Mohammad Zaman",
        role: "Chief Technology Officer",
        company: "Code Rex",
        companyUrl: "https://coderex.co",
        companyLogo: "/assets/logo/coderex.webp",
        image: "/assets/testimonials/sadi.webp",
        review: "Monir is a talented and passionate software professional. I worked with him for almost four years. He has been a great part of our team, showing amazing skills in R&D and solving problems calmly. He is kind-hearted, ethical, and a true team player. He's always ready to listen and learn, and loves sharing what he knows. Monir has a strong passion for clean, maintainable code, which reflects his commitment to quality. His ability to stay cool under pressure has been truly inspiring. Any team would be lucky to have him!",
        social: {
            github: "https://github.com/sadi22",
            linkedin: "https://www.linkedin.com/in/sadimohammad/",
            facebook: "https://www.facebook.com/sadi.mohammad.35",
            email: "mailto:sadi@coderex.co",
        }
    },
    {
        name: "C S Sultan",
        role: "Business Development Manager",
        company: "Code Rex",
        companyUrl: "https://coderex.co",
        companyLogo: "/assets/logo/coderex.webp",
        image: "/assets/testimonials/cssultan.webp",
        review: "He has been an amazing person to work with, always dedicated to solving any problems with precision. He has a concrete knowledge in programming and OOP, while also being an expert PHP developer. On top of these, he is a great ethical human being. A great individual and a gem for any team.",
        social: {
            linkedin: "https://www.linkedin.com/in/c-s-sultan-royal/",
            twitter: "https://twitter.com/SultanRoyal1",
            facebook: "https://www.facebook.com/sultan.royal",
            email: "mailto:sultan@coderex.co",
        }
    },
    {
        name: "Shahab Uddin",
        role: "Senior UI/UX Designer",
        company: "Code Rex",
        companyUrl: "https://coderex.co",
        companyLogo: "/assets/logo/coderex.webp",
        image: "/assets/testimonials/mahi.webp",
        review: "I had the opportunity to work with him for a long time. He is very good at problem-solving. He also knows how to manage a team, support individuals, and delegate tasks effectively. Most importantly, he is a great human being.",
        social: {
            linkedin: "https://www.linkedin.com/in/shahab-uddin-mahi-7a9704117/",
            twitter: "https://twitter.com/Sk_Md_MaHi",
            facebook: "https://www.facebook.com/md.skmahi",
            email: "mailto:mahi@coderex.co",
        }
    },
];