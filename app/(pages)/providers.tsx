"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ReactQueryClientProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const ReactQueryClientProvider = ({ children }: ReactQueryClientProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
