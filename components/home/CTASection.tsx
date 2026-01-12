'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    const t = useTranslations();

    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {t('home.ctaTitle')}
                </h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                    Experience the future of driving. Book your test drive today and discover why BYD is leading the electric revolution.
                </p>
                <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                >
                    {t('home.ctaButton')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </section>
    );
}
