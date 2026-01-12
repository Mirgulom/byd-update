'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { startTransition } from 'react';

const languages = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
];

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        startTransition(() => {
            // Replace the locale in the pathname
            // Assumes pathname starts with /locale/ or is just /
            const segments = pathname.split('/');
            segments[1] = newLocale;
            const newPath = segments.join('/');

            router.replace(newPath);
        });
    };

    const currentLanguage = languages.find((lang) => lang.code === locale);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                    <span className="text-lg">{currentLanguage?.flag}</span>
                    <span className="hidden sm:inline-block">{currentLanguage?.code.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="gap-2 cursor-pointer"
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
