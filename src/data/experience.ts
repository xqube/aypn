export interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
    highlights?: string[];
}

export const EXPERIENCE: Experience[] = [
    {
        year: "2024 - Present",
        role: "Freelance Full Stack Developer",
        company: "Self-Employed",
        description: "Delivering end-to-end web solutions for clients worldwide, specializing in scalable backend systems and cloud infrastructure.",
        highlights: [
            "Built and deployed production applications handling 1M+ file operations on AWS/GCP",
            "Built a Telegram media streaming service with optimized HTTP range request handling",
            "Containerized applications with Docker and implemented CI/CD pipelines"
        ]
    },
    {
        year: "Dec 2023 - Jun 2024",
        role: "Full Stack Developer Intern",
        company: "Brototype (Packapeer Academy), Trivandrum",
        description: "Completed intensive 6-month industry bootcamp focused on MERN stack under expert mentorship.",
        highlights: [
            "Built 4+ production-ready full-stack applications with Node.js, Express, and MongoDB",
            "Engineered e-commerce platform with PayPal payments and RESTful API architecture",
            "Implemented JWT token management, input sanitization, and rate limiting",
            "Collaborated in Agile environment with daily standups and code reviews"
        ]
    },
    {
        year: "2018 - 2022",
        role: "B.Tech in Computer Science",
        company: "Pathanapuram College of Engineering, Kerala",
        description: "Core coursework in Data Structures, Algorithms, Database Management, and Computer Networks.",
        highlights: [
            "Developed academic projects applying theoretical concepts to real-world solutions",
            "Gained comprehensive understanding of OS, networking, and software engineering"
        ]
    }
];

export const CERTIFICATIONS: string[] = [
    "Architecting with Google Compute Engine (Coursera)",
    "AWS Academy Graduate - Cloud Foundations"
];
