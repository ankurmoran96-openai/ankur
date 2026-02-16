
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Flame, Cpu, Trophy, Brain, User, Music, Zap, Briefcase, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24 px-6 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center space-y-4">
        <h1 className="text-primary font-code font-bold text-xs md:text-sm tracking-[0.4em] uppercase">The Architecture of My Vision</h1>
        <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter">THE MANIFESTO</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {/* The Education Pillar */}
        <Card className="glass-card border-primary/20 group">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Zap className="w-6 h-6" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">The Education Pillar</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                I do not view education as a curse. It is a fundamental pillar of progress. However, the system is currently too sluggish and outdated for the velocity of the modern era. While it provides the necessary foundation, it is no longer a guaranteed ticket to success in a world moving at the speed of intelligence.
              </p>
              <p>
                True education is not just about the grades on a sheet. It is about the mastery of basic knowledge paired with the integrity of one's behavior.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Character vs Performance */}
        <Card className="glass-card border-primary/20 group">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">Integrity of Character</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                I have observed a disturbing trend where academic performance is used to excuse vulgarity and disrespect towards authority. Success without character is a hollow victory. Excellence should be defined by how one carries themselves, not just by how well they score on a test.
              </p>
              <p>
                My focus is on becoming a complete individual: high intelligence fueled by consistency, and a character that remains unshakable.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Imagination vs Education */}
        <Card className="glass-card border-primary/20 group">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">Imagination Over Limitation</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                Education provides the blueprint, but **imagination constructs the future.** The belief that elite degrees like IIT are absolute prerequisites for AI Engineering is a persistent myth. 
              </p>
              <p>
                Talent and relentless consistency are the true currencies. We can build our own companies and earn roles at labs like Google or OpenAI without a traditional degree, but it requires a level of intelligence and dedication that I am currently working to master.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Strategic Stability Plan (IOCL) */}
        <Card className="glass-card border-primary/40 bg-primary/5">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase tracking-tight">The Stability Strategy</h3>
            </div>
            <div className="space-y-6 text-sm md:text-lg leading-relaxed font-light">
              <p>
                My roadmap is calculated. I will leverage formal education to secure professional stability at **IOCL**. This role will provide the essential security my family requires and serve as the financial launchpad for my mission.
              </p>
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-primary uppercase text-sm tracking-widest">The 20% Directive</p>
                  <p className="text-muted-foreground italic mt-1">
                    Every month, I will allocate 20% of my salary directly into my AI company. This is a disciplined, financial roadmap to my eventual empire.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Quote Section */}
        <div className="pt-8 text-center space-y-12">
          <div className="inline-block relative">
            <Quote className="absolute -top-10 -left-10 w-20 h-20 text-primary/10 -z-10" />
            <p className="text-2xl md:text-5xl font-display font-bold text-primary italic neon-text px-4 leading-tight">
              "Discipline is measured by consistency, obsession, and talent—not mental torture."
            </p>
          </div>
        </div>

        {/* Navigation Traversal */}
        <div className="pt-24 space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h4 className="text-[10px] md:text-xs font-code font-bold text-primary tracking-[0.4em] uppercase whitespace-nowrap">End of Manifesto</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/about">
                <User className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-code tracking-widest uppercase">The Profile</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/ai">
                <Cpu className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-code tracking-widest uppercase">Neural Lab</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/music">
                <Music className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-code tracking-widest uppercase">Vocal Journey</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
