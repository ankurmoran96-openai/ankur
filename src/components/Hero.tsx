
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,249,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next-Gen AI & Music
        </div>

        <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">
          Crafting the <span className="text-primary italic">Future</span> <br /> 
          with <span className="text-primary neon-text">Echoes</span> of ML.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body font-light">
          Hi, I'm <span className="text-foreground font-semibold">Ankur Moran</span>. 
          A 14-year-old developer building AI agents and practicing vocals to find harmony between technology and art.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="glow-button font-headline rounded-full bg-primary text-background hover:bg-primary/90 px-8 py-6 text-lg group" asChild>
            <a href="#chat">
              Talk to my AI
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-headline rounded-full border-primary/20 hover:bg-primary/5 px-8 py-6 text-lg" asChild>
            <a href="#ai">View Projects</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}
