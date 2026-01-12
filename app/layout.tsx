import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter"
});

export const metadata: Metadata = {
    title: "BYD - Official Dealer",
    description: "BYD automotive dealer - electric vehicles and hybrid cars",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
