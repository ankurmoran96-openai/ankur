
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Flame, ShieldAlert, Cpu, Trophy, Brain, User, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24 px-6 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center space-y-4">
        <h1 className="text-primary font-code font-bold text-xs md:text-sm tracking-[0.4em] uppercase">The Architecture of Obsession</h1>
        <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter">THE MANIFESTO</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {/* Isolation Section */}
        <Card className="glass-card border-primary/20 overflow-hidden group">
          <CardContent className="p-8 md:p-12 space-y-6 relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldAlert className="w-32 h-32 text-primary" />
            </div>
            <div className="flex items-center gap-4 text-primary">
              <Flame className="w-6 h-6 animate-pulse" />
              <h3 className="text-xl md:text-3xl font-headline font-bold">THE COST OF DIVERGENCE</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-lg font-light italic">
              <p>
                Diverging from the path of standard academia is inherently isolating. I see my peers navigating traditional systems with ease while I chart a course that isn't measured by grades, but by raw capability. 
              </p>
              <p>
                I recognize the friction of failure in a system that wasn't built for my speed. Isolation is not a defeat; it is simply the byproduct of moving in a direction the majority cannot see. While others seek safety in the expected, I am occupied with building the exceptional.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Degree Myth Section */}
        <Card className="glass-card border-primary/20 group">
          <CardContent className="p-8 md:p-12 space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <Cpu className="w-6 h-6" />
              <h3 className="text-xl md:text-3xl font-headline font-bold uppercase tracking-tight">The Institutional Myth</h3>
            </div>
            <div className="space-y-6 text-sm md:text-lg leading-relaxed font-light">
              <p>
                The narrative that AI Engineering is gated by elite degrees or JEE scores is an archaic ghost of the past. In the current era of intelligence, **talent and consistency are the only supreme currencies.**
              </p>
              <p className="border-l-2 border-primary/30 pl-6 text-primary/80 italic">
                "Who says we cannot build a global empire without a degree? Who says a role at a top-tier lab like OpenAI or Google is reserved for those with a piece of paper?"
              </p>
              <p>
                Excellence is undeniable. I am refining my mind every day to reach a level of intelligence that traditional institutions cannot quantify. My portfolio is not just a collection of code; it is a roadmap to a future where impact is the only metric that matters.
              </p>
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
              <p className="text-[10px] font-code tracking-widest text-muted-foreground uppercase">Primary Target</p>
              <p className="text-sm font-bold font-headline uppercase">Empire Foundation</p>
              <p className="text-[9px] font-code text-primary/60 mt-1">BENCHMARK: OPENAI / GOOGLE</p>
            </div>
            <div className="w-px h-16 bg-primary/20" />
            <div className="text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-[10px] font-code tracking-widest text-muted-foreground uppercase">Metric</p>
              <p className="text-sm font-bold font-headline">RAW INTELLIGENCE</p>
            </div>
          </div>
        </div>

        {/* Empire Navigation Hub */}
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
