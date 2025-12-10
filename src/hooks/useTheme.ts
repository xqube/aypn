import { useState, useEffect } from 'react';

interface ThemeOrigin {
    x: number;
    y: number;
}

interface UseThemeReturn {
    isDarkMode: boolean;
    toggleTheme: (e: React.MouseEvent) => void;
    themeOrigin: ThemeOrigin;
}

export const useTheme = (): UseThemeReturn => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    const [themeOrigin, setThemeOrigin] = useState<ThemeOrigin>({ x: 0, y: 0 });

    const toggleTheme = (e: React.MouseEvent): void => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        setThemeOrigin({ x, y });
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return { isDarkMode, toggleTheme, themeOrigin };
};
