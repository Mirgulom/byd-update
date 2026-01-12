'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const dealerCenters = [
    {
        name: 'BYD Sergeli Center',
        address: 'Tashkent, Sergeli district, Yangi Sergeli street, 1',
        phone: '+998 90 123-45-67',
        coords: { lat: 41.2234, lng: 69.2345 },
    },
    {
        name: 'BYD Yunusabad Center',
        address: 'Tashkent, Yunusabad district, Amir Temur avenue, 120',
        phone: '+998 90 987-65-43',
        coords: { lat: 41.3456, lng: 69.2890 },
    },
];

export default function ContactsPage() {
    const t = useTranslations();

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-12">{t('nav.contacts')}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Head Office</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <div className="font-medium">Address</div>
                                        <div className="text-sm text-muted-foreground">
                                            Tashkent, Mirabad district, Nukus street, 25
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <div className="font-medium">Phone</div>
                                        <a href="tel:+998901234567" className="text-sm text-muted-foreground hover:text-primary">
                                            +998 90 123-45-67
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <div className="font-medium">Email</div>
                                        <a href="mailto:info@byd.uz" className="text-sm text-muted-foreground hover:text-primary">
                                            info@byd.uz
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <div className="font-medium">Working Hours</div>
                                        <div className="text-sm text-muted-foreground">
                                            Mon - Sat: 09:00 - 20:00<br />
                                            Sun: 10:00 - 18:00
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feedback Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <Input placeholder="Your Name" />
                                    <Input placeholder="Phone Number" />
                                    <Textarea placeholder="Message" className="resize-none" />
                                    <Button className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Map & Dealer List */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map Placeholder */}
                        <div className="bg-muted rounded-xl h-[400px] flex items-center justify-center relative overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 transition-all duration-500"
                                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop)' }}
                            />
                            <div className="relative z-10 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                                <p className="font-medium">Interactive Map Integration</p>
                                <p className="text-sm text-muted-foreground">(Google Maps / Yandex Maps)</p>
                            </div>
                        </div>

                        {/* Dealer Centers List */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Our Dealerships</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {dealerCenters.map((center, index) => (
                                    <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-2">{center.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-4">{center.address}</p>
                                            <Button variant="outline" size="sm" className="w-full">
                                                View on Map
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
