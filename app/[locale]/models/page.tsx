'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Zap, Gauge, Fuel, SlidersHorizontal } from 'lucide-react';
import { allModels } from '@/lib/data/models';
import Link from 'next/link';

export default function ModelsPage() {
    const t = useTranslations();
    const [filteredModels, setFilteredModels] = useState(allModels);
    const [bodyType, setBodyType] = useState('all');
    const [engineType, setEngineType] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 600000000]);

    const applyFilters = () => {
        let filtered = [...allModels];

        if (bodyType !== 'all') {
            filtered = filtered.filter((m) => m.type === bodyType);
        }

        if (engineType !== 'all') {
            filtered = filtered.filter((m) => m.engineType === engineType);
        }

        filtered = filtered.filter(
            (m) => m.priceValue >= priceRange[0] && m.priceValue <= priceRange[1]
        );

        setFilteredModels(filtered);
    };

    const resetFilters = () => {
        setBodyType('all');
        setEngineType('all');
        setPriceRange([0, 600000000]);
        setFilteredModels(allModels);
    };

    const getBadgeVariant = (badge?: string) => {
        switch (badge) {
            case 'new':
                return 'default';
            case 'bestseller':
                return 'destructive';
            case 'electric':
                return 'secondary';
            default:
                return 'default';
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('models.title')}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <SlidersHorizontal className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-bold">Filters</h2>
                                </div>

                                <div className="space-y-6">
                                    {/* Body Type */}
                                    <div>
                                        <Label className="mb-2 block">{t('models.filters.bodyType')}</Label>
                                        <Select value={bodyType} onValueChange={setBodyType}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">{t('models.filters.all')}</SelectItem>
                                                <SelectItem value="sedan">{t('models.types.sedan')}</SelectItem>
                                                <SelectItem value="suv">{t('models.types.suv')}</SelectItem>
                                                <SelectItem value="crossover">{t('models.types.crossover')}</SelectItem>
                                                <SelectItem value="hatchback">{t('models.types.hatchback')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Engine Type */}
                                    <div>
                                        <Label className="mb-2 block">{t('models.filters.engineType')}</Label>
                                        <Select value={engineType} onValueChange={setEngineType}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">{t('models.filters.all')}</SelectItem>
                                                <SelectItem value="electric">{t('models.engineTypes.electric')}</SelectItem>
                                                <SelectItem value="hybrid">{t('models.engineTypes.hybrid')}</SelectItem>
                                                <SelectItem value="petrol">{t('models.engineTypes.petrol')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <Label className="mb-2 block">{t('models.filters.priceRange')}</Label>
                                        <Slider
                                            min={0}
                                            max={600000000}
                                            step={10000000}
                                            value={priceRange}
                                            onValueChange={setPriceRange}
                                            className="mb-2"
                                        />
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>{(priceRange[0] / 1000000).toFixed(0)}M</span>
                                            <span>{(priceRange[1] / 1000000).toFixed(0)}M</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button onClick={applyFilters} className="flex-1">
                                            {t('common.apply')}
                                        </Button>
                                        <Button onClick={resetFilters} variant="outline">
                                            {t('common.reset')}
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Models Grid */}
                    <div className="lg:col-span-3">
                        <div className="mb-4 text-muted-foreground">
                            {filteredModels.length} {filteredModels.length === 1 ? 'model' : 'models'} found
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredModels.map((model) => (
                                <Card
                                    key={model.id}
                                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {model.badge && (
                                            <div className="absolute top-4 right-4">
                                                <Badge variant={getBadgeVariant(model.badge)}>
                                                    {t(`models.badges.${model.badge}`)}
                                                </Badge>
                                            </div>
                                        )}
                                    </div>

                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4 capitalize">
                                            {t(`models.types.${model.type}`)}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Gauge className="h-4 w-4 text-primary" />
                                                <span>{model.specs.power}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Zap className="h-4 w-4 text-primary" />
                                                <span>0-100: {model.specs.acceleration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Fuel className="h-4 w-4 text-primary" />
                                                <span>{model.specs.range}</span>
                                            </div>
                                        </div>

                                        <div className="text-2xl font-bold text-primary mb-4">
                                            {t('common.from')} {model.price}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="p-6 pt-0">
                                        <Link href={`/models/${model.id}`} className="w-full">
                                            <Button className="w-full" variant="outline">
                                                {t('common.learnMore')}
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        {filteredModels.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground text-lg">No models found matching your filters.</p>
                                <Button onClick={resetFilters} className="mt-4">
                                    Reset Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
