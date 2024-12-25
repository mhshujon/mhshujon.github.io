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
        facebook?: string;
    };
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
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
        }
    },
    {
        id: 2,
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
        }
    },
];