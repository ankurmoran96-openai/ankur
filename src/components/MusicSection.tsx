
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
    { name: 'A.R. Rahman', genre: 'Classical/Contemporary', img: rahmanImg?.imageUrl },
    { name: 'Zubeen Garg', genre: 'Folk/Modern', img: 'https://picsum.photos/seed/zubeen/400/400' },
    { name: 'Justin Bieber', genre: 'Pop', img: 'https://picsum.photos/seed/jb/400/400' },
    { name: 'The Weeknd', genre: 'R&B/Synth-Pop', img: weekndImg?.imageUrl },
    { name: 'Arctic Monkeys', genre: 'Indie Rock', img: 'https://picsum.photos/seed/arctic/400/400' }
  ];

  return (
    <section id="music" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center space-y-3 md:space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 className="text-primary font-code font-bold text-xs md:text-sm tracking-[0.4em] uppercase">Vocal Training</h2>
          <h3 className="text-3xl md:text-6xl font-display font-bold tracking-tighter flex items-center justify-center flex-wrap gap-4 md:gap-6">
            BUILDING MY EMPIRE
            <span className="css-smiley w-[1.2em] h-[1.2em] text-2xl md:text-4xl">
              <span className="smiley-mouth"></span>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          <Card className="lg:col-span-2 glass-card border-primary/20 relative overflow-hidden animate-fade-in-left">
            <div className="absolute top-0 right-0 p-6 md:p-12 opacity-5 pointer-events-none">
              <Mic2 className="w-40 h-40 md:w-80 md:h-80 text-primary" />
            </div>
            <CardContent className="p-6 md:p-14 space-y-8 md:space-y-10 relative z-10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-primary/20 flex items-center justify-center animate-pulse">
                  <Loader2 className="w-6 h-6 md:w-8 md:h-8 text-primary animate-spin" />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-headline font-bold">Development Status</h4>
                  <p className="text-primary/70 font-code text-[9px] md:text-xs tracking-widest uppercase mt-0.5 md:mt-1">Ongoing Growth</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                    I have dedicated 3 months of consistent practice to my vocal journey so far. This is only the beginning of a lifelong commitment to refining my sound and harmonic expression.
                  </p>
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/20 italic text-xs md:text-sm text-primary font-light">
                    "The voice is not yet mastered—we are still practicing and growing with every session."
                  </div>
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex flex-col">
                      <div className="text-3xl md:text-4xl font-bold text-primary font-headline tracking-tighter">3 Mo</div>
                      <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-code">Progress</div>
                    </div>
                    <div className="w-px h-10 md:h-12 bg-primary/20" />
                    <div className="flex flex-col">
                      <div className="text-3xl md:text-4xl font-bold text-primary font-headline tracking-tighter">∞</div>
                      <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-code">Vision</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 md:h-60 rounded-2xl md:rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                   <Image 
                    src={vocalImg?.imageUrl || ''} 
                    alt="Vocal Practice" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint="microphone music"
                   />
                   <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                   <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-background/80 backdrop-blur-md p-2 md:p-3 rounded-xl md:rounded-2xl border border-primary/10">
                      <div className="text-[8px] md:text-[10px] font-code text-primary">REFINING FREQUENCIES...</div>
                      <div className="flex gap-1">
                        <div className="w-0.5 h-2 md:h-3 bg-primary animate-bounce" />
                        <div className="w-0.5 h-3 md:h-5 bg-primary animate-bounce delay-75" />
                        <div className="w-0.5 h-1.5 md:h-2 bg-primary animate-bounce delay-150" />
                      </div>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 flex flex-col animate-fade-in-right">
            <div className="p-6 md:p-8 border-b border-primary/20 bg-primary/5">
              <h4 className="text-lg md:text-xl font-headline font-bold flex items-center gap-3 tracking-tight">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary animate-pulse" />
                NEURAL INFLUENCES
              </h4>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[350px] md:max-h-[450px] p-4 md:p-6 space-y-3 md:space-y-4 custom-scrollbar">
              {influences.map((artist, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-primary/10 transition-all duration-300 group cursor-default border border-transparent hover:border-primary/20">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden border border-primary/20 group-hover:scale-105 transition-transform duration-500 relative shrink-0">
                    <Image 
                      src={artist.img || ''} 
                      alt={artist.name} 
                      fill
                      className="object-cover"
                      data-ai-hint="music artist"
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-xs md:text-sm font-headline tracking-tight truncate">{artist.name}</h5>
                    <p className="text-[8px] md:text-[10px] text-primary/60 font-code uppercase tracking-widest mt-0.5 truncate">{artist.genre}</p>
                  </div>
                  <Music className="w-4 h-4 md:w-5 md:h-5 ml-auto text-primary/20 group-hover:text-primary transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Guided Navigation */}
        <div className="pt-24 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <div className="w-full flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h4 className="text-[10px] md:text-xs font-code font-bold text-primary tracking-[0.4em] uppercase whitespace-nowrap">Access Final Module</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <Link href="/manifesto" className="group relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Button size="lg" className="relative h-20 md:h-24 px-12 md:px-20 glass-card border-primary/30 group hover:border-primary/80 transition-all duration-500 flex items-center gap-6 overflow-hidden rounded-full">
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-code tracking-[0.3em] text-primary/60 uppercase">Node 04</span>
                <span className="text-xl md:text-3xl font-display font-bold tracking-tighter">THE MANIFESTO</span>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                <Flame className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              </div>
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
