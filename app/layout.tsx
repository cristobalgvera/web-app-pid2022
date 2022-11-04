"use client";

import { Drawer, Header, useHeaderMenuStore } from "@components/shared";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isMenuOpened = useHeaderMenuStore((state) => state.isMenuOpened);

  return (
    <html lang="es">
      <head>
        <title>Calculadora - Sistemas Estocásticos</title>
        <meta name="description" content="Calculadora para la asignatura de Sistemas Estocásticos" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="h-screen bg-brand-base">
        <header className="sticky top-0 z-50">
          <Header />
        </header>
        {isMenuOpened && (
          <nav>
            <Drawer />
          </nav>
        )}
        <main className="relative h-full">{children}</main>
      </body>
    </html>
  );
}
