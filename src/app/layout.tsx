
import type {Metadata} from 'next';
import './globals.css';
import { GeometricBackground } from '@/components/GeometricBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Ankur Moran | Building My Empire",
  description: "Portfolio of Ankur Moran, AI/ML enthusiast and musician building the future of intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground min-h-screen">
        <GeometricBackground />
        <Navigation />
        <main className="relative z-10 min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
