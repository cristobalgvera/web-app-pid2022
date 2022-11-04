"use client";

import { Navbar, Header, useHeaderMenuStore } from "@components/shared";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      <body className="h-screen bg-brand-base">
        <header className="sticky top-0 z-50 border-b-2 border-primary-400">
          <Header />
        </header>
        <Navbar />
        <main className="relative h-full">{children}</main>
      </body>
    </html>
  );
}
