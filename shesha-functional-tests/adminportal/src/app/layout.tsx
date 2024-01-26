import React from 'react';
import { Suspense } from 'react';
import { AppProvider } from './app-provider';
import { unstable_noStore as noStore } from 'next/cache';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    noStore();
    const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:21021';

    return (
        <html lang="en">
            <body>
                <Suspense>
                    <AppProvider backendUrl={backendUrl}>
                        {children}
                    </AppProvider>
                </Suspense>
            </body>
        </html>
    );
};