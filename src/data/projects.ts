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
        title: "ORCUBE - Property Rental Platform",
        description: "Scalable property rental web app with secure JWT/OTP authentication, Stripe payments, and AWS S3 image storage. Deployed via Docker on VPS with Nginx reverse proxy and UFW firewall.",
        image: "./images/space.png",
        tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "AWS S3", "Docker"],
        features: ["JWT/OTP Auth", "Stripe Payments", "Mapbox/Google Maps", "Nodemailer Emails", "Dockerized Deployment"],
        github: "https://github.com/xqube/orcube",
        live: "#"
    },
    {
        id: 2,
        title: "Telegram Bot Creator Platform",
        description: "Centralized multi-bot management system with dynamic webhook routing, isolated MongoDB databases per bot, and high-performance task queues. Zero-downtime deployments via GitHub Actions CI/CD.",
        image: "./images/telegram-bot.png",
        tech: ["TypeScript", "Node.js", "Fastify", "grammY", "MongoDB", "Docker"],
        features: ["Multi-bot Management", "Dynamic Webhooks", "Task Queues", "GitHub Actions CI/CD", "Zero-Downtime Deploys"],
        github: "https://github.com/xqube/autofilter-bot-creator",
        live: "#"
    },
    {
        id: 3,
        title: "TG File Indexing Bot",
        description: "High-performance Telegram bot for indexing and retrieving 1M+ files with sub-100ms search response times. Optimized MongoDB text indexing with efficient query pagination and caching.",
        image: "./images/telegram-file-index.png",
        tech: ["Node.js", "grammY", "MongoDB", "Docker", "Hetzner VPS"],
        features: ["1M+ File Indexing", "Sub-100ms Search", "99.9% Uptime", "Query Pagination", "Caching Strategies"],
        github: "https://github.com/xqube/TelegramIndexbot",
        live: "#"
    },
    {
        id: 4,
        title: "AnimusDigital - E-Commerce",
        description: "Full-featured e-commerce platform with user/admin dashboards, PayPal payments, Twilio OTP verification, and sales analytics. Deployed on AWS EC2 with Nginx, SSL certificates, and automated backups.",
        image: "./images/ecommerce.png",
        tech: ["Node.js", "Express", "MongoDB", "EJS", "AWS EC2", "Nginx"],
        features: ["PayPal & Twilio", "Sales Analytics", "Admin Dashboard", "SSL & Auto Backups", "Cart & Wishlist"],
        github: "https://github.com/xqube/animusdigital",
        live: "#"
    }
];
