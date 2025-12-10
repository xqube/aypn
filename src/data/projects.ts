export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    features: string[];
    github: string;
    live: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "ORCUBE - Rental Platform",
        description: "A scalable property rental web application enabling secure user/admin authentication and property management.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "Docker"],
        features: ["JWT Auth & Firebase", "Stripe Payments", "Mapbox Integration", "Dockerized Deployment"],
        github: "https://github.com/xqube/orcube",
        live: "#"
    },
    {
        id: 2,
        title: "Auto-Filter Bot Platform",
        description: "A centralized multi-bot management system with dynamic webhook routing and isolated database environments.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
        tech: ["TypeScript", "Node.js", "Fastify", "MongoDB", "Docker"],
        features: ["Multi-bot Management", "Dynamic Webhooks", "Task Queues", "CI/CD Pipelines"],
        github: "https://github.com/xqube/autofilter-bot-creator",
        live: "#"
    },
    {
        id: 3,
        title: "TG File Indexing Bot",
        description: "High-performance Telegram bot for indexing and retrieving over 1M+ files with advanced search capabilities.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        tech: ["Node.js", "grammY", "MongoDB", "Docker"],
        features: ["1M+ File Indexing", "Text Search", "High-speed Retrieval", "VPS Hosting"],
        github: "https://github.com/xqube/TelegramIndexbot",
        live: "#"
    }
];
