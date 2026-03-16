import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Zap, Briefcase, TrendingUp, Lightbulb, ShieldCheck, Home, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ManifestoPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="scanline" />
      <div className="text-center space-y-6">
        <h1 className="text-primary font-code font-bold text-xs tracking-[0.6em] uppercase">Architectural Roadmap</h1>
        <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter uppercase">Manifesto</h2>
      </div>

      <div className="grid gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="glass-card bg-white/[0.02] border-white/5 p-12 space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <Zap className="w-8 h-8" />
              <h3 className="text-3xl font-headline font-bold uppercase">The Education Pillar</h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Education is a fundamental pillar of progress. However, the system is too sluggish for the current velocity of innovation. It provides a foundation, but it is no longer the sole guarantor of success.
              </p>
              <p>
                True education is defined by the mastery of knowledge paired with unshakable integrity. High academic performance should never excuse poor behavior.
              </p>
            </div>
          </Card>

          <Card className="glass-card bg-white/[0.02] border-white/5 p-12 space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <ShieldCheck className="w-8 h-8" />
              <h3 className="text-3xl font-headline font-bold uppercase">Character</h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Success without character is a hollow victory. I focus on becoming a complete individual: intelligence fueled by relentless consistency, and a character that remains professional regardless of external academic pressure.
              </p>
            </div>
          </Card>
        </div>

        <Card className="glass-card bg-primary/[0.03] border-primary/20 p-12 md:p-20 space-y-12">
          <div className="flex items-center gap-6 text-primary">
            <Briefcase className="w-10 h-10" />
            <h3 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">Stability Strategy</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-xl leading-relaxed font-light text-muted-foreground">
              <p>
                My roadmap is calculated. I will leverage formal education to secure professional stability at <strong className="text-primary">IOCL</strong>. This role will provide the essential security for my family and serve as the financial launchpad for my vision.
              </p>
              <div className="p-8 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-8">
                <TrendingUp className="w-10 h-10 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-primary uppercase text-xs tracking-widest mb-2">The 20% Directive</p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    Every month, I will allocate 20% of my salary directly into my AI company. This is a disciplined, financial roadmap to my eventual empire.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10 relative overflow-hidden group">
               <Lightbulb className="absolute -top-10 -right-10 w-40 h-40 text-primary/5 group-hover:text-primary/10 transition-all" />
               <h4 className="text-2xl font-headline font-bold uppercase mb-4 text-primary">Imagination & Institutionalism</h4>
               <p className="text-muted-foreground leading-relaxed">
                 Degrees like IIT are not prerequisites for AI Engineering. Imagination constructs the future. Talent and consistency are the true currencies.
               </p>
            </div>
          </div>
        </Card>

        <div className="py-24 text-center">
          <div className="inline-block relative">
            <Quote className="absolute -top-20 -left-20 w-40 h-40 text-primary/5 -z-10" />
            <p className="text-4xl md:text-7xl font-display font-bold text-primary italic neon-text px-4 leading-tight tracking-tighter">
              "Discipline is measured by consistency, obsession, and talent—not mental torture."
            </p>
          </div>
        </div>

        <div className="pt-24 flex flex-col items-center space-y-12">
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Return to Core</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-8 group">
              <div className="text-left">
                <p className="text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 00</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">Empire Core</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Home className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}