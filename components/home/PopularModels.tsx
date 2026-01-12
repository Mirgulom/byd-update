'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Gauge, Fuel, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { popularModels } from '@/lib/data/models';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PopularModels() {
    const t = useTranslations();

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
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {t('home.popularModels')}
                    </h2>
                    <Link href="/models">
                        <Button variant="outline">
                            {t('common.viewAll')}
                        </Button>
                    </Link>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-12"
                >
                    {popularModels.map((model) => (
                        <SwiperSlide key={model.id}>
                            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
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

                                <CardContent className="p-6 flex-1">
                                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 capitalize">{model.type}</p>

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

                                <CardFooter className="p-6 pt-0 mt-auto">
                                    <Link href={`/models/${model.id}`} className="w-full">
                                        <Button className="w-full" variant="outline">
                                            {t('common.learnMore')}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <button className="swiper-button-prev-custom bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors z-10 relative">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="swiper-button-next-custom bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors z-10 relative">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
