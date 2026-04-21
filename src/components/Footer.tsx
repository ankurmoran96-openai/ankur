import React from 'react';
import { Github, Instagram, Send, Cpu, Cloud } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-primary/10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,59,59,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-12 relative z-10 px-6">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="text-center md:text-left space-y-2">
            <div className="text-xl md:text-2xl font-headline font-bold text-primary tracking-tighter flex items-center justify-center md:justify-start gap-3">
              ANKUR MORAN
              <span className="css-smiley w-5 h-5 md:w-6 md:h-6 border-px">
                <span className="smiley-mouth"></span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-body font-light max-w-xs mx-auto md:mx-0">
              Founding the next generation of neural systems. V3.5_CLASS_10.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-3 md:gap-4">
              {[
                { icon: Github, href: 'https://github.com/ankurmoran96-openai', label: 'GitHub' },
                { icon: Instagram, href: 'https://instagram.com/git.push.ankur', label: 'Instagram' },
                { icon: Send, href: 'https://t.me/ankurslys', label: 'Telegram' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-lg border border-primary/20 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 bg-card/50"
                  title={social.label}
                >
                  <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-primary/5 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 text-[9px] md:text-[10px] font-code uppercase tracking-widest text-muted-foreground/60">
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-primary/60" />
              <span>Developed via AI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary/60">●</span>
              <span>Class 10 | Polytechnic Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-3 h-3 text-primary/60" />
              <span>Network: Netlify</span>
            </div>
          </div>
          <div className="text-[9px] md:text-[10px] text-muted-foreground/30 font-code uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Empire Infrastructure | All Nodes Active
          </div>
        </div>
      </div>
    </footer>
  );
}
