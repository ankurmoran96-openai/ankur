
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Database, Terminal, Shield } from 'lucide-react';
import Link from 'next/link';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <HeroGeometric 
        badge="Neural Infrastructure Node: 00"
        title1="ANKUR"
        title2="MORAN"
      />
      
      <div className="relative z-20 -mt-20 pb-20 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
