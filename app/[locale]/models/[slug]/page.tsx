'use client';

import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { allModels } from '@/lib/data/models';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    CheckCircle2,
    Zap,
    Gauge,
    Fuel,
    Battery,
    ChevronRight,
    Maximize2
} from 'lucide-react';
import Link from 'next/link';

export default function ModelPage({ params }: { params: { slug: string } }) {
    const t = useTranslations();
    const model = allModels.find((m) => m.id === params.slug);

    if (!model) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${model.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-24 text-white">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <Badge className="w-fit mb-4 text-base px-4 py-1">
                            {model.year} Model
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">{model.name}</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
                            {model.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[120px]">
                                <div className="text-sm text-gray-300">Power</div>
                                <div className="text-2xl font-bold">{model.specs.power}</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[120px]">
                                <div className="text-sm text-gray-300">0-100 km/h</div>
                                <div className="text-2xl font-bold">{model.specs.acceleration}</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[120px]">
                                <div className="text-sm text-gray-300">Range</div>
                                <div className="text-2xl font-bold">{model.specs.range}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="w-full justify-start h-12 mb-8 bg-transparent p-0 border-b rounded-none">
                                <TabsTrigger
                                    value="overview"
                                    className="text-lg px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                                >
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger
                                    value="specs"
                                    className="text-lg px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                                >
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger
                                    value="gallery"
                                    className="text-lg px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                                >
                                    Gallery
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
                                <div className="prose dark:prose-invert max-w-none">
                                    <h3>Experience Innovation</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        The {model.name} sets a new standard for {model.engineType} vehicles.
                                        Merging premium design with cutting-edge technology, it offers an
                                        unparalleled driving experience.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-shadow">
                                        <Battery className="h-8 w-8 text-primary mb-4" />
                                        <h4 className="text-xl font-bold mb-2">Blade Battery</h4>
                                        <p className="text-muted-foreground">
                                            Powered by BYD's ultra-safe Blade Battery technology with {model.specs.battery} capacity.
                                        </p>
                                    </div>
                                    <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-shadow">
                                        <Zap className="h-8 w-8 text-primary mb-4" />
                                        <h4 className="text-xl font-bold mb-2">Fast Charging</h4>
                                        <p className="text-muted-foreground">
                                            30% to 80% charge in just 30 minutes with DC fast charging support.
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="animate-in fade-in duration-500">
                                <div className="border rounded-xl overflow-hidden">
                                    <table className="w-full">
                                        <tbody className="divide-y">
                                            <tr className="bg-muted/50 hover:bg-muted/80 transition-colors">
                                                <td className="p-4 font-medium">Engine Type</td>
                                                <td className="p-4 capitalize">{model.engineType}</td>
                                            </tr>
                                            <tr className="hover:bg-muted/50 transition-colors">
                                                <td className="p-4 font-medium">Body Type</td>
                                                <td className="p-4 capitalize">{model.type}</td>
                                            </tr>
                                            <tr className="bg-muted/50 hover:bg-muted/80 transition-colors">
                                                <td className="p-4 font-medium">Battery Capacity</td>
                                                <td className="p-4">{model.specs.battery}</td>
                                            </tr>
                                            <tr className="hover:bg-muted/50 transition-colors">
                                                <td className="p-4 font-medium">Range (NEDC)</td>
                                                <td className="p-4">{model.specs.range}</td>
                                            </tr>
                                            <tr className="bg-muted/50 hover:bg-muted/80 transition-colors">
                                                <td className="p-4 font-medium">0-100 km/h</td>
                                                <td className="p-4">{model.specs.acceleration}</td>
                                            </tr>
                                            <tr className="hover:bg-muted/50 transition-colors">
                                                <td className="p-4 font-medium">Max Power</td>
                                                <td className="p-4">{model.specs.power}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabsContent>

                            <TabsContent value="gallery" className="animate-in fade-in duration-500">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 relative aspect-video rounded-xl overflow-hidden group">
                                        <img
                                            src={model.image}
                                            alt="Main view"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                            <Maximize2 className="h-10 w-10 text-white" />
                                        </div>
                                    </div>
                                    {/* Placeholders for gallery */}
                                    <div className="aspect-video rounded-xl overflow-hidden bg-muted relative group">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Gallery Image 2</div>
                                    </div>
                                    <div className="aspect-video rounded-xl overflow-hidden bg-muted relative group">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Gallery Image 3</div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-6 border rounded-xl bg-card shadow-lg">
                                <div className="mb-6">
                                    <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                                    <div className="text-4xl font-bold text-primary">
                                        {model.price} {t('common.currency')}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Link href="/test-drive" className="w-full block">
                                        <Button className="w-full h-12 text-lg shadow-lg shadow-primary/20">
                                            {t('common.bookTestDrive')}
                                        </Button>
                                    </Link>
                                    <Link href="/calculator" className="w-full block">
                                        <Button variant="outline" className="w-full h-12 border-primary/50 hover:bg-primary/5">
                                            Credit Calculator
                                        </Button>
                                    </Link>
                                </div>

                                <div className="mt-6 pt-6 border-t space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        <span>5 Year Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        <span>Official Service Support</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        <span>Trade-in Available</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted p-6 rounded-xl">
                                <h4 className="font-bold mb-2">Need Help?</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Our specialists are ready to answer all your questions.
                                </p>
                                <div className="text-lg font-bold text-primary">
                                    +998 90 123-45-67
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
