import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins ,Roboto  } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'], // Importamos os pesos normal (400) e negrito (700)
  variable: '--font-roboto', // Criamos a variável CSS --font-roboto
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['600', '700'], // Para títulos, geralmente usamos pesos maiores
    variable: '--font-poppins', // Criamos a variável CSS --font-poppins
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mecânica",
  description: "LandingPage da Mecânica do Zeca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poppins.variable} bg-white text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
