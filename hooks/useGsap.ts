"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable GSAP timeline hook.
 * Creates a timeline scoped to a container ref.
 * Automatically cleans up on unmount.
 */
export function useGsapTimeline(options?: gsap.TimelineVars) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({
        paused: true,
        ...options,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef, timeline: timelineRef };
}

/**
 * Reusable ScrollTrigger parallax hook.
 * Applies a scroll-driven y translation to an element.
 */
export function useScrollParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => speed * 200,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/**
 * Reusable scroll-driven fade and translate.
 * Elements fade + slide up as they enter the viewport.
 */
export function useScrollReveal(options?: {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { y = 40, duration = 0.8, delay = 0, stagger = 0.1, selector } = options || {};

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const targets = selector
        ? ref.current!.querySelectorAll(selector)
        : ref.current!.children;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, duration, delay, stagger, selector]);

  return ref;
}

/**
 * Cinematic text reveal — animates each line with stagger.
 * Use on a container where each child is a line.
 */
export function useCinematicReveal(options?: {
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { delay = 0.3, stagger = 0.12, duration = 1 } = options || {};

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Just show everything immediately
      gsap.set(ref.current.children, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.children,
        { opacity: 0, y: 50, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          delay,
          stagger,
          ease: "power4.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, stagger, duration]);

  return ref;
}
