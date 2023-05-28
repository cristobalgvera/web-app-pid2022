"use client";

import { Header, Navbar } from "@components/shared";
import { NextLayoutProps } from "@utils/types";
import Providers from "./providers";
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
      <body className="h-screen bg-brand-base text-brand-text">
        <Providers>
          <header className="sticky top-0 z-50 border-b-2 border-primary-400">
            <Header />
          </header>
          <Navbar />
          <main className="relative flex flex-col gap-y-2 px-8 py-12">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
