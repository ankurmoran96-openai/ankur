
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Mic2, Star, PlayCircle } from 'lucide-react';
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
        <div className="text-center space-y-4">
          <h2 className="text-primary font-headline font-bold text-lg tracking-widest uppercase">The Vocal Journey</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Sonic Echoes</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 glass-card border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Mic2 className="w-64 h-64 text-primary" />
            </div>
            <CardContent className="p-8 sm:p-12 space-y-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-headline font-bold">Currently Practicing</h4>
                  <p className="text-muted-foreground italic">"Developing pitch perfection and vocal texture."</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Music is more than a hobby—it's my sanctuary. I consistently practice vocals, drawing inspiration from diverse legends. Whether it's the soulful melodies of A.R. Rahman or the synth-drenched vibes of The Weeknd, I strive for technical excellence.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Hours Daily</div>
                    </div>
                    <div className="w-px h-10 bg-primary/20" />
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Songs Learned</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-primary/20">
                   <Image 
                    src={vocalImg?.imageUrl || ''} 
                    alt="Vocal Practice" 
                    fill 
                    className="object-cover"
                    data-ai-hint="microphone music"
                   />
                   <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 flex flex-col">
            <div className="p-6 border-b border-primary/20">
              <h4 className="text-lg font-headline font-bold flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                Key Influences
              </h4>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[400px] p-4 space-y-3">
              {influences.map((artist, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20 group-hover:scale-110 transition-transform">
                    <Image 
                      src={artist.img || ''} 
                      alt={artist.name} 
                      width={48} 
                      height={48} 
                      className="object-cover"
                      data-ai-hint="music artist"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{artist.name}</h5>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{artist.genre}</p>
                  </div>
                  <Music className="w-4 h-4 ml-auto text-primary/40 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
