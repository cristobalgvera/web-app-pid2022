"use client";

import { ReactQueryClientProvider } from "./providers";
import { Header, Navbar } from "@components/shared";
import { NextLayoutProps } from "@utils/types";
import "./globals.css";

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
      <ReactQueryClientProvider>
        <body className="h-screen bg-brand-base">
          <header className="sticky top-0 z-50 border-b-2 border-primary-400">
            <Header />
          </header>
          <Navbar />
          <main className="relative flex flex-col gap-y-8 px-24 py-12 lg:px-16 lg:py-8">{children}</main>
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
