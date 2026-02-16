
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Target, Calendar, Brain, ArrowRight, Cpu, Music, Flame } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-10 animate-fade-in-left">
            <div className="space-y-4">
              <h2 className="text-primary font-code font-bold text-xs md:text-sm tracking-[0.3em] uppercase">Executive Summary</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] md:leading-[0.9] tracking-tighter">
                Logic and <br className="hidden md:block" /><span className="text-primary/80">Melody.</span>
              </h3>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light italic">
              "Born on June 9, 2011, I am architecting a future where intelligence is seamless. At 14, my vision extends beyond code—it's about creating an ecosystem where technology serves humanity through practical, high-impact products."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl md:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-code">Inception</p>
                  <p className="text-xs md:sm font-semibold font-headline">June 9, 2011</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl md:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <Target className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-code">Strategic Focus</p>
                  <p className="text-xs md:text-sm font-semibold font-headline">Applied AI & Robotics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-right">
            <Card className="glass-card border-primary/20 group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 md:pt-10 space-y-4 md:space-y-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-xl md:text-2xl font-headline font-bold">Future CEO</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                    I will not just train models; I will use the world's most advanced intelligence to build tangible products. My focus is on robotics and autonomous agents that solve real-world problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 group md:mt-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 md:pt-10 space-y-4 md:space-y-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-xl md:text-2xl font-headline font-bold">The Empire</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                    Every project is a brick in my empire. I am building a legacy of utility, where AI isn't just a chatbot, but a partner in physical and digital labor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Empire Navigation Hub */}
        <div className="pt-24 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h4 className="text-[10px] md:text-xs font-code font-bold text-primary tracking-[0.4em] uppercase whitespace-nowrap">Traverse the Infrastructure</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
            <Button variant="outline" className="h-24 glass-card border-primary/10 group hover:border-primary/40 flex flex-col items-center justify-center gap-3 transition-all duration-500" asChild>
              <Link href="/manifesto">
                <Flame className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-code tracking-widest uppercase">The Manifesto</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
