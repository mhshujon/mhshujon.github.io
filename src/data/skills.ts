import {Cloud, Database, Layout, Server, Wrench} from "lucide-react";

export const skills = {
    "Frontend": {
        icon: Layout,
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    "Backend": {
        icon: Server,
        skills: ["PHP", "Python","Node.js", "Express.js", "GraphQL", "REST APIs"]
    },
    "Database": {
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
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