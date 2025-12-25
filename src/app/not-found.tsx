import type { Metadata } from 'next';
import Link from 'next/link';
import { SocialHud } from '@/components/social-hud';

export const metadata: Metadata = {
    title: 'Not found!',
    description: 'Sorry this page could not be found!',
};

export default function NotFound() {
    return (
        <>
            <SocialHud />

            <main className="flex flex-col justify-center items-center min-h-screen min-w-full">
                <div>
                    <h2 className="text-2xl font-bold">Page not found</h2>
                    <p>
                        Go back{' '}
                        <Link href="/" className="underline">
                            home
                        </Link>
                    </p>
                </div>
            </main>
        </>
    );
}
