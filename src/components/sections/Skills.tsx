import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layout, Server, Database, Terminal } from 'lucide-react';
import { Card, Badge } from '../ui';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { SKILLS } from '../../data';

export const Skills = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getIcon = (category: string) => {
        switch (category) {
            case 'Frontend': return <Layout className="text-indigo-600 dark:text-indigo-400" size={32} />;
            case 'Backend': return <Server className="text-indigo-600 dark:text-indigo-400" size={32} />;
            case 'Database': return <Database className="text-indigo-600 dark:text-indigo-400" size={32} />;
            default: return <Terminal className="text-indigo-600 dark:text-indigo-400" size={32} />;
        }
    };

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">A comprehensive toolkit spanning full-stack development, cloud infrastructure, and DevOps tools.</p>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <motion.div key={category} variants={fadeInUp}>
                            <Card className="h-full p-6 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 transition-all duration-300 group">
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300 mb-4 text-indigo-600 dark:text-indigo-400">
                                        {getIcon(category)}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{category}</h3>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2">
                                    {skills.map((skill) => (
                                        <Badge
                                            key={skill.name}
                                            className="bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors py-1.5 px-3 text-sm shadow-sm dark:shadow-none flex items-center gap-2"
                                        >
                                            <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
