"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Mic2, 
  Code2, 
  Cpu, 
  Zap, 
  Terminal, 
  Bot, 
  Gamepad2, 
  ShieldAlert,
  Globe,
  BrainCircuit
} from 'lucide-react';

export function DashboardSection() {
  const profileInfo = [
    { icon: User, label: "Name", value: "Ankur Moran" },
    { icon: Calendar, label: "Age", value: "14" },
    { icon: GraduationCap, label: "Grade", value: "9" },
    { icon: MapPin, label: "Location", value: "Assam, Tinsukia" },
  ];

  const passions = [
    { icon: Mic2, title: "Vocalist", desc: "Consistently practicing and refining vocal harmonics." },
    { icon: Code2, title: "Vibe-coding", desc: "Building fast, high-quality projects using AI tools." },
  ];

  const workFocus = [
    "AI/ML", "Applied AI Engineering", "Prompt Engineering", "AI Architecture", 
    "Python", "MLOps", "AI AGENTS", "Web development", "Bots", "Linux Tools"
  ];

  const projects = [
    { title: "Memory Chatbot", status: "Active", icon: BrainCircuit, type: "Memory-Based" },
    { title: "Termux Assistant", status: "Active", icon: Terminal, type: "Autonomous Code Tool" },
    { title: "Telegram Bot", status: "Active", icon: Bot, type: "Chat & Image Gen" },
    { title: "Telegram Manager", status: "Active", icon: Gamepad2, type: "Games & Group Management" },
    { title: "Minecraft AI Bot", status: "Active", icon: Cpu, type: "Talks to real players" },
    { title: "Bypass Dumper", status: "Active", icon: ShieldAlert, type: "BGMI Offset Tool" },
    { title: "Empire Website", status: "Coming Soon", icon: Globe, type: "AI-Powered Portal" },
    { title: "IDE Agent", status: "Coming Soon", icon: Zap, type: "Autonomous IDE Assistant" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-6 space-y-32">
      {/* Profile Overview */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {profileInfo.map((info, i) => (
          <Card key={i} className="glass-card bg-white/[0.02] border-white/5 p-6 flex items-center gap-4 group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
              <info.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-code text-muted-foreground uppercase tracking-widest">{info.label}</p>
              <p className="text-xl font-display font-bold uppercase">{info.value}</p>
            </div>
          </Card>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Passions & Work */}
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
            <div className="grid gap-4">
              {passions.map((p, i) => (
                <Card key={i} className="glass-card bg-white/[0.02] border-white/5 p-6 space-y-2">
                  <div className="flex items-center gap-3 text-primary">
                    <p.icon className="w-5 h-5" />
                    <span className="font-headline font-bold uppercase tracking-wide">{p.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed italic border-l-2 border-primary/20 pl-4">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight flex items-center gap-4">
              <Code2 className="text-primary w-8 h-8" />
              Working On
            </h3>
            <div className="flex flex-wrap gap-2">
              {workFocus.map((focus, i) => (
                <Badge key={i} variant="outline" className="border-primary/20 bg-primary/5 text-primary text-[10px] py-1.5 px-3 rounded-none uppercase font-code tracking-widest">
                  {focus}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Summary */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight flex items-center gap-4">
              <Cpu className="text-primary w-8 h-8" />
              Projects
            </h3>
            <Badge className="bg-primary/20 text-primary border-primary/40 rounded-none px-4 font-code">ARCHIVE_V2.5</Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <Card key={i} className="glass-card bg-white/[0.02] border-white/5 p-5 group hover:border-primary/40">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/5 rounded border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[8px] font-code px-2 py-0.5 border ${project.status === 'Active' ? 'border-primary/40 text-primary bg-primary/10' : 'border-white/10 text-muted-foreground bg-white/5'}`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-sm uppercase tracking-tight mb-1">{project.title}</h4>
                <p className="text-[10px] text-muted-foreground font-code uppercase tracking-wider">{project.type}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
