import {Cloud, Database, Layout, Server, Wrench} from "lucide-react";

export const skills = {
    "Frontend": {
        icon: Layout,
        skills: ["React", "Redux", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    "Backend": {
        icon: Server,
        skills: ["PHP","Node.js", "Express.js", "Python", "GraphQL", "REST APIs"]
    },
    "Database": {
        icon: Database,
        skills: ["MySQL", "MongoDB", "Redis", "PostgreSQL"]
    },
    "Cloud & DevOps": {
        icon: Cloud,
        skills: ["AWS", "Docker", "CI/CD"]
    },
    "Tools & Methods": {
        icon: Wrench,
        skills: ["Git", "SVN", "Agile", "TDD", "Microservices"]
    }
};