import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import "../globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter"
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Header />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
