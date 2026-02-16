
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, User } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,249,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-sm font-code tracking-wider uppercase">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
          <span>Orchestrating Intelligence</span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-9xl font-display font-bold leading-[1.1] md:leading-none tracking-tighter uppercase">
          ANKUR <br className="hidden sm:block" /> 
          <span className="text-primary italic neon-text">MORAN</span> 
        </h1>

        <p className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-light leading-relaxed px-4">
          Architecting the future through applied AI, robotics, and vocal harmony.
        </p>

        <div className="pt-8">
           <Button 
            size="lg" 
            className="rounded-full px-8 h-14 bg-primary text-background hover:bg-primary/90 font-code font-bold tracking-widest group transition-all duration-500" 
            asChild
          >
            <Link href="/about">
              ENTER INFRASTRUCTURE
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
