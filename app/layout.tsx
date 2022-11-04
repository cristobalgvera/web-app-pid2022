import { Header } from "@components/shared";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Calculadora - Sistemas Estocásticos</title>
        <meta name="description" content="Calculadora para la asignatura de Sistemas Estocásticos" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-brand-base">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
