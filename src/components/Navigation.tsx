
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Music, User, Flame, ChevronRight } from 'lucide-react';
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
    { name: 'Neural Lab', href: '/ai', icon: Cpu, desc: 'AI/ML Infrastructure' },
    { name: 'Vocal Journey', href: '/music', icon: Music, desc: 'Harmonic Development' },
    { name: 'Manifesto', href: '/manifesto', icon: Flame, desc: 'The Future Strategic Plan' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-display font-bold text-primary flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center neon-border group-hover:scale-110 transition-transform">
            <span className="text-[10px]">AM</span>
          </div>
          <span className="tracking-tighter uppercase text-lg hidden sm:block">Empire Core</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full w-12 h-12">
              <Menu size={28} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md bg-background/95 backdrop-blur-2xl border-l border-primary/20 p-0 overflow-hidden flex flex-col">
            <div className="p-6 md:p-12 flex-1 flex flex-col justify-center space-y-8 md:space-y-12">
               <SheetHeader className="space-y-2 md:space-y-4 text-left">
                 <p className="text-primary font-code text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-60">Navigation Nodes</p>
                 <SheetTitle className="text-3xl md:text-4xl font-display font-bold tracking-tighter text-foreground uppercase">DIRECTORY</SheetTitle>
                 <SheetDescription className="sr-only">Access the main navigation nodes of Ankur Moran's portfolio infrastructure.</SheetDescription>
               </SheetHeader>
               
               <div className="space-y-3 md:space-y-4">
                 {navLinks.map((link) => (
                   <Link
                     key={link.name}
                     href={link.href}
                     className={cn(
                       "group flex items-center justify-between p-4 md:p-6 rounded-2xl border transition-all duration-500",
                       pathname === link.href 
                         ? "bg-primary text-background border-primary" 
                         : "bg-primary/5 border-primary/10 hover:border-primary/40 hover:bg-primary/10"
                     )}
                   >
                     <div className="flex items-center gap-4 md:gap-6">
                       <link.icon className={cn("w-6 h-6 md:w-8 md:h-8", pathname === link.href ? "text-background" : "text-primary")} />
                       <div>
                         <p className="text-lg md:text-xl font-headline font-bold uppercase tracking-tight">{link.name}</p>
                         <p className={cn("text-[9px] md:text-xs font-code tracking-widest uppercase opacity-60", pathname === link.href ? "text-background" : "text-muted-foreground")}>{link.desc}</p>
                       </div>
                     </div>
                     <ChevronRight className={cn("w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform", pathname === link.href ? "text-background" : "text-primary")} />
                   </Link>
                 ))}
               </div>
            </div>
            
            <div className="p-6 md:p-12 border-t border-primary/10 bg-primary/5">
               <div className="flex justify-between items-center">
                 <p className="text-[10px] font-code text-muted-foreground uppercase tracking-widest">Empire Build v2.5</p>
                 <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75" />
                 </div>
               </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
