
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, BrainCircuit, Workflow, Layout } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AISection() {
  const aiImg = PlaceHolderImages.find(img => img.id === 'ai-agent-demo');
  const chatImg = PlaceHolderImages.find(img => img.id === 'chatbot-collection');

  return (
    <section id="ai" className="py-24 px-6 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-primary font-headline font-bold text-lg tracking-widest uppercase">Intelligent Systems</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Neural Architecture</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Termux CLI Agent */}
          <Card className="glass-card overflow-hidden border-primary/20 group hover:border-primary/60 transition-all duration-500">
            <div className="h-64 relative bg-background overflow-hidden">
              <Image 
                src={aiImg?.imageUrl || ''} 
                alt="Termux CLI Agent" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="coding terminal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-background font-bold">Flagship Project</Badge>
              </div>
            </div>
            <CardHeader className="relative -mt-12 bg-card/80 backdrop-blur-md mx-6 rounded-t-xl border-t border-x border-primary/20">
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Termux CLI AI Agent
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-4">
              <p className="text-muted-foreground">
                A highly optimized mini AI agent designed for the Termux environment. capable of autonomous file manipulation and process orchestration.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Terminal, label: 'Write/Read' },
                  { icon: BrainCircuit, label: 'Analyze' },
                  { icon: Workflow, label: 'Plan' },
                  { icon: Layout, label: 'Orchestrate' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-primary/80">
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chatbot Collection */}
          <Card className="glass-card overflow-hidden border-primary/20 group hover:border-primary/60 transition-all duration-500">
            <div className="h-64 relative bg-background overflow-hidden">
              <Image 
                src={chatImg?.imageUrl || ''} 
                alt="Chatbot Collection" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="artificial intelligence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <CardHeader className="relative -mt-12 bg-card/80 backdrop-blur-md mx-6 rounded-t-xl border-t border-x border-primary/20">
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-primary" />
                Specialized Chatbots
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-4">
              <p className="text-muted-foreground">
                Developed several niche-specific chatbots using advanced RAG techniques and custom LLM fine-tuning to provide contextual awareness.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['GenKit', 'Firebase', 'TypeScript', 'Python', 'React'].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px]">
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
