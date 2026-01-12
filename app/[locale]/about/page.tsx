'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Globe, Users, Target } from 'lucide-react';

const milestones = [
    {
        year: '1995',
        title: 'Foundation',
        description: 'BYD was founded in Shenzhen, initially focusing on rechargeable batteries.',
    },
    {
        year: '2003',
        title: 'Automotive Entry',
        description: 'Entered the automotive industry by acquiring Tsinchuan Automobile Company.',
    },
    {
        year: '2008',
        title: 'First PHEV',
        description: 'Launched the F3DM, the world\'s first mass-produced plug-in hybrid vehicle.',
    },
    {
        year: '2020',
        title: 'Blade Battery',
        description: 'Introduced the revolutionary Blade Battery, setting new safety standards.',
    },
    {
        year: '2023',
        title: 'Global Leader',
        description: 'Became the world\'s leading manufacturer of new energy vehicles.',
    },
];

const values = [
    {
        icon: Globe,
        title: 'Sustainability',
        description: 'Committed to a greener future through technological innovation.',
    },
    {
        icon: Target,
        title: 'Innovation',
        description: 'Relentless pursuit of technological breakthroughs.',
    },
    {
        icon: Users,
        title: 'People First',
        description: 'Creating value for customers, employees, and society.',
    },
];

export default function AboutPage() {
    const t = useTranslations();

    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=800&fit=crop)' }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
                    <Badge className="w-fit mb-4">About Us</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Your Dreams</h1>
                    <p className="text-xl md:text-2xl max-w-2xl text-gray-200">
                        Pioneering the future of transportation with clean energy technologies.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Mission & Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <Card key={index} className="text-center p-6">
                                <CardContent className="pt-6">
                                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Timeline */}
                <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                <div className="relative border-l border-muted ml-4 md:ml-1/2 space-y-12">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-primary" />
                            <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2" />
                                <div className="md:w-1/2 mb-2 md:mb-0">
                                    <span className="text-primary font-bold text-lg block mb-1">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
