import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RecommendedJob } from "../types/job.types";
import { useTranslations } from "next-intl";

interface Props {
  job: RecommendedJob;
  featured?: boolean;
  onDismiss?: () => void;
  onHover?: () => void;
}

export function JobCard({ job, featured = false, onDismiss, onHover }: Props) {
  const t = useTranslations("jobs");

  const titleKey = `items.${job.slug}.title`;
  const descKey = `items.${job.slug}.description`;
  const categoryKey = `items.${job.slug}.category`;

  const title = t.has(titleKey) ? t(titleKey) : job.title;
  const description = t.has(descKey) ? t(descKey) : job.description;
  const category = t.has(categoryKey) ? t(categoryKey) : job.category;

  return (
    <div
      onMouseEnter={onHover}
      className={cn(
        "shrink-0 w-78.75 h-75.75 rounded-2xl p-5 flex flex-col transition-all duration-300 cursor-pointer select-none shadow-md",
        featured ? "bg-primary" : "bg-card border-[1.23px] border-border"
      )}
    >
      {/* Badge + close */}
      <div className="flex items-center justify-between mb-5">
        <span
          className={cn(
            "text-xs font-medium px-3 py-1 rounded-full",
            featured ? "bg-white/20 text-white" : "bg-muted text-primary"
          )}
        >
          {category}
        </span>
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className={cn(
            "w-6 h-6 flex items-center justify-center rounded-full transition-opacity hover:opacity-70",
            "bg-[#F8F2E9] text-[#501B0E]"
          )}
        >
          <X size={13} strokeWidth={2.5} />
        </button>
      </div>

      {/* Title */}
      <h3
        className={cn("font-medium text-lg leading-snug mb-2", featured ? "text-white" : "text-[#501B0E]")}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn("text-sm font-light leading-relaxed flex-1 mb-5", featured ? "text-white/80" : "text-gray-500")}
      >
        {description}
      </p>

      {/* CTA */}
      <button className="w-full py-2.5 rounded-full bg-[#501B0E] text-white text-sm font-medium hover:opacity-90 transition-opacity">
        {t("cta")}
      </button>
    </div>
  );
}
