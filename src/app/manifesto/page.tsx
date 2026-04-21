"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Zap, Briefcase, TrendingUp, Lightbulb, ShieldCheck, Home, Flame, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ManifestoPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="max-w-5xl mx-auto py-24 px-6 space-y-40 animate-in fade-in duration-1000">
      <div className="scanline" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h1 className="text-primary font-code font-bold text-xs tracking-[0.6em] uppercase">Architectural Roadmap</h1>
        <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter uppercase">Manifesto</h2>
      </motion.div>

      <div className="space-y-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Card className="glass-card bg-white/[0.02] border-white/5 p-12 md:p-20 space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <Zap className="w-8 h-8" />
              <h3 className="text-3xl md:text-4xl font-headline font-bold uppercase">The Experience Pillar</h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-xl font-light">
              <p>
                By the time I finish Class 10, my working experience and GitHub profile will reflect years of building real-world AI projects. While the traditional path is slow, I have been building from my phone since age 14.
              </p>
              <p>
                My strategy is simple: Applied Experience + Formal Diploma. I am not waiting for a degree to start my career; I am using what I've built to command my own path in the industry.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Card className="glass-card bg-primary/[0.03] border-primary/20 p-12 md:p-20 space-y-12">
            <div className="flex items-center gap-6 text-primary">
              <Briefcase className="w-10 h-10" />
              <h3 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">Polytechnic Strategy</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-xl leading-relaxed font-light text-muted-foreground">
                <p>
                  My next node is a <strong className="text-primary">Diploma in Polytechnic</strong>. This will provide the technical certification I need to bridge my self-taught AI expertise with industry standards.
                </p>
                <div className="p-8 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-8">
                  <TrendingUp className="w-10 h-10 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-primary uppercase text-xs tracking-widest mb-2">The Applied Directive</p>
                    <p className="text-muted-foreground italic leading-relaxed">
                      I will leverage my existing portfolio of autonomous agents and GitHub repositories to secure high-value positions at leading tech companies while pursuing my diploma.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10 relative overflow-hidden group">
                 <Terminal className="absolute -top-10 -right-10 w-40 h-40 text-primary/5 group-hover:text-primary/10 transition-all" />
                 <h4 className="text-2xl font-headline font-bold uppercase mb-4 text-primary">Built on Mobile</h4>
                 <p className="text-muted-foreground leading-relaxed">
                   Imagination is better than degrees. I proved that complex AI systems can be orchestrated from a mobile device. This level of adaptability and resourcefulness is my greatest asset.
                 </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="py-24 text-center"
        >
          <div className="inline-block relative">
            <p className="text-4xl md:text-7xl font-display font-bold text-primary italic neon-text px-4 leading-tight tracking-tighter">
              "Experience isn't just about time—it's about what you build with the tools you have."
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="pt-24 flex flex-col items-center space-y-12"
        >
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Return to Core</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-8 group">
              <div className="text-left">
                <p className="text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 00</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">Empire Core</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Home className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
