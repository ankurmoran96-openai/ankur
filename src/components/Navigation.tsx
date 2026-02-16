
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Music, User, Flame } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Cpu },
    { name: 'Profile', href: '/about', icon: User },
    { name: 'Neural Lab', href: '/ai', icon: Cpu },
    { name: 'Vocals', href: '/music', icon: Music },
    { name: 'Manifesto', href: '/manifesto', icon: Flame },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-6 py-3 md:py-4",
      scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-headline font-bold text-primary flex items-center gap-2 group">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-primary flex items-center justify-center neon-border group-hover:scale-110 transition-transform">
            <span className="text-[10px] md:text-xs">AM</span>
          </div>
          <span className="tracking-tighter uppercase text-sm md:text-2xl">Ankur Moran</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all flex items-center gap-2 group relative py-1",
                pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              <link.icon className={cn(
                "w-4 h-4 transition-opacity",
                pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )} />
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary animate-in fade-in zoom-in duration-500" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-[-1] flex flex-col items-center justify-center gap-8 transition-transform duration-500",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-3xl font-headline font-bold transition-colors flex items-center gap-4",
              pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
            )}
          >
            <link.icon className="w-8 h-8" />
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
