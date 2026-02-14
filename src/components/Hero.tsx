
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,249,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-sm font-code tracking-wider uppercase">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
          <span>Orchestrating Intelligence</span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] md:leading-none tracking-tighter">
          BUILDING MY <br className="hidden sm:block" /> 
          <span className="text-primary italic neon-text">EMPIRE</span> 
          <span className="ml-2 md:ml-4 inline-block align-middle">
            <span className="css-smiley w-[1em] h-[1em] text-2xl md:text-4xl">
              <span className="smiley-mouth"></span>
            </span>
          </span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-body font-light leading-relaxed px-4">
          I am <span className="text-foreground font-semibold">Ankur Moran</span>. 
          A 14-year-old developer leveraging advanced AI models to build products that redefine daily life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center pt-4">
          <Button size="lg" className="w-full sm:w-auto glow-button font-headline rounded-full bg-primary text-background hover:bg-primary/90 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg group" asChild>
            <a href="#ai">
              NEURAL LAB
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto font-headline rounded-full border-primary/20 hover:bg-primary/5 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all" asChild>
            <a href="#music">VOCAL JOURNEY</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
      </div>
    </section>
  );
}
