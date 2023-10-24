'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </NextUIProvider>
    )
}