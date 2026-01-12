'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Settings, Search, Car, Cog } from 'lucide-react';
import TestDrivePage from '../test-drive/page'; // Reuse the form logic effectively by adapting
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const serviceTypes = [
    {
        icon: Wrench,
        key: 'maintenance',
        title: 'Scheduled Maintenance',
        description: 'Regular service to keep your BYD running perfectly',
    },
    {
        icon: Settings,
        key: 'repair',
        title: 'General Repair',
        description: 'Diagnosis and repair of mechanical and electrical issues',
    },
    {
        icon: Search,
        key: 'diagnostics',
        title: 'Diagnostics',
        description: 'Computer diagnostics and system checks',
    },
    {
        icon: Car,
        key: 'bodywork',
        title: 'Body Shop',
        description: 'Paint and body repairs, detailing',
    },
    {
        icon: Cog,
        key: 'parts',
        title: 'Genuine Parts',
        description: 'Original BYD parts and accessories',
    },
];

const formSchema = z.object({
    name: z.string().min(2),
    phone: z.string().min(9),
    serviceType: z.string().min(1),
    carModel: z.string().min(2),
    description: z.string().optional(),
});

export default function ServicePage() {
    const t = useTranslations();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            serviceType: '',
            carModel: '',
            description: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success('Service request sent successfully!');
        form.reset();
    }

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-4">{t('nav.service')}</h1>
                <p className="text-muted-foreground mb-12 max-w-2xl">
                    Professional service and maintenance for your BYD vehicle. Our certified technicians use only original parts and advanced diagnostic equipment.
                </p>

                {/* Service Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {serviceTypes.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Card key={service.key} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Icon className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Booking Form */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Book Service Appointment</h2>
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t('common.name')}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t('common.phone')}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+998 90 123-45-67" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="serviceType"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Service Type</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select Service" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {serviceTypes.map((type) => (
                                                                <SelectItem key={type.key} value={type.key}>
                                                                    {type.title}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="carModel"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Car Model</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="e.g. BYD Song Plus" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Describe the issue or service needed..."
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full text-lg h-12">
                                        Book Appointment
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
