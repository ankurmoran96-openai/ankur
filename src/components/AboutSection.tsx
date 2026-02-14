import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Target, Calendar, MapPin, Brain } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-fade-in-left">
            <div className="space-y-4">
              <h2 className="text-primary font-code font-bold text-sm tracking-[0.3em] uppercase">Executive Summary</h2>
              <h3 className="text-5xl md:text-6xl font-headline font-bold leading-[0.9] tracking-tighter">
                Logic and <br /><span className="text-primary/80">Melody.</span>
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light italic">
              "Born on June 9, 2011, I am architecting a future where intelligence is seamless. At 14, my vision extends beyond code—it's about creating an ecosystem where technology serves humanity through practical, high-impact products."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-code">Inception</p>
                  <p className="text-sm font-semibold font-headline">June 9, 2011</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-code">Strategic Focus</p>
                  <p className="text-sm font-semibold font-headline">Applied AI & Robotics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-right">
            <Card className="glass-card border-primary/20 group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-headline font-bold">Future CEO</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    I will not just train models; I will use the world's most advanced intelligence to build tangible products. My focus is on robotics and autonomous agents that solve real-world problems in our daily lives.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 group md:mt-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-headline font-bold">The Empire</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    Every project is a brick in my empire. I am building a legacy of utility, where AI isn't just a chatbot, but a partner in physical and digital labor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
