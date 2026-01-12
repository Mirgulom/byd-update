'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/lib/store/theme-store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const root = window.document.documentElement;
            root.classList.remove('light', 'dark');
            root.classList.add(theme);
        }
    }, [theme, mounted]);

    if (!mounted) {
        return <>{children}</>;
    }

    return <>{children}</>;
}
