export const Badge = ({ children, className = '' }) => (
    <span className={`inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800/50 dark:text-indigo-300 ${className}`}>
        {children}
    </span>
);
