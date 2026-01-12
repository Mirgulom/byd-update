'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
    {
        id: 1,
        model: 'BYD Seal',
        description: 'Premium electric sedan with cutting-edge technology',
        price: '450,000,000',
        image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1920&h=1080&fit=crop',
    },
    {
        id: 2,
        model: 'BYD Tang',
        description: 'Powerful 7-seater SUV with hybrid technology',
        price: '550,000,000',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop',
    },
    {
        id: 3,
        model: 'BYD Han',
        description: 'Luxury flagship sedan with premium comfort',
        price: '520,000,000',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop',
    },
];

export default function Hero() {
    const t = useTranslations();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        'absolute inset-0 transition-opacity duration-1000',
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                                {slide.model}
                            </h1>
                            <p className="text-xl md:text-2xl mb-4 text-gray-200">
                                {slide.description}
                            </p>
                            <div className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                                {t('common.from')} {slide.price} {t('common.currency')}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                                    {t('common.learnMore')}
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
                                    {t('common.bookTestDrive')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                            'h-2 rounded-full transition-all',
                            index === currentSlide ? 'w-12 bg-primary' : 'w-2 bg-white/50'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
