
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, BrainCircuit, Sparkles, AlertCircle, Music, FileCode, Search, ListChecks, Box, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AISection() {
  const aiImg = PlaceHolderImages.find(img => img.id === 'ai-agent-demo');
  const chatImg = PlaceHolderImages.find(img => img.id === 'chatbot-collection');

  return (
    <section id="ai" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">
        <div className="text-center space-y-4 animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[9px] md:text-[10px] font-code uppercase tracking-[0.4em]">
            <Sparkles className="w-3 h-3" />
            Project Archive
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter uppercase">Neural Lab</h2>
          <p className="text-muted-foreground font-code text-[10px] md:text-sm tracking-widest uppercase">Intelligent Systems Deployed So Far</p>
        </div>

        {/* Project Highlight: Termux CLI Agent */}
        <Card className="glass-card overflow-hidden border-primary/20 group cursor-default animate-fade-in-left flex flex-col lg:flex-row min-h-[500px]">
          <div className="lg:w-1/2 relative bg-background overflow-hidden min-h-[300px]">
            <Image 
              src={aiImg?.imageUrl || ''} 
              alt="Termux CLI Agent" 
              fill 
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
              data-ai-hint="coding terminal"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <Badge className="bg-primary text-background font-code font-bold px-3 py-1">V1.0 PROTOTYPE</Badge>
              <h3 className="text-2xl md:text-4xl font-headline font-bold flex items-center gap-4">
                <Terminal className="w-8 h-8 text-primary" />
                Termux CLI AI Agent
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light italic">
                "An autonomous orchestrator designed for deep filesystem interaction directly via the command line. Capable of writing code, analyzing structures, and orchestrating processes."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileCode, label: 'CODE WRITER', desc: 'Direct code generation' },
                { icon: Search, label: 'FILE ANALYZER', desc: 'Contextual code reading' },
                { icon: ListChecks, label: 'TASK PLANNER', desc: 'Autonomous heuristics' },
                { icon: Box, label: 'ORCHESTRATOR', desc: 'Process management' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary font-code tracking-widest">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Other Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Chatbot Collection */}
          <Card className="glass-card overflow-hidden border-primary/20 group cursor-default animate-fade-in-right flex flex-col">
            <div className="h-48 md:h-80 relative bg-background overflow-hidden">
              <Image 
                src={chatImg?.imageUrl || ''} 
                alt="Chatbot Collection" 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 ease-out"
                data-ai-hint="artificial intelligence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <CardHeader className="relative -mt-10 bg-card/40 backdrop-blur-3xl mx-8 rounded-t-3xl border-t border-x border-primary/20 p-8">
              <CardTitle className="flex items-center gap-4 text-xl md:text-3xl font-headline font-bold">
                <BrainCircuit className="w-8 h-8 text-primary" />
                Neural Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-6 space-y-8 flex-1">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light italic">
                "A collection of customized intelligence nodes built for conversational automation and GenAI tasks like image and token generation."
              </p>
              <div className="flex flex-wrap gap-3">
                {['Image Gen', 'Token Gen', 'GenKit', 'Firebase', 'TypeScript', 'Gemini'].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[10px] md:text-xs font-code px-4 py-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Status Message */}
          <Card className="glass-card border-primary/40 bg-primary/5 flex flex-col justify-center items-center text-center p-8 md:p-12 space-y-6">
            <div className="p-5 rounded-full bg-primary/20 text-primary animate-pulse">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl md:text-2xl font-headline font-bold text-primary uppercase">Environment Restricted</h4>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed italic font-light">
                Current output is limited by an outdated environment and a lack of tools. We are waiting for critical hardware accessories to scale our vision.
              </p>
            </div>
          </Card>
        </div>

        {/* Guided Navigation */}
        <div className="pt-24 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <div className="w-full flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h4 className="text-[10px] md:text-xs font-code font-bold text-primary tracking-[0.4em] uppercase whitespace-nowrap">Access Next Module</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/music" className="group relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Button size="lg" className="relative h-20 md:h-24 px-12 md:px-20 glass-card border-primary/30 group hover:border-primary/80 transition-all duration-500 flex items-center gap-6 overflow-hidden rounded-full">
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-code tracking-[0.3em] text-primary/60 uppercase">Node 03</span>
                <span className="text-xl md:text-3xl font-display font-bold tracking-tighter">VOCAL JOURNEY</span>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                <Music className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </div>
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
