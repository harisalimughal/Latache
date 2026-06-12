"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { useRecommendedJobs } from "../hooks/useJobs";
import { JobCard } from "./JobCard";

import { useTranslations } from "next-intl";

const SCROLL_AMOUNT = 290;

export function RecommendedJobsSection() {
  const { data: jobs, isPending, isError } = useRecommendedJobs();
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("jobs");

  function dismiss(id: string) {
    setDismissedIds((prev) => new Set(prev).add(id));
  }

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  }

  const visible = jobs?.filter((j) => !dismissedIds.has(j.id)) ?? [];

  return (
    <section className="relative bg-background py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          titleClassName="font-display font-normal uppercase text-[#501B0E] mb-3"
          titleStyle={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: "134%",
            letterSpacing: "2px",
          }}
          subtitleClassName="text-[#501B0E] whitespace-nowrap"
          subtitleStyle={{ fontSize: "16px", fontWeight: 300, lineHeight: "134%" }}
        />
      </div>

      <Reveal delay={180} className="relative max-w-7xl mx-auto px-10">
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:bg-muted transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {isPending && (
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="shrink-0 w-67.5 h-55 rounded-2xl bg-muted animate-pulse"
              />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-center py-12 text-gray-500">
            Failed to load recommendations. Please try again later.
          </p>
        )}

        {!isPending && !isError && visible.length === 0 && (
          <p className="text-center py-12 text-gray-500">
            No recommendations available at the moment.
          </p>
        )}

        {!isPending && !isError && visible.length > 0 && (
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar py-3"
            onMouseLeave={() => setHoveredId(null)}
          >
            {visible.map((job, i) => (
              <Reveal key={job.id} delay={i * 80} className="shrink-0">
                <JobCard
                  job={job}
                  featured={hoveredId ? hoveredId === job.id : i === 0}
                  onDismiss={() => dismiss(job.id)}
                  onHover={() => setHoveredId(job.id)}
                />
              </Reveal>
            ))}
          </div>
        )}

        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:bg-muted transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </Reveal>
    </section>
  );
}
