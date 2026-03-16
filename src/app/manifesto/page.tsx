import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Zap, Briefcase, TrendingUp, Lightbulb, ShieldCheck, Home, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24 px-6 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center space-y-4">
        <h1 className="text-primary font-code font-bold text-xs md:text-sm tracking-[0.5em] uppercase">The Architecture of My Vision</h1>
        <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter">THE MANIFESTO</h2>
      </div>

      <div className="grid grid-cols-1 gap-10">
        <Card className="glass-card border-primary/20 bg-card/20">
          <CardContent className="p-10 md:p-14 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Zap className="w-7 h-7" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">The Education Pillar</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                Education is not a curse; it is a fundamental pillar of progress. However, the system remains too sluggish and outdated for the current velocity of innovation. While it provides a necessary foundation, it is no longer the sole guarantor of success in a world moving at the speed of intelligence.
              </p>
              <p>
                True education is defined by the mastery of core knowledge paired with unshakable integrity. High academic performance should never excuse poor behavior.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/20 bg-card/20">
          <CardContent className="p-10 md:p-14 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <ShieldCheck className="w-7 h-7" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">Character Integrity</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                Success without character is a hollow victory. I focus on becoming a complete individual: intelligence fueled by relentless consistency, and a character that remains professional regardless of external academic pressure.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/20 bg-card/20">
          <CardContent className="p-10 md:p-14 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Lightbulb className="w-7 h-7" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">Imagination vs Institutionalism</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light">
              <p>
                Education provides the blueprint, but **imagination constructs the future.** The belief that elite degrees like IIT are absolute prerequisites for AI Engineering is a persistent myth. 
              </p>
              <p>
                Talent and consistency are the true currencies. We can architect our own companies and earn roles at labs like Google or OpenAI without a traditional degree, but it requires a level of intelligence that I am currently mastering.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/40 bg-primary/5 shadow-[0_0_30px_rgba(255,59,59,0.05)]">
          <CardContent className="p-10 md:p-14 space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <Briefcase className="w-7 h-7" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase tracking-tight">The Stability Strategy</h3>
            </div>
            <div className="space-y-6 text-sm md:text-lg leading-relaxed font-light">
              <p>
                My roadmap is calculated. I will leverage formal education to secure professional stability at **IOCL**. This role will provide essential security for my family and serve as the financial launchpad for my vision.
              </p>
              <div className="p-8 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-6">
                <TrendingUp className="w-7 h-7 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-primary uppercase text-sm tracking-[0.2em]">The 20% Directive</p>
                  <p className="text-muted-foreground italic mt-2">
                    Every month, I will allocate 20% of my salary directly into my AI company. This is a disciplined, financial roadmap to my eventual empire.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="pt-8 text-center space-y-12">
          <div className="inline-block relative">
            <Quote className="absolute -top-12 -left-12 w-24 h-24 text-primary/10 -z-10" />
            <p className="text-2xl md:text-5xl font-display font-bold text-primary italic neon-text px-4 leading-tight">
              "Discipline is measured by consistency, obsession, and talent—not mental torture."
            </p>
          </div>
        </div>

        <div className="pt-24 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <div className="w-full flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h4 className="text-[10px] md:text-xs font-code font-bold text-primary tracking-[0.4em] uppercase whitespace-nowrap">Return to Core</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/" className="group relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Button size="lg" className="relative h-20 md:h-24 px-12 md:px-20 glass-card border-primary/30 group hover:border-primary/80 transition-all duration-500 flex items-center gap-6 overflow-hidden rounded-full">
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-code tracking-[0.3em] text-primary/60 uppercase">Node 00</span>
                <span className="text-xl md:text-3xl font-display font-bold tracking-tighter">EMPIRE CORE</span>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <Home className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </div>
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}