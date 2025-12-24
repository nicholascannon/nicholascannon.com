import { SocialHud } from '@/components/social-hud';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nicholas Cannon',
    description: 'Nicholas Cannon software development',
};

export default function Home() {
    return (
        <>
            <SocialHud />

            <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
                <h1 className="text-2xl font-bold">Coming soon...</h1>
            </div>
        </>
    );
}
