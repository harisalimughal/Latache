"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorRetainTime?: number;
}

export function Typewriter({
  text,
  delay = 60,
  startDelay = 0,
  className,
  style,
  onComplete,
  showCursor = true,
  cursorRetainTime = 0,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (currentText.length < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentText.length + 1));
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      if (onComplete) {
        onComplete();
      }

      if (cursorRetainTime > 0) {
        const cursorTimeout = setTimeout(() => {
          setCompleted(true);
        }, cursorRetainTime);
        return () => clearTimeout(cursorTimeout);
      } else {
        setCompleted(true);
      }
    }
  }, [started, currentText, text, delay, onComplete, cursorRetainTime]);

  return (
    <span className={className} style={style}>
      {currentText || "\u00A0"}
      {showCursor && started && !completed && (
        <span className="inline-block w-[3px] h-[0.85em] bg-current ml-1.5 align-middle animate-cursor-blink" />
      )}
    </span>
  );
}
