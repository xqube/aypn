import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
    <div className={`rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:shadow-none ${className}`}>
        {children}
    </div>
);
