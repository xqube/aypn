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
        image: "./images/space.png",
        tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "Docker"],
        features: ["JWT Auth & Firebase", "Stripe Payments", "Mapbox Integration", "Dockerized Deployment"],
        github: "https://github.com/xqube/orcube",
        live: "#"
    },
    {
        id: 2,
        title: "Auto-Filter Bot Platform",
        description: "A centralized multi-bot management system with dynamic webhook routing and isolated database environments.",
        image: "./images/telegram-bot.png",
        tech: ["TypeScript", "Node.js", "Fastify", "MongoDB", "Docker"],
        features: ["Multi-bot Management", "Dynamic Webhooks", "Task Queues", "CI/CD Pipelines"],
        github: "https://github.com/xqube/autofilter-bot-creator",
        live: "#"
    },
    {
        id: 3,
        title: "TG File Indexing Bot",
        description: "High-performance Telegram bot for indexing and retrieving over 1M+ files with advanced search capabilities.",
        image: "./images/telegram-file-index.png",
        tech: ["Node.js", "grammY", "MongoDB", "Docker"],
        features: ["1M+ File Indexing", "Text Search", "High-speed Retrieval", "VPS Hosting"],
        github: "https://github.com/xqube/TelegramIndexbot",
        live: "#"
    },
    {
        id: 4,
        title: "AnimusDigital - E-Commerce",
        description: "Full-featured e-commerce web application with user/admin authentication, payment integrations, and comprehensive order management.",
        image: "./images/ecommerce.png",
        tech: ["Node.js", "Express", "MongoDB", "EJS", "AWS EC2", "NGINX"],
        features: ["OTP Auth", "PayPal & Twilio", "Cart & Wishlist", "Admin Dashboard"],
        github: "https://github.com/xqube/animusdigital",
        live: "#"
    }
];
