
"use client";

import React, { useEffect, useState } from 'react';

export function StarBackground() {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3}px`,
      duration: `${3 + Math.random() * 7}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            // @ts-ignore
            '--duration': star.duration,
          }}
        />
      ))}
    </div>
  );
}
