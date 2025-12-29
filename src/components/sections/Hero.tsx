import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from '../ui';
import { fadeInUp, staggerContainer } from '../../lib/animations';

interface HeroSkill {
    name: string;
    icon: string;
    x: number;
    y: number;
}

// Featured skills to display in hero animation - key technologies recruiters should see
const HERO_SKILLS: HeroSkill[] = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', x: 220, y: 0 },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', x: 140, y: -190 },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', x: -140, y: -190 },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', x: -220, y: 0 },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', x: -140, y: 190 },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', x: 140, y: 190 },
];

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-12 md:pt-20 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-950 dark:to-slate-950">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-200/40 dark:bg-indigo-600/20 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-normal" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/40 dark:bg-cyan-600/10 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-normal" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-6"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-900/50 border border-indigo-100 dark:border-slate-800 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm dark:shadow-none">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Available for backend & full-stack roles</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                        Hi, I'm<br />
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Ayyappan Pillai
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
                        Results-driven Full-Stack Developer with hands-on experience building scalable web applications using the MERN stack. Deployed production-ready projects on AWS and GCP using Docker, Kubernetes, and CI/CD pipelines. Passionate about creating efficient, user-centric solutions with optimized performance and clean code architecture.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                        <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="h-12 px-8 text-base shadow-indigo-500/20 hover:shadow-indigo-500/30">
                            View Work
                        </Button>
                        <Button variant="secondary" className="h-12 px-8 text-base group border-slate-200 hover:border-indigo-200 dark:border-slate-700" onClick={() => window.open('/AyyappanPillai.pdf', '_blank')}>
                            <FileDown className="mr-2 h-4 w-4 group-hover:text-indigo-600 transition-colors" />
                            Resume
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-center space-x-6 pt-8">
                        <a href="https://github.com/xqube" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"><Github size={24} /></a>
                        <a href="https://linkedin.com/in/aypnpillai" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
                        <a href="mailto:ayyappanpillai689@gmail.com" className="text-slate-400 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"><Mail size={24} /></a>
                    </motion.div>
                </motion.div>

                {/* Tech Stack Animation - Desktop Only (side by side) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:flex justify-center items-center h-[600px]"
                >
                    {/* Central Hub - MERN Stack indicator */}
                    <div className="relative z-10">
                        <div className="w-44 h-44 bg-white/90 dark:bg-slate-900 rounded-full flex flex-col items-center justify-center border-4 border-white dark:border-slate-800 shadow-[0_0_80px_-15px_rgba(99,102,241,0.4)] dark:shadow-none relative z-10 backdrop-blur-sm">
                            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Full Stack</span>
                            {/* <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">Full Stack</span> */}
                        </div>
                        {/* Pulsing Effects */}
                        <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full animate-ping" />
                        <div className="absolute -inset-8 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full animate-pulse" />
                    </div>

                    {/* Orbiting Skill Icons */}
                    {HERO_SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="absolute p-4 bg-white/95 dark:bg-slate-800/95 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 z-20 backdrop-blur-sm flex flex-col items-center gap-1.5 group hover:scale-110 transition-transform cursor-default"
                            animate={{
                                y: [skill.y - 8, skill.y + 8, skill.y - 8],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3 + index * 0.5,
                                ease: "easeInOut",
                                delay: index * 0.3
                            }}
                            style={{
                                left: "50%",
                                top: "50%",
                                marginLeft: -40,
                                marginTop: -40,
                                x: skill.x,
                                y: skill.y
                            }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-14 h-14 object-contain"
                            />
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 opacity-80 group-hover:opacity-100">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}

                    {/* Connecting Lines (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10 stroke-indigo-400 dark:stroke-indigo-500" style={{ zIndex: 0 }}>
                        <circle cx="50%" cy="50%" r="130" fill="none" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                        <circle cx="50%" cy="50%" r="210" fill="none" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_30s_linear_infinite_reverse]" />
                    </svg>
                </motion.div>
            </div>

            {/* Tech Stack Animation - Mobile Only (background) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex md:hidden justify-center items-center pointer-events-none"
            >
                {/* Central Hub - MERN Stack indicator */}
                <div className="relative z-10">
                    <div className="w-36 h-36 bg-white/90 dark:bg-slate-900/80 rounded-full flex flex-col items-center justify-center border-4 border-white dark:border-slate-800">
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">MERN</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full Stack</span>
                    </div>
                    {/* Pulsing Effects */}
                    <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full animate-ping" />
                    <div className="absolute -inset-6 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full animate-pulse" />
                </div>

                {/* Orbiting Skill Icons - Smaller for mobile */}
                {HERO_SKILLS.map((skill, index) => (
                    <motion.div
                        key={`mobile-${skill.name}`}
                        className="absolute p-3 bg-white/90 dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-1"
                        animate={{
                            y: [skill.y * 0.8 - 5, skill.y * 0.8 + 5, skill.y * 0.8 - 5],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3 + index * 0.5,
                            ease: "easeInOut",
                            delay: index * 0.3
                        }}
                        style={{
                            left: "50%",
                            top: "50%",
                            marginLeft: -28,
                            marginTop: -28,
                            x: skill.x * 0.85,
                            y: skill.y * 0.8
                        }}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                        />
                        <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}

                {/* Connecting Lines (Decorative) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20 stroke-indigo-400 dark:stroke-indigo-500" style={{ zIndex: 0 }}>
                    <circle cx="50%" cy="50%" r="100" fill="none" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="50%" cy="50%" r="160" fill="none" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_30s_linear_infinite_reverse]" />
                </svg>
            </motion.div>
        </section>
    );
};
