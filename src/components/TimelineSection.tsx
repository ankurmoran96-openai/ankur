"use client";

import { Calendar, Rocket, Target, Shield, Cpu } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    title: "Origins",
    date: "2011",
    content: "The start of the journey. Initial curiosity in music and early computing systems.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Neural Lab",
    date: "2023",
    content: "Developing Termux CLI agents and managing Telegram bots. Mastering AI/ML fundamentals.",
    category: "Design",
    icon: Cpu,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Harmonics",
    date: "Ongoing",
    content: "Consistently practicing vocals and exploring global music influences.",
    category: "Development",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "IOCL Core",
    date: "Future",
    content: "Securing stable infrastructure through formal education and professional placement.",
    category: "Testing",
    icon: Shield,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Empire",
    date: "Vision",
    content: "Building the AI/ML company. Investing 20% to scale innovation and helpful robotics.",
    category: "Release",
    icon: Target,
    relatedIds: [4],
    status: "pending" as const,
    energy: 20,
  },
];

export function TimelineSection() {
  return (
    <section className="w-full relative py-6 md:py-12 bg-transparent overflow-hidden border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-0 md:mb-4 px-4"
      >
        <h3 className="text-[9px] md:text-[10px] font-code text-primary uppercase tracking-[0.5em] md:tracking-[0.6em] mb-1 md:mb-2">Tactical Roadmap</h3>
        <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tighter">
          Empire <span className="text-primary/60">Timeline</span>
        </h2>
      </motion.div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
