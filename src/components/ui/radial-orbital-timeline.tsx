
"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const isMobile = useIsMobile();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.25) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isMobile ? 80 : 180;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-background bg-primary border-primary";
      case "in-progress":
        return "text-foreground bg-secondary border-primary/40";
      case "pending":
        return "text-muted-foreground bg-secondary/50 border-white/10";
      default:
        return "text-muted-foreground bg-secondary/50 border-white/10";
    }
  };

  return (
    <div
      className="w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center bg-transparent overflow-hidden touch-none"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Core Sun */}
          <div className="absolute w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/40 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,59,59,0.3)]">
            <div className="absolute w-12 h-12 md:w-20 md:h-20 rounded-full border border-primary/20 animate-ping opacity-70"></div>
            <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          {/* Orbital Ring */}
          <div className="absolute w-[160px] h-[160px] md:w-[360px] md:h-[360px] rounded-full border border-primary/10 shadow-[inset_0_0_50px_rgba(255,59,59,0.05)]"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Node Orb */}
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center transition-all duration-500",
                    isMobile ? "w-5 h-5" : "w-10 h-10",
                    isExpanded ? "bg-primary text-background scale-125" : isRelated ? "bg-primary/50 text-background animate-pulse" : "bg-card border-primary/20 text-primary border",
                    isExpanded ? "shadow-[0_0_20px_rgba(255,59,59,0.5)]" : ""
                  )}
                >
                  <Icon size={isMobile ? 10 : 18} />
                </div>

                {/* Node Label */}
                <div
                  className={cn(
                    "absolute top-full mt-2 whitespace-nowrap font-code font-bold uppercase tracking-widest transition-all duration-300",
                    isMobile ? "text-[7px]" : "text-[10px]",
                    isExpanded ? "text-primary scale-110" : "text-muted-foreground/60"
                  )}
                >
                  {item.title}
                </div>

                {/* Info Card Overlay */}
                {isExpanded && (
                  <Card className={cn(
                    "absolute glass-card bg-card/95 backdrop-blur-xl border-primary/30 shadow-2xl z-50 overflow-visible transition-all duration-500",
                    isMobile ? "top-8 -left-[75px] w-[150px] p-2" : "top-14 left-1/2 -translate-x-1/2 w-64 p-4"
                  )}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-primary/50"></div>
                    <CardHeader className="p-0 mb-1 md:mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <Badge className={cn(
                          "px-1.5 py-0 font-code font-bold rounded-none",
                          isMobile ? "text-[6px]" : "text-[9px]",
                          getStatusStyles(item.status)
                        )}>
                          {item.status.toUpperCase()}
                        </Badge>
                        <span className={cn("font-code text-muted-foreground", isMobile ? "text-[6px]" : "text-[10px]")}>
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className={cn("font-display font-bold uppercase tracking-tight", isMobile ? "text-[9px]" : "text-sm")}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className={cn("text-muted-foreground font-light leading-tight mb-2 md:mb-3", isMobile ? "text-[8px]" : "text-[11px]")}>
                        {item.content}
                      </p>

                      <div className="space-y-1.5 border-t border-white/5 pt-2">
                        <div className="flex justify-between items-center font-code uppercase tracking-widest">
                          <span className={cn("flex items-center gap-1 text-muted-foreground", isMobile ? "text-[6px]" : "text-[9px]")}>
                            <Zap size={isMobile ? 7 : 10} className="text-primary" />
                            Efficiency
                          </span>
                          <span className={cn("text-primary", isMobile ? "text-[7px]" : "text-[10px]")}>{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${item.energy}%` }}></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-2 md:mt-3 pt-2 border-t border-white/5">
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relId) => {
                              const rel = timelineData.find((i) => i.id === relId);
                              return (
                                <Button
                                  key={relId}
                                  variant="outline"
                                  size="sm"
                                  className={cn(
                                    "flex items-center gap-1 border-primary/20 bg-transparent hover:bg-primary/10 text-primary transition-all rounded-none",
                                    isMobile ? "h-3 px-1 text-[5px]" : "h-6 px-2 text-[8px]"
                                  )}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relId);
                                  }}
                                >
                                  {rel?.title}
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
