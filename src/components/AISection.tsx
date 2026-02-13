import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, BrainCircuit, Workflow, Layout, Sparkles, AlertCircle, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AISection() {
  const aiImg = PlaceHolderImages.find(img => img.id === 'ai-agent-demo');
  const chatImg = PlaceHolderImages.find(img => img.id === 'chatbot-collection');

  return (
    <section id="ai" className="py-24 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-code uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3 h-3" />
            Neural Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Intelligent Systems</h2>
        </div>

        {/* Environment Status Disclaimer */}
        <Card className="glass-card border-primary/30 bg-primary/5 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-2xl bg-primary/20 text-primary">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-xl font-headline font-bold text-primary flex items-center justify-center md:justify-start gap-2">
                System Status: Resource Constraints
                <Clock className="w-4 h-4 animate-spin-slow" />
              </h4>
              <p className="text-muted-foreground leading-relaxed italic max-w-3xl">
                Current projects are limited due to a lack of essential tools and an environment that is outdated and repetitively boring. Development is temporarily throttled as we wait for the necessary accessories to scale our vision.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Termux CLI Agent */}
          <Card className="glass-card overflow-hidden border-primary/20 group cursor-default">
            <div className="h-72 relative bg-background overflow-hidden">
              <Image 
                src={aiImg?.imageUrl || ''} 
                alt="Termux CLI Agent" 
                fill 
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                data-ai-hint="coding terminal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-6 left-6">
                <Badge className="bg-primary text-background font-bold px-3 py-1 shadow-lg shadow-primary/20">MASTER BRANCH</Badge>
              </div>
            </div>
            <CardHeader className="relative -mt-16 bg-card/40 backdrop-blur-xl mx-6 rounded-t-2xl border-t border-x border-primary/10 p-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Terminal className="w-6 h-6 text-primary" />
                Termux CLI AI Agent
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-6">
              <p className="text-muted-foreground leading-relaxed italic">
                "An autonomous orchestrator designed for mobile terminal environments, optimized for edge-device intelligence."
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Terminal, label: 'Write/Read', desc: 'File System Access' },
                  { icon: BrainCircuit, label: 'Analyze', desc: 'Code Context' },
                  { icon: Workflow, label: 'Plan', desc: 'Task Heuristics' },
                  { icon: Layout, label: 'Orchestrate', desc: 'Process Control' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 p-3 rounded-lg bg-primary/5 border border-primary/5 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary">
                      <item.icon className="w-3 h-3" />
                      {item.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chatbot Collection */}
          <Card className="glass-card overflow-hidden border-primary/20 group cursor-default">
            <div className="h-72 relative bg-background overflow-hidden">
              <Image 
                src={chatImg?.imageUrl || ''} 
                alt="Chatbot Collection" 
                fill 
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                data-ai-hint="artificial intelligence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <CardHeader className="relative -mt-16 bg-card/40 backdrop-blur-xl mx-6 rounded-t-2xl border-t border-x border-primary/10 p-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BrainCircuit className="w-6 h-6 text-primary" />
                Generative Agents
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-6">
              <p className="text-muted-foreground leading-relaxed italic">
                "Specialized conversational entities leveraging advanced RAG and custom fine-tuning for niche industrial applications."
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['GenKit', 'Firebase', 'TypeScript', 'Python', 'React', 'Gemini'].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[10px] px-3 py-1 hover:bg-primary/10 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
