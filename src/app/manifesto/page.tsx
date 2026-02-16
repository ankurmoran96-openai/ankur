
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Flame, ShieldAlert, Cpu, Trophy, Brain, User, Music, Zap, Briefcase, TrendingUp, Lightbulb } from 'lucide-react';
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
        {/* The Education Perspective */}
        <Card className="glass-card border-primary/20 group">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Zap className="w-6 h-6 animate-pulse" />
              <h3 className="text-xl md:text-3xl font-headline font-bold">THE SPEED OF LEARNING</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                I don't think education is a curse. It is important, but it is too slow and outdated for the world we live in now. The system needs to change because it can't keep up with the speed of AI. 
              </p>
              <p>
                While I struggle with traditional studies and feel isolated when others pass easily, I am aware of my own path. I am not failing at life; I am just moving at a different frequency. 
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Imagination vs Education */}
        <Card className="glass-card border-primary/20 group">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-xl md:text-3xl font-headline font-bold">IMAGINATION IS SUPREME</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                Education provides the foundation, but **imagination builds the future.** Without imagination, we are just repeating what has already been done. 
              </p>
              <p>
                Many people think you need an elite degree like an IIT/JEE score to be an AI Engineer. That is a myth. In this generation, your talent and your consistency are what really speak. Excellence cannot be hidden behind a missing degree.
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
                My plan is calculated. I will use my education to secure a stable job at **IOCL**. This job will provide the essential security my home needs and the foundation for my real mission.
              </p>
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-primary uppercase text-sm tracking-widest">The 20% Rule</p>
                  <p className="text-muted-foreground italic mt-1">
                    Every month, I will invest 20% of my salary directly into my AI company. This isn't just a dream; it's a financial roadmap to my empire.
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
          
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-[10px] font-code tracking-widest text-muted-foreground uppercase">Main Target</p>
              <p className="text-sm font-bold font-headline uppercase">My Own Company</p>
              <p className="text-[9px] font-code text-primary/60 mt-1">BENCHMARK: OPENAI / GOOGLE</p>
            </div>
            <div className="w-px h-16 bg-primary/20" />
            <div className="text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-[10px] font-code tracking-widest text-muted-foreground uppercase">Fuel</p>
              <p className="text-sm font-bold font-headline">IMAGINATION</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-24 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h4 className="text-[10px] md:text-xs font-code font-bold text-primary tracking-[0.4em] uppercase whitespace-nowrap text-center">Return to Infrastructure</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/about">
                <User className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-code tracking-widest uppercase">The Profile</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/ai">
                <Cpu className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-code tracking-widest uppercase">Neural Lab</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/music">
                <Music className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-code tracking-widest uppercase">Vocal Journey</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
