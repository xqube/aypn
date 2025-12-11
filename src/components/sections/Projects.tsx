import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import { Card, Badge, Button } from '../ui';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { PROJECTS } from '../../data';

export const Projects = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const selectedProject = PROJECTS.find(p => p.id === selectedId);

    return (
        <section id="projects" className="py-24 relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span></h2>
                        <p className="text-slate-600 dark:text-slate-400">Showcasing scalability, performance, and full-stack architecture.</p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex" onClick={() => window.open('https://github.com/xqube', '_blank')}>View Github <ExternalLink className="ml-2 h-4 w-4" /></Button>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp} layoutId={`card-${project.id}`}>
                            <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-indigo-500/10 transition-all border-slate-200 dark:border-slate-800">
                                <div
                                    className="h-48 w-full relative group cursor-pointer overflow-hidden"
                                    onClick={() => setSelectedId(project.id)}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">View Details</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 3).map(t => (
                                            <Badge key={t} className="text-[10px] bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{t}</Badge>
                                        ))}
                                        {project.tech.length > 3 && <Badge className="text-[10px] bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">+{project.tech.length - 3}</Badge>}
                                    </div>

                                    <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center text-sm">
                                            <Github size={16} className="mr-2" /> Code
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="h-64 w-full relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                                    <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 max-w-full">
                                        {selectedProject.tech.map(t => <Badge key={t} className="bg-white/20 text-white border-white/20 backdrop-blur-sm text-[10px] md:text-xs">{t}</Badge>)}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Overview</h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{selectedProject.description}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Key Features</h4>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                                                    <ChevronRight size={16} className="text-indigo-500 mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button variant="secondary" onClick={() => window.open(selectedProject.github, '_blank')} className="flex-1">
                                            <Github className="mr-2 h-4 w-4" /> View Source Code
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
