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
        title: "TgStreamer - Media Streaming Bot",
        description: "Telegram bot generating direct HTTP streaming URLs for media files. Stream videos directly to VLC, browsers, or any media player with full seeking support and optimized range request handling.",
        image: "./images/tgstreamer.png",
        tech: ["TypeScript", "Node.js", "mtcute", "Winston", "Zod"],
        features: ["Direct Streaming", "Range Requests", "Multi-format Support", "User Authorization", "Rate Limiting"],
        github: "https://github.com/xqube/tgstreamer",
        live: "#"
    },
    {
        id: 3,
        title: "AnimusDigital - E-Commerce",
        description: "Full-featured e-commerce platform with user/admin dashboards, PayPal payments, Twilio OTP verification, and sales analytics. Deployed on AWS EC2 with Nginx, SSL certificates, and automated backups.",
        image: "./images/ecommerce.png",
        tech: ["Node.js", "Express", "MongoDB", "EJS", "AWS EC2", "Nginx"],
        features: ["PayPal & Twilio", "Sales Analytics", "Admin Dashboard", "SSL & Auto Backups", "Cart & Wishlist"],
        github: "https://github.com/xqube/animusdigital",
        live: "#"
    }
];

