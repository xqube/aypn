import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../data';

export const Experience = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Experience <span className="text-indigo-600 dark:text-indigo-400">&</span> Education</h2>
                </div>

                <div className="relative border-l border-indigo-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900" />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.year}</span>
                            </div>
                            <div className="text-lg text-slate-700 dark:text-slate-400 font-medium mb-2">{exp.company}</div>
                            <p className="text-slate-600 dark:text-slate-500">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
