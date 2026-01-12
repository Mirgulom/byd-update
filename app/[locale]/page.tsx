import Hero from '@/components/home/Hero';
import PopularModels from '@/components/home/PopularModels';
import WhyBYD from '@/components/home/WhyBYD';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
    return (
        <div className="pt-20">
            <Hero />
            <PopularModels />
            <WhyBYD />
            <CTASection />
        </div>
    );
}
