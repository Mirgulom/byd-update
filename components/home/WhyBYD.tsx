'use client';

import { useTranslations } from 'next-intl';
import { Shield, Award, Users, Zap, Wrench, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const advantages = [
    {
        icon: Shield,
        title: 'Quality Guarantee',
        description: 'Premium quality with international standards',
    },
    {
        icon: Zap,
        title: 'Electric Technology',
        description: 'Leading in electric and hybrid vehicles',
    },
    {
        icon: Award,
        title: 'Awards & Recognition',
        description: 'Multiple international automotive awards',
    },
    {
        icon: Users,
        title: 'Customer Service',
        description: '24/7 support and assistance',
    },
    {
        icon: Wrench,
        title: 'Service Network',
        description: 'Extensive service centers nationwide',
    },
    {
        icon: Globe,
        title: 'Global Presence',
        description: 'Trusted by millions worldwide',
    },
];

const stats = [
    { value: '28+', label: 'Years in Market' },
    { value: '500K+', label: 'Cars Sold' },
    { value: '15+', label: 'Models Available' },
    { value: '50+', label: 'Service Centers' },
];

export default function WhyBYD() {
    const t = useTranslations();

    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    {t('home.whyByd')}
                </h2>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {advantages.map((advantage, index) => {
                        const Icon = advantage.icon;
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardContent className="p-6">
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                                    <p className="text-muted-foreground">{advantage.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
