"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Session } from 'inspector'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
const Providers = ({children}:{
    children: React.ReactNode
}) => {
    const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
}

export default Providers
