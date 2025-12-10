import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { CERTIFICATIONS } from '../../data';

export const About = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Tech Terminal */}
                    <motion.div variants={fadeInUp} className="relative">
                        <div className="w-full aspect-square bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-300/50 dark:shadow-none font-mono text-sm relative">
                            {/* Terminal Header */}
                            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-slate-500 text-xs">developer@portfolio:~/about</span>
                            </div>
                            {/* Terminal Body */}
                            <div className="p-6 text-slate-300 space-y-4">
                                <div>
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">whoami</span>
                                </div>
                                <div className="pl-4 border-l-2 border-slate-700/50">
                                    <p><span className="text-purple-400">const</span> <span className="text-yellow-200">developer</span> = {'{'}</p>
                                    <p className="pl-4">name: <span className="text-green-300">"U R Ayyappan Pillai"</span>,</p>
                                    <p className="pl-4">role: <span className="text-green-300">"Full Stack Engineer"</span>,</p>
                                    <p className="pl-4">stack: [<span className="text-green-300">"MERN"</span>, <span className="text-green-300">"Docker"</span>, <span className="text-green-300">"AWS"</span>],</p>
                                    <p className="pl-4">passion: <span className="text-green-300">"Scalable Architecture"</span>,</p>
                                    <p className="pl-4">status: <span className="text-green-300">"Open to Opportunities"</span></p>
                                    <p>{'};'}</p>
                                </div>
                                <div>
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">cat skills.json</span>
                                </div>
                                <div className="pl-4 text-xs text-slate-400 grid grid-cols-2 gap-2">
                                    <div>• Backend System Design</div>
                                    <div>• Database Optimization</div>
                                    <div>• API Development</div>
                                    <div>• Cloud Infrastructure</div>
                                </div>
                                <div className="animate-pulse">
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="w-2 h-4 bg-slate-400 inline-block align-middle ml-1" />
                                </div>
                            </div>
                        </div>
                        {/* Decorative Background for Terminal */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-100 dark:border-indigo-500/30 rounded-xl -z-10" />
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-100 dark:border-cyan-500/30 rounded-xl -z-10" />
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            I am a Full-Stack Developer with a B.Tech in Computer Science from Pathanapuram College of Engineering. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong passion for building backend infrastructure and scalable systems.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            My expertise extends to cloud deployment on AWS and Google Cloud, containerization with Docker, and developing efficient RESTful APIs. I have experience working with diverse technologies including TypeScript, Python, and Redis, always striving to implement industry best practices.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="space-y-3 pt-2">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <Award size={18} className="text-indigo-600 dark:text-indigo-400" /> Certifications
                            </h3>
                            <ul className="space-y-2">
                                {CERTIFICATIONS.map((cert) => (
                                    <li key={cert} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        <span className="text-sm font-medium">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
