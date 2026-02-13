import { StarBackground } from '@/components/StarBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { AISection } from '@/components/AISection';
import { MusicSection } from '@/components/MusicSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <StarBackground />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <AISection />
        <MusicSection />
        <Footer />
      </div>
    </main>
  );
}
