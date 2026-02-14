
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
    <section id="ai" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">
        <div className="text-center space-y-3 md:space-y-4 animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[9px] md:text-[10px] font-code uppercase tracking-[0.4em]">
            <Sparkles className="w-3 h-3" />
            Neural Infrastructure
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter">INTELLIGENT SYSTEMS</h2>
          <p className="text-muted-foreground font-code text-[10px] md:text-sm tracking-widest uppercase">Projects Deployment History</p>
        </div>

        {/* Environment Status Disclaimer */}
        <Card className="glass-card border-primary/40 bg-primary/5 mb-8 md:mb-12 animate-fade-in-left">
          <CardContent className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <div className="p-4 md:p-5 rounded-2xl bg-primary/20 text-primary animate-pulse">
              <AlertCircle className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <h4 className="text-lg md:text-2xl font-headline font-bold text-primary flex items-center justify-center md:justify-start gap-2 md:gap-3">
                STATUS: RESOURCE THROTTLED
                <Clock className="w-4 h-4 md:w-5 md:h-5 animate-spin-slow" />
              </h4>
              <p className="text-xs md:text-lg text-muted-foreground leading-relaxed italic font-light">
                Current development is limited by a lack of advanced tools and an outdated environment. We are waiting for critical accessories to scale our vision.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Termux CLI Agent */}
          <Card className="glass-card overflow-hidden border-primary/20 group cursor-default animate-fade-in-left flex flex-col">
            <div className="h-48 md:h-80 relative bg-background overflow-hidden">
              <Image 
                src={aiImg?.imageUrl || ''} 
                alt="Termux CLI Agent" 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 ease-out"
                data-ai-hint="coding terminal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4 md:top-8 md:left-8">
                <Badge className="bg-primary text-background font-code font-bold px-3 py-0.5 md:px-4 md:py-1 shadow-2xl shadow-primary/40 text-[10px] md:text-xs">V1.0 PROTOTYPE</Badge>
              </div>
            </div>
            <CardHeader className="relative -mt-10 md:-mt-16 bg-card/40 backdrop-blur-3xl mx-4 md:mx-8 rounded-t-2xl md:rounded-t-3xl border-t border-x border-primary/20 p-6 md:p-8">
              <CardTitle className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-headline font-bold">
                <Terminal className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                Termux CLI Agent
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-10 pt-4 md:pt-6 space-y-6 md:space-y-8 flex-1">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light italic">
                "An autonomous orchestrator capable of writing, reading, and analyzing code directly from the command line."
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {[
                  { icon: Terminal, label: 'FILESYSTEM', desc: 'I/O Operations' },
                  { icon: BrainCircuit, label: 'CONTEXT', desc: 'Neural Analysis' },
                  { icon: Workflow, label: 'HEURISTICS', desc: 'Task Flow' },
                  { icon: Layout, label: 'PROCESS', desc: 'Logic Control' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-primary font-code tracking-widest">
                      <item.icon className="w-3 h-3 md:w-4 md:h-4" />
                      {item.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-light">{item.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
            <CardHeader className="relative -mt-10 md:-mt-16 bg-card/40 backdrop-blur-3xl mx-4 md:mx-8 rounded-t-2xl md:rounded-t-3xl border-t border-x border-primary/20 p-6 md:p-8">
              <CardTitle className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-headline font-bold">
                <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                Neural Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-10 pt-4 md:pt-6 space-y-6 md:space-y-8 flex-1">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light italic">
                "A collection of customized intelligence nodes built for conversational automation and context handling."
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 pt-2">
                {['GenKit', 'Firebase', 'TypeScript', 'Python', 'React', 'Gemini'].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[9px] md:text-xs font-code px-3 py-1 md:px-4 md:py-1.5 hover:bg-primary/20 transition-all">
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
