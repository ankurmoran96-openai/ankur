"use client";

import React, { useState, useEffect } from 'react';
import { Menu, Cpu, Music, User, Flame, ChevronRight, LayoutGrid } from 'lucide-react';
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
    { name: 'Identity', href: '/about', icon: User, desc: 'Profile' },
    { name: 'Neural Lab', href: '/ai', icon: Cpu, desc: 'Systems' },
    { name: 'Harmonics', href: '/music', icon: Music, desc: 'Vocals' },
    { name: 'Manifesto', href: '/manifesto', icon: Flame, desc: 'Strategy' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-3",
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-md flex items-center justify-center transition-all group-hover:border-primary/50 group-hover:bg-primary/20">
            <span className="font-display font-bold text-primary text-sm">AM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-display font-bold tracking-tighter uppercase text-foreground/90 leading-none">Empire Core</span>
            <span className="text-[8px] font-code text-primary tracking-[0.3em] uppercase mt-1">Status: Active</span>
          </div>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:bg-white/5 border border-white/5 rounded-full transition-all group">
              <LayoutGrid className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md bg-card/95 backdrop-blur-3xl border-l border-white/5 p-0 flex flex-col">
            <div className="scanline" />
            <div className="p-10 flex-1 flex flex-col justify-center">
               <SheetHeader className="mb-12">
                 <div className="text-primary font-code text-[9px] tracking-[0.6em] uppercase mb-4">System Directory</div>
                 <SheetTitle className="text-5xl font-display font-bold tracking-tighter uppercase">Menu</SheetTitle>
                 <SheetDescription className="sr-only">Main navigation hub for Ankur Moran's portfolio.</SheetDescription>
               </SheetHeader>
               
               <div className="grid gap-3">
                 {navLinks.map((link) => (
                   <Link
                     key={link.name}
                     href={link.href}
                     className={cn(
                       "group relative flex items-center justify-between p-6 rounded-lg transition-all duration-500 border",
                       pathname === link.href 
                         ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(255,59,59,0.1)]" 
                         : "bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10"
                     )}
                   >
                     <div className="flex items-center gap-6">
                       <div className={cn(
                         "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                         pathname === link.href ? "bg-primary text-background" : "bg-white/5 text-primary/60"
                       )}>
                        <link.icon className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-xl font-headline font-bold uppercase tracking-tight">{link.name}</p>
                         <p className="text-[10px] font-code tracking-widest uppercase text-muted-foreground">{link.desc}</p>
                       </div>
                     </div>
                     <ChevronRight className={cn("w-5 h-5 transition-all group-hover:translate-x-1", pathname === link.href ? "text-primary" : "text-muted-foreground")} />
                   </Link>
                 ))}
               </div>
            </div>
            
            <div className="p-8 border-t border-white/5 bg-black/20 flex justify-between items-center">
               <span className="text-[9px] font-code text-muted-foreground tracking-widest">Build v2.5.MARS</span>
               <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
               </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}