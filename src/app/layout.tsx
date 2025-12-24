import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nicholas Cannon',
    description: 'Nicholas Cannon software development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
