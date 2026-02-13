"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Music, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#about', icon: User },
    { name: 'Neural Lab', href: '#ai', icon: Cpu },
    { name: 'Vocals', href: '#music', icon: Music },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-headline font-bold text-primary flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center neon-border">
            <span className="text-xs">AM</span>
          </div>
          <span className="tracking-tighter uppercase">Ankur Moran</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <link.icon className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-headline font-bold text-foreground hover:text-primary transition-colors flex items-center gap-4"
          >
            <link.icon className="w-8 h-8 text-primary" />
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
