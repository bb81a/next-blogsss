import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Separator} from "@/components/ui/separator";
import Header from "@/components/header";
import siteData from "@/blog.config";
import ProviderTheme from "@/provider/provider-theme";
import Title from "@/components/title";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={'min-h-screen font-mono'}>
        <ProviderTheme>
            <Header/>
            <Separator/>
            <main className={'container md:my-12 my-8'}>
                <div className={'prose md:prose-lg min-w-full w-full dark:prose-invert'}>
                    <Title/>
                    {children}
                </div>
            </main>
        </ProviderTheme>
        </body>
        </html>
    );
}
