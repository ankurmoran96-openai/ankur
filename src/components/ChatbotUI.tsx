
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Send, Bot, User, Loader2 } from 'lucide-react';
import { ankurInteractivePortfolioChatbot } from '@/ai/flows/ankur-interactive-portfolio-chatbot';
import { cn } from '@/lib/utils';

export function ChatbotUI() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I'm Ankur's AI assistant. Ask me anything about his projects, music, or goals!" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const result = await ankurInteractivePortfolioChatbot({ question: userMessage });
      setMessages(prev => [...prev, { role: 'bot', text: result.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again later!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chat" className="py-24 px-6 bg-secondary/5">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-primary font-headline font-bold text-lg tracking-widest uppercase">Experience Intelligence</h2>
          <h3 className="text-4xl font-headline font-bold">The Interactive Echo</h3>
        </div>

        <Card className="glass-card border-primary/20 overflow-hidden flex flex-col h-[600px] shadow-2xl neon-border">
          <CardHeader className="bg-primary/10 border-b border-primary/20 flex flex-row items-center justify-between p-6">
            <CardTitle className="flex items-center gap-3 text-xl font-headline">
              <div className="p-2 rounded-full bg-primary/20 text-primary">
                <Bot className="w-6 h-6" />
              </div>
              Ankur's AI Assistant
            </CardTitle>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={cn(
                "flex w-full gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
                msg.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-primary/20",
                  msg.role === 'user' ? "bg-secondary text-foreground" : "bg-primary/20 text-primary"
                )}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div className={cn(
                  "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                  msg.role === 'user' 
                    ? "bg-secondary border border-primary/10 text-foreground rounded-tr-none" 
                    : "bg-primary/10 border border-primary/30 text-primary-foreground rounded-tl-none"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                </div>
              </div>
            )}
          </CardContent>

          <form onSubmit={handleSubmit} className="p-4 bg-background/50 border-t border-primary/20 flex gap-4">
            <Input 
              placeholder="Ask about my projects, music or goals..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-secondary/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-full h-12 px-6"
            />
            <Button type="submit" disabled={loading} className="rounded-full w-12 h-12 p-0 bg-primary text-background hover:bg-primary/90 glow-button">
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
