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
  Gamepad2,
  ShieldAlert,
  Bot,
  BrainCircuit,
  MessageSquare,
  Globe,
  Zap
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AISection() {
  const aiImg = PlaceHolderImages.find(img => img.id === 'ai-agent-demo');

  const projects = [
    {
      title: "Memory Chatbot",
      badge: "NEURAL MEMORY",
      icon: BrainCircuit,
      desc: "A smart friend that remembers everything you've talked about before. It uses its memory to give better answers that make sense for you specifically.",
      features: ["Context Awareness", "Long-term Memory", "Personalized Chat"],
      image: "https://picsum.photos/seed/memory/800/600"
    },
    {
      title: "Termux Assistant",
      badge: "AUTONOMOUS AGENT",
      icon: Terminal,
      desc: "A smart tool that lives in your terminal. It can read and write files, find problems in your code, and help plan how to build big projects automatically.",
      features: ["Writes Code", "Fixes Errors", "Plans Tasks", "Handles Files"],
      image: aiImg?.imageUrl
    },
    {
      title: "Telegram AI Bot",
      badge: "MULTI-MODEL",
      icon: MessageSquare,
      desc: "A super-powered Telegram bot. It can chat like a real human, create amazing images from your words, and answer almost any question using advanced AI.",
      features: ["AI Chat", "Image Generation", "Fast Answers"]
    },
    {
      title: "Telegram Manager",
      badge: "GROUP GUARD",
      icon: Gamepad2,
      desc: "A professional group manager. It keeps chats safe by automatically kicking or banning bad users. It also has fun mini-games to keep everyone happy.",
      features: ["Kick/Ban/Mute", "Mini Games", "AI Moderation", "Group Safety"]
    },
    {
      title: "Minecraft AI Player",
      badge: "SMART ENTITY",
      icon: Bot,
      desc: "A highly intelligent bot that joins Minecraft servers and talks to real players. It uses advanced AI logic to act and chat just like a human player.",
      features: ["Real Chat", "Smart Logic", "Server Interaction"]
    },
    {
      title: "Bypass Dumper",
      badge: "SECURITY RESEARCH",
      icon: ShieldAlert,
      desc: "A technical tool for security research. It helps analyze how specific mobile games are built by looking deep into their memory to find hidden info.",
      features: ["Deep Analysis", "Memory Scanning", "Security Audit"]
    },
    {
      title: "Empire Website",
      badge: "COMING SOON",
      icon: Globe,
      desc: "My upcoming AI-powered portal. It will be the central hub for all my smart tools, robotics research, and future company developments.",
      features: ["AI Integration", "Central Hub", "Personal Portal"]
    },
    {
      title: "IDE Agent",
      badge: "COMING SOON",
      icon: Zap,
      desc: "A professional coding partner that works inside your code editor. It helps you write, fix, and understand code ten times faster using AI.",
      features: ["Inline Editing", "Code Logic", "Fast Building"]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
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
          <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase">AI <span className="text-primary/60">Lab</span></h2>
          <p className="text-muted-foreground font-code text-xs tracking-[0.4em] uppercase">Everything I've built so far</p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <Card className="glass-card overflow-hidden border-white/5 bg-white/[0.02] flex flex-col lg:flex-row min-h-[500px] group hover:border-primary/40 transition-colors duration-500">
                <div className="lg:w-1/2 relative overflow-hidden bg-black/40 h-[300px] lg:h-auto">
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
                      <project.icon className="w-40 h-40 text-primary" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
                </div>
                <div className="lg:w-1/2 p-12 flex flex-col justify-center space-y-10">
                  <div className="space-y-6">
                    <Badge className="bg-primary text-background font-code font-bold rounded-none px-4">{project.badge}</Badge>
                    <h3 className="text-4xl font-headline font-bold flex items-center gap-4">
                      <project.icon className="w-10 text-primary" />
                      {project.title}
                    </h3>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-primary font-code uppercase tracking-widest">
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
          className="pt-24 flex flex-col items-center space-y-12"
        >
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Neural Harmonics</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/music" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-8 group">
              <div className="text-left">
                <p className="text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 02</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">Vocals</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Music className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
