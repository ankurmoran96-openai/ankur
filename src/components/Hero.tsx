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
  BrainCircuit
} from 'lucide-react';
import Link from 'next/link';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export function Hero() {
  const profileInfo = [
    { icon: Calendar, label: "Age", value: "14" },
    { icon: GraduationCap, label: "Grade", value: "9" },
    { icon: MapPin, label: "Location", value: "Assam, Tinsukia" },
    { icon: User, label: "Status", value: "Online" },
  ];

  const passions = [
    { icon: Mic2, title: "Vocalist", desc: "Practicing vocals daily to master harmonies and express emotion." },
    { icon: Code2, title: "Vibe-coding", desc: "Building fast, high-quality tools using AI and modern frameworks." },
  ];

  const workFocus = [
    "AI Integration", "AI/ML", "Applied AI Engineering", "Prompt Engineering", 
    "AI Architecture", "Python", "MLOps", "AI AGENTS", "Web development", 
    "Bots [ ANY TYPE ]", "Tools [ Scripts via Linux ]"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full flex flex-col items-center relative overflow-hidden bg-transparent">
      <HeroGeometric 
        badge="System Active"
        title1="ANKUR"
        title2="MORAN"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40 animate-bounce pointer-events-none"
      >
        <span className="text-[10px] font-code uppercase tracking-[0.4em]">Scroll for Intel</span>
        <MousePointer2 className="w-4 h-4" />
      </motion.div>
      
      <div className="w-full max-w-7xl mx-auto px-6 space-y-32 pb-40 relative z-10">
        {/* Profile Stats */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {profileInfo.map((info, i) => (
            <Card key={i} className="glass-card bg-white/[0.02] border-white/5 p-6 flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <info.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-code text-muted-foreground uppercase tracking-widest">{info.label}</p>
                <p className="text-xl font-display font-bold uppercase">{info.value}</p>
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Passions */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold uppercase tracking-tight flex items-center gap-4">
                <Zap className="text-primary w-8 h-8" />
                My Passion
              </h3>
              <div className="grid gap-6">
                {passions.map((p, i) => (
                  <Card key={i} className="glass-card bg-white/[0.02] border-white/5 p-8 space-y-4 group hover:border-primary/40">
                    <div className="flex items-center gap-4 text-primary">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-background transition-all duration-300">
                        <p.icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-headline font-bold uppercase tracking-wide">{p.title}</span>
                    </div>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-6">
                      {p.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Working Focus */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold uppercase tracking-tight flex items-center gap-4">
                <Cpu className="text-primary w-8 h-8" />
                Where I am Working
              </h3>
              <div className="flex flex-wrap gap-3">
                {workFocus.map((focus, i) => (
                  <Badge key={i} variant="outline" className="border-primary/20 bg-primary/5 text-primary text-xs py-2.5 px-5 rounded-none uppercase font-code tracking-widest hover:bg-primary hover:text-background transition-all duration-300">
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
              <BrainCircuit className="absolute -bottom-10 -right-10 w-40 h-40 text-primary/5 group-hover:text-primary/10 transition-all duration-700" />
              <h4 className="text-2xl font-headline font-bold uppercase mb-4 text-primary">Mission Directive</h4>
              <p className="text-muted-foreground text-lg font-light leading-relaxed italic">
                I am building a smart future where machines help everyone. My focus is on creating tools that are useful, innovative, and powered by intelligence.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tactical Command */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="flex flex-col items-center gap-12 pt-12"
        >
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Tactical Access</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          <Link href="/ai" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-300 flex items-center gap-8 group shadow-[0_0_30px_rgba(255,59,59,0.1)] hover:shadow-[0_0_50px_rgba(255,59,59,0.3)]">
              <div className="text-left">
                <p className="text-[10px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 01</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">AI Arsenal</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
