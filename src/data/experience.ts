export interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
}

export const EXPERIENCE: Experience[] = [
    {
        year: "2024 - 2025",
        role: "Backend Developer",
        company: "Reway",
        description: "Architected robust backend infrastructure for browser extensions, managed AWS EC2 production environments, and engineered RESTful APIs for seamless cloud communication."
    },
    {
        year: "Dec 2023 - Jun 2024",
        role: "Full Stack Intern",
        company: "Brototype (Packapeer Academy)",
        description: "Completed intensive MERN stack bootcamp. Built full-stack applications with EJS, Node.js, and MongoDB, implementing secure token handling and industry best practices."
    },
    {
        year: "2018 - 2022",
        role: "B.Tech in Computer Science",
        company: "Pathanapuram College of Engineering",
        description: "Achieved comprehensive understanding of CS fundamentals. Engaged in practical sessions applying theoretical knowledge to real-world problems."
    }
];

export const CERTIFICATIONS: string[] = [
    "Architecting with Google Compute Engine (Coursera)",
    "AWS Academy Graduate - Cloud Foundations"
];
