import { useState, useEffect } from 'react';

const DEFAULT_SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'] as const;

export const useScrollSpy = (sectionIds: readonly string[] = DEFAULT_SECTIONS): string => {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sectionIds) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
};
