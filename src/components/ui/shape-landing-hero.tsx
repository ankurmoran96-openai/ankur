
"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function HeroGeometric({
    badge = "System Online",
    title1 = "Ankur",
    title2 = "Moran",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-[60vh] md:min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-12"
                    >
                        <Circle className="h-1.5 w-1.5 fill-primary/80" />
                        <span className="text-[10px] md:text-sm text-white/60 tracking-wide font-code uppercase">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-7xl md:text-9xl font-display font-bold mb-4 md:mb-8 tracking-tighter uppercase leading-[0.9]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-primary via-white/90 to-primary/60 neon-text"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-xs sm:text-base md:text-xl text-white/40 mb-6 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4 italic">
                            Founding the BrahMos AI ecosystem through autonomous agents, cloud orchestration, and relentless mobile innovation.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export { HeroGeometric }
