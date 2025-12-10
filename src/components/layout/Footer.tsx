export const Footer = () => (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-indigo-100 dark:border-slate-900 py-12 text-center relative z-10">
        <div className="container mx-auto px-6">
            <div className="mb-6 flex justify-center space-x-6 text-slate-600 dark:text-slate-400">
                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
                <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
                <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
                <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
            </div>
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Ayyappan Pillai. Built with <span className="text-indigo-600 dark:text-indigo-400">React</span> & <span className="text-indigo-600 dark:text-indigo-400">Tailwind</span>.
            </p>
        </div>
    </footer>
);
