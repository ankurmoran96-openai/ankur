"use client";

import { Calendar, Rocket, Target, Cpu, GraduationCap, BrainCircuit, Music } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    title: "Origins",
    date: "2011",
    content: "The start of the journey. Early interest in digital orchestration and vocal performance.",
    category: "Origins",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Neural Lab",
    date: "Class 9",
    content: "Mastered Termux agents and Daisy AI basics. Proven AI builds from a mobile phone.",
    category: "Development",
    icon: BrainCircuit,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Class 10",
    date: "2025",
    content: "Current Node. GitHub Repo Architect and Daisy V2. Performance-optimized infrastructure.",
    category: "Deployment",
    icon: Cpu,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Polytechnic",
    date: "Future",
    content: "Strategic Diploma. Anchoring 4+ years of built-on-phone experience with formal certification.",
    category: "Certification",
    icon: GraduationCap,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Empire",
    date: "Vision",
    content: "Founding the AI/ML company. Using years of accumulated build experience to lead the industry.",
    category: "Vision",
    icon: Target,
    relatedIds: [4],
    status: "pending" as const,
    energy: 20,
  },
];

export function TimelineSection() {
  return (
    <section className="w-full relative py-12 md:py-24 bg-transparent overflow-hidden border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-6"
      >
        <h3 className="text-[10px] font-code text-primary uppercase tracking-[0.6em] mb-4">Tactical Roadmap</h3>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
          Career <span className="text-primary/60">Node</span>
        </h2>
      </motion.div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
