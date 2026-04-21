"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Rocket, Brain, Cpu, Fingerprint, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[10px] font-code uppercase tracking-[0.5em]">
                <Fingerprint className="w-4 h-4" />
                Profile
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-bold leading-tight tracking-tighter uppercase">
                Ankur <br /><span className="text-primary/60">Moran.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light border-l-2 border-primary/20 pl-8 italic">
                "Born June 9, 2011. I have been building AI tools on a phone since age 14. My strategy is simple: prove my expertise through real builds, then formalize it with a Polytechnic Diploma."
              </p>
            </div>

            <div className="flex gap-12">
              <div className="space-y-1">
                <p className="text-[10px] font-code uppercase text-primary/60 tracking-widest">Born</p>
                <p className="text-2xl font-display font-bold">2011</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="space-y-1">
                <p className="text-[10px] font-code uppercase text-primary/60 tracking-widest">Plan</p>
                <p className="text-2xl font-display font-bold uppercase">Diploma</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in-right">
            <Card className="glass-card bg-white/[0.02] p-8 space-y-6 group">
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-background">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">Polytechnic Path</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  After Class 10, I am pursuing a Polytechnic Diploma to anchor my deep self-taught coding experience in professional certification.
                </p>
              </div>
            </Card>

            <Card className="glass-card bg-white/[0.02] p-8 space-y-6 group">
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-background">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">Early Experience</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  While others started with laptops, I mastered AI orchestration on mobile. This early start gives me years of advantage in the job market.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="pt-24 flex flex-col items-center space-y-12">
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">See My AI Projects</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/ai" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-8 group">
              <div className="text-left">
                <p className="text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Next Section</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">AI Lab</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Cpu className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
