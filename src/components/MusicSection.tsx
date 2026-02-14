"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Mic2, Star, PlayCircle, Loader2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    <section id="music" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 className="text-primary font-code font-bold text-sm tracking-[0.4em] uppercase">Vocal Training</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tighter flex items-center justify-center gap-6">
            BUILDING MY EMPIRE
            <span className="css-smiley">
              <span className="smiley-mouth"></span>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 glass-card border-primary/20 relative overflow-hidden animate-fade-in-left">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Mic2 className="w-80 h-80 text-primary" />
            </div>
            <CardContent className="p-10 sm:p-14 space-y-10 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-primary/20 flex items-center justify-center animate-pulse">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
                <div>
                  <h4 className="text-3xl font-headline font-bold">Development Status</h4>
                  <p className="text-primary/70 font-code text-xs tracking-widest uppercase mt-1">Practice Phase: Active</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    Music is the sanctuary where I refine my focus. I am currently dedicated to vocal practice, drawing from the legendary compositions of A.R. Rahman and the modern textures of The Weeknd.
                  </p>
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 italic text-sm text-primary font-light">
                    "The voice is not yet mastered—we are still practicing, refining, and growing with every session."
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <div className="text-4xl font-bold text-primary font-headline tracking-tighter">2+</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-code">Daily Hours</div>
                    </div>
                    <div className="w-px h-12 bg-primary/20" />
                    <div className="flex flex-col">
                      <div className="text-4xl font-bold text-primary font-headline tracking-tighter">50+</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-code">Repertoire</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-60 rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                   <Image 
                    src={vocalImg?.imageUrl || ''} 
                    alt="Vocal Practice" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint="microphone music"
                   />
                   <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur-md p-3 rounded-2xl border border-primary/10">
                      <div className="text-[10px] font-code text-primary">BUFFERING FREQUENCIES...</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-primary animate-bounce" />
                        <div className="w-1 h-5 bg-primary animate-bounce delay-75" />
                        <div className="w-1 h-2 bg-primary animate-bounce delay-150" />
                      </div>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 flex flex-col animate-fade-in-right">
            <div className="p-8 border-b border-primary/20 bg-primary/5">
              <h4 className="text-xl font-headline font-bold flex items-center gap-3 tracking-tight">
                <Star className="w-5 h-5 text-primary fill-primary animate-pulse" />
                NEURAL INFLUENCES
              </h4>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[450px] p-6 space-y-4 custom-scrollbar">
              {influences.map((artist, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-primary/10 transition-all duration-300 group cursor-default border border-transparent hover:border-primary/20">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-primary/20 group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src={artist.img || ''} 
                      alt={artist.name} 
                      width={56} 
                      height={56} 
                      className="object-cover"
                      data-ai-hint="music artist"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm font-headline tracking-tight">{artist.name}</h5>
                    <p className="text-[10px] text-primary/60 font-code uppercase tracking-widest mt-1">{artist.genre}</p>
                  </div>
                  <Music className="w-5 h-5 ml-auto text-primary/20 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
