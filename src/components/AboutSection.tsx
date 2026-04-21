"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Rocket, Brain, Cpu, Fingerprint, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[10px] font-code uppercase tracking-[0.5em]">
                <Fingerprint className="w-4 h-4" />
                Profile Node
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tighter uppercase">
                Ankur <br /><span className="text-primary/60">Moran.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light border-l-2 border-primary/20 pl-6 md:pl-8 italic">
                  "Born June 9, 2011. Currently in Class 10. I am building the future of AI orchestration from a mobile device."
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  My strategy is unique: While pursuing my <strong className="text-primary">Diploma in Polytechnic</strong>, I am leveraging years of self-taught AI experience to command high-value roles in applied engineering.
                </p>
              </div>
            </div>

            <div className="flex gap-8 md:gap-12">
              <div className="space-y-1">
                <p className="text-[10px] font-code uppercase text-primary/60 tracking-widest">Status</p>
                <p className="text-xl md:text-2xl font-display font-bold uppercase">Class 10</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="space-y-1">
                <p className="text-[10px] font-code uppercase text-primary/60 tracking-widest">Next Node</p>
                <p className="text-xl md:text-2xl font-display font-bold uppercase text-primary">Diploma</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="glass-card bg-white/[0.02] p-6 md:p-8 space-y-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-background">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight">Applied Experience</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    By the time I finish my diploma, I will have 4+ years of GitHub builds. Experience isn't just time—it's what you build with the tools you have.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="glass-card bg-white/[0.02] p-6 md:p-8 space-y-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-background">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight">Mobile Mastery</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    I mastered complex AI systems on a mobile device. This level of resourcefulness is my greatest asset in the engineering world.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="pt-12 md:pt-24 flex flex-col items-center space-y-8 md:space-y-12"
        >
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">See My AI Projects</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/ai" className="group">
            <Button size="lg" className="h-20 md:h-24 px-10 md:px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-6 md:gap-8 group">
              <div className="text-left">
                <p className="text-[8px] md:text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Next Section</p>
                <p className="text-2xl md:text-4xl font-display font-bold tracking-tighter uppercase">AI Lab</p>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
