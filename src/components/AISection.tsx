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
  Github,
  Cloud,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AISection() {
  const projects = [
    {
      title: "BrahMos Cloud PaaS",
      badge: "NEW: ORCHESTRATOR",
      icon: Cloud,
      desc: "Multi-agent layer orchestration using LLMs to manage Docker environments and perform deep security malware audits.",
      features: ["Multi-Agent Ops", "Docker Automation", "Malware Analysis", "Security Auditing"],
      image: "https://picsum.photos/seed/brahmos/800/600"
    },
    {
      title: "GitHub Repo Architect",
      badge: "SELF-HEALING",
      icon: Github,
      desc: "Autonomous repository manager that uses LLMs to analyze code via PAT token and automatically fixes detected bugs.",
      features: ["PAT Authentication", "Auto-Fixing Bugs", "Neural Analysis", "Self-Healing Code"],
      image: "https://picsum.photos/seed/github/800/600"
    },
    {
      title: "Daisy (AI TG Manager)",
      badge: "AI INTEGRATED",
      icon: MessageSquare,
      desc: "Advanced Telegram manager featuring real-time web search, mini-games, and group management with neural chat logic.",
      features: ["Daisy AI", "Web Search", "Mini Games", "Group Management"],
      image: "https://picsum.photos/seed/daisy/800/600"
    },
    {
      title: "Termux Assistant",
      badge: "AUTONOMOUS AGENT",
      icon: Terminal,
      desc: "Mobile-first autonomous agent that handles code logic and file operations directly in the Termux environment.",
      features: ["Writes Code", "Fixes Errors", "Plans Tasks", "Mobile Linux"],
      image: "https://picsum.photos/seed/terminal/800/600"
    },
    {
      title: "Memory Chatbot",
      badge: "NEURAL MEMORY",
      icon: BrainCircuit,
      desc: "Conversational AI that maintains persistent memory of past interactions for deeply contextual responses.",
      features: ["Context Awareness", "Long-term Memory", "Personalized Chat"],
      image: "https://picsum.photos/seed/memory/800/600"
    },
    {
      title: "Minecraft AI Player",
      badge: "SMART ENTITY",
      icon: Bot,
      desc: "Intelligent bot that interacts with real players using human-like behaviors and chat logic.",
      features: ["Real Chat", "Smart Logic", "Server Interaction"]
    },
    {
      title: "Bypass Dumper",
      badge: "SECURITY RESEARCH",
      icon: ShieldAlert,
      desc: "Technical auditing tool designed for BGMI memory analysis and deep security research.",
      features: ["Memory Scanning", "Security Audit", "Deep Analysis"]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-32 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-code uppercase tracking-[0.4em]">
            <Sparkles className="w-3 h-3" />
            Tactical Arsenal
          </div>
          <h2 className="text-4xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-none">AI <span className="text-primary/60">Lab</span></h2>
          <p className="text-muted-foreground font-code text-[8px] md:text-xs tracking-[0.4em] uppercase">V4.1_ACTIVE_CLASS_10</p>
        </motion.div>

        <div className="space-y-12 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }} 
              variants={fadeUp}
            >
              <Card className="glass-card overflow-hidden border-white/5 bg-white/[0.02] flex flex-col lg:flex-row min-h-[300px] md:min-h-[500px] group transition-all duration-500">
                <div className="lg:w-1/2 relative overflow-hidden bg-black/40 h-[200px] lg:h-auto">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-20 grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <project.icon className="w-20 md:w-40 h-20 md:h-40 text-primary" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
                </div>
                <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-6 md:space-y-10">
                  <div className="space-y-3 md:space-y-6">
                    <Badge className="bg-primary text-background font-code font-bold rounded-none px-2 text-[8px] md:text-xs">{project.badge}</Badge>
                    <h3 className="text-xl md:text-4xl font-headline font-bold flex items-center gap-3 md:gap-4 leading-none">
                      <project.icon className="w-5 md:w-10 h-5 md:h-10 text-primary" />
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-4 md:pl-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[7px] md:text-[10px] font-bold text-primary font-code uppercase tracking-wider">
                        <ListChecks className="w-3 h-3" />
                        {feature}
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
          className="pt-12 flex flex-col items-center gap-6"
        >
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Next Directive</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/music" className="group" prefetch>
            <Button size="lg" className="h-16 md:h-24 px-8 md:px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all flex items-center gap-4 md:gap-8 group">
              <div className="text-left">
                <p className="text-[8px] md:text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 02</p>
                <p className="text-lg md:text-4xl font-display font-bold tracking-tighter uppercase leading-none">Vocals</p>
              </div>
              <div className="w-8 h-8 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Music className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
