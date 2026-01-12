'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, Phone, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { cn } from '@/lib/utils';
import { allModels } from '@/lib/data/models';

export default function Header() {
    const t = useTranslations();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Show first 5 models in dropdown
    const featuredModels = allModels.slice(0, 5);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                'bg-slate-900 text-white',
                isScrolled && 'backdrop-blur-md bg-slate-900/95 shadow-lg'
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="text-2xl font-bold">
                            <span className="text-white">BYD</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        {t('nav.home')}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800">
                                    {t('nav.models')}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4">
                                        <div className="space-y-2">
                                            {featuredModels.map((model) => (
                                                <Link
                                                    key={model.id}
                                                    href={`/models/${model.id}`}
                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                                                >
                                                    <img
                                                        src={model.image}
                                                        alt={model.name}
                                                        className="w-20 h-14 object-cover rounded"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="font-medium group-hover:text-primary transition-colors">
                                                            {model.name}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {t('common.from')} {model.price}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                            <Link
                                                href="/models"
                                                className="flex items-center justify-between p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
                                            >
                                                <span>{t('nav.viewAllModels')}</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        {t('nav.about')}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/test-drive" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        {t('nav.testDrive')}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/service" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        {t('nav.service')}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/calculator" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        {t('nav.calculator')}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contacts" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        {t('nav.contacts')}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right side actions */}
                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ThemeSwitcher />

                        <a href="tel:+998901234567" className="hidden md:flex items-center gap-2 text-sm hover:text-primary transition-colors">
                            <Phone className="h-4 w-4" />
                            <span>+998 90 123-45-67</span>
                        </a>

                        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
                            {t('common.sendRequest')}
                        </Button>

                        {/* Mobile menu button */}
                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4 mt-8">
                                    <Link href="/" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.home')}
                                    </Link>
                                    <Link href="/models" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.models')}
                                    </Link>
                                    <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.about')}
                                    </Link>
                                    <Link href="/test-drive" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.testDrive')}
                                    </Link>
                                    <Link href="/service" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.service')}
                                    </Link>
                                    <Link href="/calculator" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.calculator')}
                                    </Link>
                                    <Link href="/contacts" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                        {t('nav.contacts')}
                                    </Link>
                                    <Button className="mt-4 bg-primary hover:bg-primary/90">
                                        {t('common.sendRequest')}
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
