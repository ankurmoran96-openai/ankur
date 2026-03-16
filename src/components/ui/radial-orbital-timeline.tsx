"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

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
          const newAngle = (prev + 0.3) % 360;
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
    const radius = isMobile ? 90 : 180;
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
      className="w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center bg-transparent overflow-hidden"
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
          <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/40 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-[180px] h-[180px] md:w-[360px] md:h-[360px] rounded-full border border-primary/10"></div>

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
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,59,59,0.2) 0%, rgba(255,59,59,0) 70%)`,
                    width: `${item.energy * (isMobile ? 0.2 : 0.4) + (isMobile ? 20 : 30)}px`,
                    height: `${item.energy * (isMobile ? 0.2 : 0.4) + (isMobile ? 20 : 30)}px`,
                    left: `-${(item.energy * (isMobile ? 0.2 : 0.4) + (isMobile ? 20 : 30) - (isMobile ? 20 : 30)) / 2}px`,
                    top: `-${(item.energy * (isMobile ? 0.2 : 0.4) + (isMobile ? 20 : 30) - (isMobile ? 20 : 30)) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  ${isMobile ? "w-5 h-5" : "w-8 h-8"} rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-primary text-background"
                      : isRelated
                      ? "bg-primary/50 text-background"
                      : "bg-background text-primary"
                  }
                  border
                  ${
                    isExpanded
                      ? "border-primary shadow-lg shadow-primary/30"
                      : isRelated
                      ? "border-primary animate-pulse"
                      : "border-primary/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : ""}
                `}
                >
                  <Icon size={isMobile ? 10 : 14} />
                </div>

                <div
                  className={`
                  absolute top-6 md:top-10 whitespace-nowrap
                  text-[7px] md:text-[9px] font-code font-bold uppercase tracking-widest
                  transition-all duration-300
                  ${isExpanded ? "text-primary scale-110" : "text-muted-foreground"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 w-40 md:w-60 glass-card bg-card/95 backdrop-blur-lg border-primary/30 shadow-xl shadow-primary/10 overflow-visible z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-primary/50"></div>
                    <CardHeader className="p-2 md:p-3 md:pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-1 py-0 text-[6px] md:text-[9px] font-code font-bold rounded-none ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "DONE"
                            : item.status === "in-progress"
                            ? "ACTIVE"
                            : "QUEUED"}
                        </Badge>
                        <span className="text-[6px] md:text-[9px] font-code text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-[9px] md:text-xs mt-1 font-display font-bold uppercase tracking-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 md:p-3 pt-0 text-[7px] md:text-[10px] text-muted-foreground font-light leading-relaxed">
                      <p>{item.content}</p>

                      <div className="mt-1 md:mt-3 pt-1 border-t border-white/5">
                        <div className="flex justify-between items-center text-[6px] md:text-[9px] font-code uppercase tracking-widest mb-1">
                          <span className="flex items-center">
                            <Zap size={6} className="mr-1 text-primary" />
                            Power
                          </span>
                          <span className="font-mono text-primary">{item.energy}%</span>
                        </div>
                        <div className="w-full h-0.5 md:h-1 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-1 md:mt-3 pt-1 border-t border-white/5">
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-3 md:h-5 px-1 md:px-1.5 py-0 text-[5px] md:text-[7px] font-code uppercase rounded-none border-primary/20 bg-transparent hover:bg-primary/10 text-primary/80 hover:text-primary transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={5}
                                    className="ml-1 text-primary/60"
                                  />
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
