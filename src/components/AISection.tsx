"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Terminal, 
  Sparkles, 
  ListChecks, 
  Music,
  ShieldAlert,
  Bot,
  BrainCircuit,
  MessageSquare,
  Globe,
  Zap,
  Github
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AISection() {
  const projects = [
    {
      title: "GitHub Repo Architect",
      badge: "NEW: SELF-HEALING",
      icon: Github,
      desc: "A professional repository manager that controls your entire GitHub via PAT token. Uses LLMs to analyze code, detect bugs, and automatically fix them.",
      features: ["PAT Authentication", "Auto-Fixing Bugs", "Neural Analysis", "Self-Healing Code"],
      image: "https://picsum.photos/seed/github/800/600"
    },
    {
      title: "Daisy (TG Manager)",
      badge: "UPDATED: SMART OPS",
      icon: MessageSquare,
      desc: "An advanced AI-powered Telegram manager. Now features real-time web search and interactive mini-games for enhanced community engagement.",
      features: ["Daisy AI", "Web Search", "Mini Games", "Group Management"],
      image: "https://picsum.photos/seed/daisy/800/600"
    },
    {
      title: "Termux Assistant",
      badge: "AUTONOMOUS AGENT",
      icon: Terminal,
      desc: "A mobile-first autonomous agent that reading/writes files and handles code logic directly in the terminal environment.",
      features: ["Writes Code", "Fixes Errors", "Plans Tasks", "Mobile Linux"],
      image: "https://picsum.photos/seed/terminal/800/600"
    },
    {
      title: "Memory Chatbot",
      badge: "NEURAL MEMORY",
      icon: BrainCircuit,
      desc: "A conversational AI that maintains persistent memory of past interactions to provide deeply personalized and contextual responses.",
      features: ["Context Awareness", "Long-term Memory", "Personalized Chat"],
      image: "https://picsum.photos/seed/memory/800/600"
    },
    {
      title: "Minecraft AI Player",
      badge: "SMART ENTITY",
      icon: Bot,
      desc: "A highly intelligent bot that joins servers and interacts with real players using human-like chat logic and behaviors.",
      features: ["Real Chat", "Smart Logic", "Server Interaction"]
    },
    {
      title: "Bypass Dumper",
      badge: "SECURITY RESEARCH",
      icon: ShieldAlert,
      desc: "A technical security auditing tool designed for BGMI memory analysis and deep security research.",
      features: ["Memory Scanning", "Security Audit", "Deep Analysis"]
    },
    {
      title: "Empire Infrastructure",
      badge: "COMING SOON",
      icon: Globe,
      desc: "The central hub for all neural systems, robotics research, and future company developments.",
      features: ["AI Integration", "Central Hub", "Personal Portal"]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-32 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-code uppercase tracking-[0.5em]">
            <Sparkles className="w-4 h-4" />
            Tactical Arsenal
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase">AI <span className="text-primary/60">Lab</span></h2>
          <p className="text-muted-foreground font-code text-[10px] md:text-xs tracking-[0.4em] uppercase">V3.5_CLASS_10_ACTIVE</p>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <Card className="glass-card overflow-hidden border-white/5 bg-white/[0.02] flex flex-col lg:flex-row min-h-[400px] md:min-h-[500px] group hover:border-primary/40 transition-colors duration-500">
                <div className="lg:w-1/2 relative overflow-hidden bg-black/40 h-[250px] lg:h-auto">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-20 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                      data-ai-hint="artificial intelligence"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <project.icon className="w-24 md:w-40 h-24 md:h-40 text-primary" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
                </div>
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-8 md:space-y-10">
                  <div className="space-y-4 md:space-y-6">
                    <Badge className="bg-primary text-background font-code font-bold rounded-none px-3 md:px-4 text-[10px] md:text-xs">{project.badge}</Badge>
                    <h3 className="text-2xl md:text-4xl font-headline font-bold flex items-center gap-4">
                      <project.icon className="w-6 md:w-10 h-6 md:h-10 text-primary" />
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-4 md:pl-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="space-y-1">
                        <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-primary font-code uppercase tracking-widest">
                          <ListChecks className="w-3 h-3" />
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="pt-16 md:pt-24 flex flex-col items-center space-y-12"
        >
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Return to Core</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/music" className="group">
            <Button size="lg" className="h-20 md:h-24 px-12 md:px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-6 md:gap-8 group">
              <div className="text-left">
                <p className="text-[8px] md:text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 02</p>
                <p className="text-2xl md:text-4xl font-display font-bold tracking-tighter uppercase">Vocals</p>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Music className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
