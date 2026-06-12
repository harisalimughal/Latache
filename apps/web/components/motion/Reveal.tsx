"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "./useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  /** Animate on mount (hero) instead of on scroll */
  immediate?: boolean;
  as?: "div" | "section" | "article" | "span" | "p" | "h1" | "h2" | "h3" | "form";
};

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  duration = 700,
  immediate = false,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView({ threshold: immediate ? 0 : 0.12 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!immediate) return;
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, [immediate]);

  const visible = immediate ? mounted : inView;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("motion-reveal", visible && "motion-reveal--visible", className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
