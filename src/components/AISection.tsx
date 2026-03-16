
"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Terminal, 
  BrainCircuit, 
  Sparkles, 
  FileCode, 
  Search, 
  ListChecks, 
  Box, 
  Music,
  Gamepad2,
  Sword,
  ShieldAlert,
  Bot
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AISection() {
  const aiImg = PlaceHolderImages.find(img => img.id === 'ai-agent-demo');

  const projects = [
    {
      title: "Termux CLI Agent",
      badge: "CORE_UTILITY",
      icon: Terminal,
      desc: "Autonomous filesystem orchestrator for deep system interaction and code synthesis.",
      features: ["Synthesis", "Scanner", "Planner", "Operations"],
      main: true
    },
    {
      title: "Telegram Bot Manager",
      badge: "V3_BOTNET",
      icon: Gamepad2,
      desc: "AI-powered Telegram ecosystem featuring integrated mini-games like TicTacToe and RPS.",
      features: ["Logic Hooks", "Game Engine", "Multi-user"],
      main: false
    },
    {
      title: "Minecraft AI Entity",
      badge: "GPT-4O_V1",
      icon: Bot,
      desc: "Autonomous Minecraft bot capable of server-wide social interaction using advanced LLMs.",
      features: ["GPT-4o Integration", "Real-time Chat", "Server Auth"],
      main: false
    },
    {
      title: "Bypass Dumper",
      badge: "SEC_RESEARCH",
      icon: ShieldAlert,
      desc: "Reverse engineering utility for lib cracking and targeted memory offset extraction.",
      features: ["Dump Analysis", "Lib Crack", "Offset Mapping"],
      main: false
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-6 animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-code uppercase tracking-[0.5em]">
            <Sparkles className="w-4 h-4" />
            Neural Deployment Log
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase">Lab <span className="text-primary/60">01</span></h2>
          <p className="text-muted-foreground font-code text-xs tracking-[0.4em] uppercase">Tactical AI Assets Initialized</p>
        </div>

        <div className="grid gap-12">
          {/* Main Termux Agent */}
          <Card className="glass-card overflow-hidden border-white/5 bg-white/[0.02] flex flex-col lg:flex-row min-h-[500px] group">
            <div className="lg:w-1/2 relative overflow-hidden bg-black/40">
              <Image 
                src={aiImg?.imageUrl || ''} 
                alt="Termux CLI Agent" 
                fill 
                className="object-cover opacity-20 grayscale group-hover:scale-105 transition-all duration-1000"
                data-ai-hint="coding terminal"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <Badge className="bg-primary text-background font-code font-bold rounded-none px-4">CORE_UTILITY_V1</Badge>
                <h3 className="text-4xl font-headline font-bold flex items-center gap-4">
                  <Terminal className="w-10 h-10 text-primary" />
                  {projects[0].title}
                </h3>
                <p className="text-xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-6">
                  "{projects[0].desc}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FileCode, label: 'SYNTHESIS' },
                  { icon: Search, label: 'SCANNER' },
                  { icon: ListChecks, label: 'PLANNER' },
                  { icon: Box, label: 'OPERATIONS' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary font-code uppercase tracking-widest">
                      <item.icon className="w-3 h-3" />
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* New Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, idx) => (
              <Card key={idx} className="glass-card p-8 space-y-8 bg-white/[0.02] border-white/5 group hover:border-primary/30">
                <div className="flex items-center justify-between">
                  <project.icon className="w-10 h-10 text-primary" />
                  <Badge variant="outline" className="border-primary/40 text-primary font-code text-[8px]">{project.badge}</Badge>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{project.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed min-h-[60px]">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.features.map(f => (
                    <span key={f} className="text-[8px] font-code uppercase px-2 py-1 bg-white/5 text-primary/80">
                      {f}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-24 flex flex-col items-center space-y-12">
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Vocal Harmonics</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/music" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-8 group">
              <div className="text-left">
                <p className="text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Next Node</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">Harmonics</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Music className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
