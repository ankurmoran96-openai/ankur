
import React from 'react';
import { Github, Twitter, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-primary/10 bg-background/50 backdrop-blur-sm px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-headline font-bold text-primary tracking-tight">ANKUR MORAN</div>
          <p className="text-sm text-muted-foreground mt-2 font-body font-light">Building the future, one echo at a time.</p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: Github, href: '#' },
            { icon: Instagram, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Mail, href: 'mailto:contact@ankur.tech' }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary transition-all hover:scale-110"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Ankur Moran. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
