"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

/**
 * Tracks mouse position relative to a container.
 * Returns normalized values (-1 to 1) for 3D interactions.
 * Throttled via RAF for performance.
 */
export function useMousePosition(containerRef?: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef?.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setPosition({
            x,
            y,
            normalizedX: (x / rect.width) * 2 - 1,
            normalizedY: (y / rect.height) * 2 - 1,
          });
        } else {
          setPosition({
            x: e.clientX,
            y: e.clientY,
            normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
            normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return position;
}
