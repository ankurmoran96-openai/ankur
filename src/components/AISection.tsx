
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
        <div className="text-center space-y-4 animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-code uppercase tracking-[0.4em]">
            <Sparkles className="w-3 h-3" />
            Neural Infrastructure
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter">INTELLIGENT SYSTEMS</h2>
        </div>

        {/* Environment Status Disclaimer */}
        <Card className="glass-card border-primary/40 bg-primary/5 mb-12 animate-fade-in-left">
          <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="p-5 rounded-2xl bg-primary/20 text-primary animate-pulse">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-2xl font-headline font-bold text-primary flex items-center justify-center md:justify-start gap-3">
                PROJECT STATUS: RESOURCE THROTTLED
                <Clock className="w-5 h-5 animate-spin-slow" />
              </h4>
              <p className="text-muted-foreground leading-relaxed italic font-light text-lg">
                Current development is limited by a lack of advanced tooling and an environment that is outdated and repetitively stagnant. We are waiting for critical accessories to scale our vision and push the limits of what's possible.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Termux CLI Agent */}
          <Card className="glass-card overflow-hidden border-primary/20 group cursor-default animate-fade-in-left">
            <div className="h-80 relative bg-background overflow-hidden">
              <Image 
                src={aiImg?.imageUrl || ''} 
                alt="Termux CLI Agent" 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 ease-out"
                data-ai-hint="coding terminal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-8 left-8">
                <Badge className="bg-primary text-background font-code font-bold px-4 py-1 shadow-2xl shadow-primary/40">V1.0 PROTOTYPE</Badge>
              </div>
            </div>
            <CardHeader className="relative -mt-16 bg-card/40 backdrop-blur-3xl mx-8 rounded-t-3xl border-t border-x border-primary/20 p-8">
              <CardTitle className="flex items-center gap-4 text-3xl font-headline font-bold">
                <Terminal className="w-8 h-8 text-primary" />
                Termux CLI Agent
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-6 space-y-8">
              <p className="text-muted-foreground leading-relaxed font-light italic text-lg">
                "An autonomous orchestrator designed for high-performance terminal operations on edge devices."
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Terminal, label: 'FILESYSTEM', desc: 'Read/Write Operations' },
                  { icon: BrainCircuit, label: 'CONTEXT', desc: 'Neural Analysis' },
                  { icon: Workflow, label: 'HEURISTICS', desc: 'Task Orchestration' },
                  { icon: Layout, label: 'PROCESS', desc: 'Logic Control' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 p-4 rounded-2xl bg-primary/5 border border-primary/5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-primary font-code tracking-widest">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground font-light">{item.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chatbot Collection */}
          <Card className="glass-card overflow-hidden border-primary/20 group cursor-default animate-fade-in-right">
            <div className="h-80 relative bg-background overflow-hidden">
              <Image 
                src={chatImg?.imageUrl || ''} 
                alt="Chatbot Collection" 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 ease-out"
                data-ai-hint="artificial intelligence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <CardHeader className="relative -mt-16 bg-card/40 backdrop-blur-3xl mx-8 rounded-t-3xl border-t border-x border-primary/20 p-8">
              <CardTitle className="flex items-center gap-4 text-3xl font-headline font-bold">
                <BrainCircuit className="w-8 h-8 text-primary" />
                Neural Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-6 space-y-8">
              <p className="text-muted-foreground leading-relaxed font-light italic text-lg">
                "Customized intelligence nodes built on GenKit and Gemini for specific industrial automation."
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['GenKit', 'Firebase', 'TypeScript', 'Python', 'React', 'Gemini'].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-xs font-code px-4 py-1.5 hover:bg-primary/20 transition-all">
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
