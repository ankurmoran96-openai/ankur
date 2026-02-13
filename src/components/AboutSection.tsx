import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Target, Calendar, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-headline font-bold text-lg tracking-widest uppercase">The Visionary</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Developer by day, <br />vocalist by night.
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based on my journey since June 9, 2011, I've spent my teen years exploring the intersections of logical code and emotional melodies. At 14, I'm not just learning to code; I'm building tools that think and songs that feel.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Born</p>
                  <p className="text-sm font-semibold">June 9, 2011</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="text-sm font-semibold">AI/ML & Music</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Rocket className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-headline font-bold">Future CEO</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My ultimate goal is to launch an AI/ML company that revolutionizes how we interact with technology.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 hover:border-primary/50 transition-colors md:mt-8">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-headline font-bold">Empire Core</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building my own space for experimentation—where every project is an echo of my creative vision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
