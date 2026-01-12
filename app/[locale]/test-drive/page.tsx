'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
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
import { Checkbox } from '@/components/ui/checkbox';
import { allModels } from '@/lib/data/models';
import { toast } from 'sonner';

const formSchema = z.object({
    name: z.string().min(2, 'Name is too short'),
    phone: z.string().min(9, 'Phone number is too short'),
    email: z.string().email('Invalid email'),
    modelId: z.string().min(1, 'Please select a model'),
    date: z.string().min(1, 'Please select a date'),
    comment: z.string().optional(),
    agreement: z.boolean().refine((val) => val === true, 'You must agree to the policy'),
});

export default function TestDrivePage() {
    const t = useTranslations();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            modelId: '',
            date: '',
            comment: '',
            agreement: false,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success('Test drive request sent successfully!');
        form.reset();
    }

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{t('nav.testDrive')}</h1>
                    <p className="text-muted-foreground mb-8">
                        Experience the future of driving. Book your test drive today.
                    </p>

                    <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="modelId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('nav.models')}</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a model" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {allModels.map((model) => (
                                                        <SelectItem key={model.id} value={model.id}>
                                                            {model.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

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
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('common.email')}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Date</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Comments (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Any specific requirements?"
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="agreement"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    I agree to the privacy policy and processing of my personal data
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full text-lg h-12">
                                    {t('common.bookTestDrive')}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
