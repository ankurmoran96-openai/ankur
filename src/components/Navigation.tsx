"use client";

import React, { useState, useEffect } from 'react';
import { Menu, Cpu, Music, User, Flame, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '/about', icon: User, desc: 'The Core Identity' },
    { name: 'Neural Lab', href: '/ai', icon: Cpu, desc: 'AI Infrastructure' },
    { name: 'Vocal Journey', href: '/music', icon: Music, desc: 'Harmonic Development' },
    { name: 'Manifesto', href: '/manifesto', icon: Flame, desc: 'Strategic Roadmap' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-2xl" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-display font-bold text-primary flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg border-2 border-primary flex items-center justify-center neon-border group-hover:scale-110 transition-all bg-primary/5">
            <span className="text-[11px] font-bold">AM</span>
          </div>
          <span className="tracking-tighter uppercase text-sm hidden sm:block font-bold">Empire Core</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-lg w-12 h-12 border border-primary/10 transition-all">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md bg-background border-l border-primary/20 p-0 flex flex-col">
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center space-y-10">
               <SheetHeader className="space-y-4 text-left">
                 <p className="text-primary font-code text-[10px] tracking-[0.5em] uppercase opacity-70">Infrastructure Nodes</p>
                 <SheetTitle className="text-4xl font-display font-bold tracking-tighter text-foreground uppercase">DIRECTORY</SheetTitle>
                 <SheetDescription className="sr-only">Access the main navigation nodes of Ankur Moran's portfolio infrastructure.</SheetDescription>
               </SheetHeader>
               
               <div className="space-y-4">
                 {navLinks.map((link) => (
                   <Link
                     key={link.name}
                     href={link.href}
                     className={cn(
                       "group flex items-center justify-between p-6 rounded-xl border transition-all duration-500",
                       pathname === link.href 
                         ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(255,59,59,0.2)]" 
                         : "bg-secondary/50 border-primary/10 hover:border-primary/40 hover:bg-primary/5"
                     )}
                   >
                     <div className="flex items-center gap-6">
                       <link.icon className={cn("w-7 h-7", pathname === link.href ? "text-primary-foreground" : "text-primary")} />
                       <div>
                         <p className="text-xl font-headline font-bold uppercase tracking-tight">{link.name}</p>
                         <p className={cn("text-[10px] font-code tracking-widest uppercase opacity-60", pathname === link.href ? "text-primary-foreground" : "text-muted-foreground")}>{link.desc}</p>
                       </div>
                     </div>
                     <ChevronRight className={cn("w-5 h-5 group-hover:translate-x-2 transition-transform", pathname === link.href ? "text-primary-foreground" : "text-primary")} />
                   </Link>
                 ))}
               </div>
            </div>
            
            <div className="p-8 border-t border-primary/10 bg-card/30">
               <div className="flex justify-between items-center">
                 <p className="text-[10px] font-code text-muted-foreground uppercase tracking-widest">Build v2.5.0_Mars</p>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                 </div>
               </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}