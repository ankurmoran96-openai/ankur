
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Instagram, 
  Mail, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function ConnectPage() {
  const contactMethods = [
    {
      name: "BrahMos AI TG",
      value: "@BrahMosAI",
      href: "https://t.me/BrahMosAI",
      icon: Zap,
      color: "from-primary/20 to-primary/40",
      desc: "Official BrahMos AI ecosystem updates and deployment logs."
    },
    {
      name: "Portfolio Channel",
      value: "@ankurmigga",
      href: "https://t.me/ankurmigga",
      icon: Globe,
      color: "from-blue-500/20 to-sky-500/20",
      desc: "Personal builds, tactical dev updates, and early access projects."
    },
    {
      name: "Personal Telegram",
      value: "@ankurslys",
      href: "https://t.me/ankurslys",
      icon: Send,
      color: "from-cyan-500/20 to-blue-500/20",
      desc: "Direct tactical messaging for collaboration or inquiries."
    },
    {
      name: "WhatsApp",
      value: "+91 9387116776",
      href: "https://wa.me/919387116776",
      icon: Phone,
      color: "from-green-500/20 to-emerald-500/20",
      desc: "Primary communication node for direct technical contact."
    },
    {
      name: "GitHub",
      value: "@ankurmoran96-openai",
      href: "https://github.com/ankurmoran96-openai",
      icon: Github,
      color: "from-gray-500/20 to-gray-700/20",
      desc: "Check my latest AI repositories and contributions."
    },
    {
      name: "Instagram",
      value: "@ankrdgaf",
      href: "https://instagram.com/ankrdgaf",
      icon: Instagram,
      color: "from-pink-500/20 to-purple-500/20",
      desc: "Behind the scenes of mobile-first AI engineering."
    },
    {
      name: "Email",
      value: "ankurmoran96@gmail.com",
      href: "mailto:ankurmoran96@gmail.com",
      icon: Mail,
      color: "from-white/5 to-white/10",
      desc: "Formal inquiries and industrial networking."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-24 px-4 md:px-6 space-y-12 md:space-y-24 overflow-x-hidden">
      <div className="scanline" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center space-y-4 md:space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[8px] md:text-[10px] font-code uppercase tracking-[0.4em]">
          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
          Neural Link Established
        </div>
        <h1 className="text-3xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-none">
          Connect <br /><span className="text-primary/60">With Me.</span>
        </h1>
        <p className="text-muted-foreground font-light text-xs md:text-xl max-w-2xl mx-auto italic leading-relaxed">
          "Reach out via any of the tactical channels below to collaborate on the future of AI."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {contactMethods.map((method, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                transition: { delay: idx * 0.1, duration: 0.5 } 
              }
            }}
          >
            <a href={method.href} target="_blank" rel="noopener noreferrer" className="block h-full group">
              <Card className={`h-full glass-card border-white/5 bg-gradient-to-br ${method.color} p-5 md:p-8 space-y-4 md:space-y-6 hover:border-primary/40 transition-all duration-500`}>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black/40 border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <method.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-[8px] md:text-[10px] font-code text-primary uppercase tracking-[0.3em] font-bold">{method.name}</h3>
                  <p className="text-sm md:text-2xl font-display font-bold tracking-tight truncate">{method.value}</p>
                  <p className="text-[10px] md:text-sm text-muted-foreground font-light leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="pt-12 md:pt-24 flex flex-col items-center space-y-8 md:space-y-12"
      >
        <div className="w-full flex items-center gap-4 md:gap-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
          <span className="text-[8px] md:text-[10px] font-code text-primary tracking-[0.4em] uppercase">Status: Tactical</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
        </div>
        
        <Link href="/" className="group">
          <Button size="lg" className="h-16 md:h-24 px-8 md:px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-4 md:gap-8 group">
            <div className="text-left">
              <p className="text-[7px] md:text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Node 00</p>
              <p className="text-sm md:text-4xl font-display font-bold tracking-tighter uppercase">Empire Core</p>
            </div>
            <div className="w-8 h-8 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
              <Zap className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </div>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
