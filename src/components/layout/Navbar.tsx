import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '../ui';
import { NAV_LINKS } from '../../data';

interface NavbarProps {
    activeSection: string;
    isDarkMode: boolean;
    toggleTheme: (e: React.MouseEvent) => void;
}

export const Navbar = ({ activeSection, isDarkMode, toggleTheme }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const performScroll = () => {
            const element = document.querySelector(id);
            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: 'smooth'
                });
            }
        };

        if (isOpen) {
            setIsOpen(false);
            // Wait for menu close animation to complete
            setTimeout(performScroll, 300);
        } else {
            performScroll();
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div
                    onClick={() => scrollTo('#home')}
                    className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent cursor-pointer"
                >
                    AYPN<span className="text-slate-800 dark:text-slate-100"></span>.
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.href)}
                            className={`text-sm font-medium transition-colors hover:text-indigo-700 dark:hover:text-indigo-400 ${activeSection === link.href.substring(1) ? 'text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}
                        >
                            {link.name}
                        </button>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Button variant="primary" className="h-9 text-sm" onClick={() => scrollTo('#contact')}>
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center space-x-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="text-slate-800 dark:text-slate-300" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollTo(link.href)}
                                    className={`text-left text-lg font-medium ${activeSection === link.href.substring(1) ? 'text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
