import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, Button } from '../ui';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Open to New <br /><span className="text-indigo-600 dark:text-indigo-400">Opportunities</span></h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md">
                            I am actively seeking full-time roles as a Full-Stack or Backend Developer. With a strong foundation in scalable architecture and modern web technologies, I am ready to contribute effectively to your engineering team. Let's discuss how I can add value to your projects.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                                    <Mail className="text-indigo-600 dark:text-indigo-400" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Email</div>
                                    <a href="mailto:ayyappanpillai689@gmail.com" className="text-lg font-medium hover:text-indigo-500 transition-colors">ayyappanpillai689@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                                    <Phone className="text-indigo-600 dark:text-indigo-400" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Phone</div>
                                    <div className="text-lg font-medium">+91 7306459221</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                                    <MapPin className="text-indigo-600 dark:text-indigo-400" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Location</div>
                                    <div className="text-lg font-medium">Kottarakkara, India</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-slate-600 dark:text-slate-400 mb-4">Connect with me</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/xqube" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 transition-all shadow-sm dark:shadow-none">
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com/in/aypnpillai" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 transition-all shadow-sm dark:shadow-none">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Name</label>
                                        <input required type="text" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Recruiter / Hiring Manager" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
                                        <input required type="email" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="company@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Subject</label>
                                    <select className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors">
                                        <option>Job Opportunity</option>
                                        <option>Interview Request</option>
                                        <option>Project Inquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
                                    <textarea required rows={4} className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="We have an opening for a Full Stack Developer..." />
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base">
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : isSubmitted ? (
                                        <span className="flex items-center text-green-400">
                                            Message Sent!
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Send Message <Send className="ml-2 h-4 w-4" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
