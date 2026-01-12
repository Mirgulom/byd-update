'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Company */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.about')}</h3>
                        <div className="text-2xl font-bold mb-4">BYD</div>
                        <p className="text-gray-400 text-sm">
                            Build Your Dreams - ведущий производитель электромобилей и гибридных автомобилей.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/models" className="text-gray-400 hover:text-white transition-colors">
                                    {t('nav.models')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    {t('nav.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/test-drive" className="text-gray-400 hover:text-white transition-colors">
                                    {t('nav.testDrive')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                                    {t('nav.service')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.contactInfo')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    Ташкент, ул. Мустакиллик, 1
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href="tel:+998901234567" className="text-gray-400 hover:text-white transition-colors">
                                    +998 90 123-45-67
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href="mailto:info@byd.uz" className="text-gray-400 hover:text-white transition-colors">
                                    info@byd.uz
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.social')}</h3>
                        <div className="flex gap-3 mb-6">
                            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-primary transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>

                        <h4 className="font-semibold mb-2">{t('footer.newsletter')}</h4>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-slate-800 border-slate-700"
                            />
                            <Button className="bg-primary hover:bg-primary/90">
                                <Mail className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
