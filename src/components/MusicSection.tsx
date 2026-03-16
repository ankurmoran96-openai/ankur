"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Mic2, Star, Loader2, Flame, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function MusicSection() {
  const rahmanImg = PlaceHolderImages.find(img => img.id === 'ar-rahman');
  const weekndImg = PlaceHolderImages.find(img => img.id === 'the-weeknd');
  const vocalImg = PlaceHolderImages.find(img => img.id === 'vocal-practice');

  const influences = [
    { name: 'A.R. Rahman', genre: 'Contemporary', img: rahmanImg?.imageUrl },
    { name: 'The Weeknd', genre: 'Synth-Pop', img: weekndImg?.imageUrl },
    { name: 'Arctic Monkeys', genre: 'Indie Rock', img: 'https://picsum.photos/seed/arctic/400/400' },
    { name: 'Justin Bieber', genre: 'Pop', img: 'https://picsum.photos/seed/jb/400/400' }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="text-primary font-code text-xs tracking-[0.5em] uppercase">Frequency Node</div>
          <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase flex items-center justify-center gap-8">
            Harmonics
            <span className="css-smiley w-[0.8em] h-[0.8em]">
              <span className="smiley-mouth"></span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Card className="lg:col-span-2 glass-card border-white/5 bg-white/[0.02] p-12 space-y-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
              <Mic2 className="w-96 h-96 text-primary" />
            </div>
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
              <div className="space-y-1">
                <h4 className="text-4xl font-headline font-bold uppercase">Training Log</h4>
                <p className="text-primary/60 font-code text-xs tracking-widest uppercase">System Growth: Ongoing</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed font-light italic border-l-2 border-primary/20 pl-8">
                  "Refining sound and expression for 3 months. A life-long commitment to technical harmonic excellence."
                </p>
                <div className="flex gap-12">
                  <div className="space-y-1">
                    <p className="text-4xl font-display font-bold text-primary">3M</p>
                    <p className="text-[10px] font-code uppercase tracking-widest text-muted-foreground">Elapsed</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl font-display font-bold text-primary">∞</p>
                    <p className="text-[10px] font-code uppercase tracking-widest text-muted-foreground">Vision</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/5 group">
                 <Image 
                  src={vocalImg?.imageUrl || ''} 
                  alt="Vocal Practice" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  data-ai-hint="microphone music"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                 <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-code text-primary uppercase tracking-[0.2em]">Analyzing frequencies...</span>
                    <div className="flex gap-1 items-end h-4">
                      <div className="w-1 h-2 bg-primary animate-bounce" />
                      <div className="w-1 h-4 bg-primary animate-bounce delay-75" />
                      <div className="w-1 h-3 bg-primary animate-bounce delay-150" />
                    </div>
                 </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card bg-white/[0.02] border-white/5 p-12 space-y-8 flex flex-col">
            <h4 className="text-2xl font-headline font-bold uppercase flex items-center gap-4 tracking-tight border-b border-white/5 pb-6">
              <Star className="w-6 h-6 text-primary fill-primary" />
              Influences
            </h4>
            <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-4">
              {influences.map((artist, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-transparent hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/5 relative shrink-0">
                    <Image src={artist.img || ''} alt={artist.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" data-ai-hint="music artist" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-sm font-headline tracking-tight">{artist.name}</h5>
                    <p className="text-[10px] text-primary/60 font-code uppercase mt-1">{artist.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="pt-24 flex flex-col items-center space-y-12">
          <div className="w-full flex items-center gap-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-[10px] font-code text-primary tracking-[0.6em] uppercase">Final Directive</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/manifesto" className="group">
            <Button size="lg" className="h-24 px-16 glass-card bg-primary/5 hover:bg-primary hover:text-background border-primary/20 rounded-full transition-all duration-700 flex items-center gap-8 group">
              <div className="text-left">
                <p className="text-[9px] font-code tracking-[0.4em] opacity-60 mb-1 uppercase">Final Node</p>
                <p className="text-4xl font-display font-bold tracking-tighter uppercase">Manifesto</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center transition-all group-hover:bg-background group-hover:text-primary">
                <Flame className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}