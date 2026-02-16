
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Sparkles, User, Cpu, Music, Flame } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const portalLinks = [
    { name: 'PROFILE', href: '/about', icon: User, color: 'primary' },
    { name: 'NEURAL LAB', href: '/ai', icon: Cpu, color: 'primary' },
    { name: 'VOCAL JOURNEY', href: '/music', icon: Music, color: 'primary' },
    { name: 'THE MANIFESTO', href: '/manifesto', icon: Flame, color: 'primary' },
  ];

  return (
    <section className="min-h-[95vh] flex flex-col items-center justify-center relative px-4 py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,249,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mx-auto pt-8">
          {portalLinks.map((link) => (
            <Button 
              key={link.name}
              size="lg" 
              variant="outline" 
              className="group relative h-20 md:h-24 rounded-2xl border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 overflow-hidden" 
              asChild
            >
              <Link href={link.href} className="flex flex-col items-center justify-center gap-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <link.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] md:text-xs font-code font-bold tracking-[0.2em]">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
      </div>
    </section>
  );
}
