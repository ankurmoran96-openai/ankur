"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  ChevronRight, 
  User, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Mic2, 
  Code2, 
  Zap,
  MousePointer2,
  Cpu,
  BrainCircuit,
  Terminal,
  Cloud
} from 'lucide-react';
import Link from 'next/link';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export function Hero() {
  const profileInfo = [
    { icon: Calendar, label: "Age", value: "15" },
    { icon: GraduationCap, label: "Grade", value: "Class 10" },
    { icon: MapPin, label: "Location", value: "Assam, Tinsukia" },
    { icon: User, label: "Status", value: "Active" },
  ];

  const passions = [
    { icon: Mic2, title: "Vocalist", desc: "Consistently mastering harmonies and vocal expression." },
    { icon: Code2, title: "Vibe-coding", desc: "High-quality AI orchestration directly from mobile devices." },
  ];

  const workFocus = [
    "AI Integration", "AI/ML", "Applied Engineering", "Prompt Engineering", 
    "AI Architecture", "Python", "MLOps", "AI AGENTS", "Web Development", "Bots", "Linux Scripts"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full flex flex-col items-center relative overflow-hidden bg-transparent">
      <HeroGeometric 
        badge="Founder of BrahMos AI | V4.2"
        title1="ANKUR"
        title2="MORAN"
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 space-y-12 md:space-y-32 pb-24 md:pb-40 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
        >
          {profileInfo.map((info, i) => (
            <Card key={i} className="glass-card p-3 md:p-6 flex items-center gap-2 md:gap-4 group border-white/5 transition-transform hover:scale-105">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                <info.icon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] font-code text-muted-foreground uppercase tracking-widest leading-none">{info.label}</p>
                <p className="text-xs md:text-xl font-display font-bold uppercase mt-1 leading-none">{info.value}</p>
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-20">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="space-y-6 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-3xl font-display font-bold uppercase tracking-tight flex items-center gap-3 md:gap-4">
                <Zap className="text-primary w-5 h-5 md:w-8 md:h-8" />
                My Passion
              </h3>
              <div className="grid gap-3 md:gap-4">
                {passions.map((p, i) => (
                  <Card key={i} className="glass-card p-4 md:p-8 space-y-2 group border-white/5 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 text-primary">
                      <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-background transition-all">
                        <p.icon className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <span className="text-sm md:text-2xl font-headline font-bold uppercase tracking-wide leading-none">{p.title}</span>
                    </div>
                    <p className="text-xs md:text-lg text-muted-foreground font-light leading-snug italic border-l-2 border-primary/20 pl-3 md:pl-6">
                      {p.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="space-y-6 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-8">
              <h3 className="text-lg md:text-3xl font-display font-bold uppercase tracking-tight flex items-center gap-3 md:gap-4">
                <Cpu className="text-primary w-5 h-5 md:w-8 md:h-8" />
                Working Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {workFocus.map((focus, i) => (
                  <Badge key={i} variant="outline" className="border-primary/20 bg-primary/5 text-primary text-[8px] md:text-xs py-1.5 md:py-2 px-2 md:px-4 rounded-none uppercase font-code tracking-widest hover:bg-primary hover:text-background transition-all cursor-default">
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-10 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all">
              <BrainCircuit className="absolute -bottom-6 -right-6 w-20 h-20 md:w-40 md:h-40 text-primary/5 group-hover:text-primary/10 transition-all duration-700" />
              <h4 className="text-sm md:text-2xl font-headline font-bold uppercase mb-2 text-primary leading-none">Empire Mission</h4>
              <p className="text-xs md:text-lg text-muted-foreground font-light leading-relaxed italic">
                Pioneering the BrahMos AI ecosystem through autonomous agents, cloud orchestration, and relentless mobile innovation.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="flex flex-col items-center gap-6 pt-8"
        >
          <div className="w-full flex items-center gap-4 md:gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.4em] uppercase text-center whitespace-nowrap">Access Tactical Intel</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          <Link href="/ai" className="group" prefetch>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="h-14 md:h-24 px-6 md:px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all flex items-center gap-4 md:gap-8 shadow-[0_0_30px_rgba(255,59,59,0.1)] group">
                <div className="text-left">
                  <p className="text-[8px] md:text-[10px] font-code tracking-[0.4em] opacity-60 mb-0.5 uppercase">Node 01</p>
                  <p className="text-base md:text-4xl font-display font-bold tracking-tighter uppercase leading-none">AI Lab</p>
                </div>
                <div className="w-8 h-8 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                  <ChevronRight className="w-4 h-4 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </motion.div>
          </Link>
          
          <p className="text-[10px] font-code text-muted-foreground/40 uppercase tracking-[0.5em] animate-pulse">Scroll Down for More Info</p>
        </motion.div>
      </div>
    </section>
  );
}
