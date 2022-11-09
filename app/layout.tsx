"use client";

import { Header, Navbar } from "@components/shared";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextLayoutProps } from "@utils/types";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }: NextLayoutProps) {
  return (
    <html lang="es">
      <head>
        <title>Calculadora - Sistemas Estocásticos</title>
        <meta
          name="description"
          content="Calculadora para la asignatura de Sistemas Estocásticos"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className="h-screen bg-brand-base">
          <header className="sticky top-0 z-50 border-b-2 border-primary-400">
            <Header />
          </header>
          <Navbar />
          <main className="relative flex flex-col gap-y-8 px-24 py-12 lg:px-16 lg:py-8">{children}</main>
        </body>
      </QueryClientProvider>
    </html>
  );
}
