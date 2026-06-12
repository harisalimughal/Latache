import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  name: string;
  description: string;
  active?: boolean;
  onHover?: () => void;
}

export function ServiceCard({ icon: Icon, name, description, active = false, onHover }: Props) {
  return (
    <div
      onMouseEnter={onHover}
      className={cn(
        "rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 select-none shadow-md",
        active ? "bg-primary" : "bg-card border border-border"
      )}
    >
      <div className={cn("mb-4", active ? "text-white" : "text-primary")}>
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className={cn("font-semibold text-base mb-1", active ? "text-white" : "text-primary")}>
        {name}
      </h3>
      <p className={cn("text-sm leading-snug", active ? "text-white/80" : "text-gray-600")}>
        {description}
      </p>
    </div>
  );
}
