"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Database, Terminal, Shield } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,59,0.05),transparent_50%)]" />
      <div className="scanline" />
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="flex items-center justify-center gap-6 text-[10px] font-code tracking-[0.5em] text-primary/60 uppercase">
          <div className="h-px w-8 bg-primary/30" />
          Neural Infrastructure Initialization
          <div className="h-px w-8 bg-primary/30" />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-none tracking-tighter uppercase relative">
            ANKUR <br />
            <span className="text-primary neon-text tracking-[-0.05em]">MORAN</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-light leading-relaxed">
          Architecting high-intelligence ecosystems. Focused on autonomous agents, robotics, and strategic harmonic development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
          <Link href="/about" className="group">
            <Button size="lg" className="h-16 px-12 rounded-full bg-primary text-background font-bold tracking-widest uppercase hover:bg-primary/90 transition-all duration-500 shadow-[0_0_20px_rgba(255,59,59,0.2)] hover:shadow-[0_0_40px_rgba(255,59,59,0.4)] relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Initialize Nodes
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </Link>
          
          <div className="flex gap-8 border border-white/5 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full">
            <div className="flex items-center gap-2 text-primary/60">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] font-code uppercase">CLI Agent</span>
            </div>
            <div className="flex items-center gap-2 text-primary/60">
              <Database className="w-4 h-4" />
              <span className="text-[10px] font-code uppercase">Neural</span>
            </div>
            <div className="flex items-center gap-2 text-primary/60">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] font-code uppercase">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}