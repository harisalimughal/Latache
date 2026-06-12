"use client";

import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  subtitleClassName?: string;
  subtitleStyle?: React.CSSProperties;
};

export function SectionHeader({
  title,
  subtitle,
  className = "text-center mb-12",
  titleClassName,
  titleStyle,
  subtitleClassName,
  subtitleStyle,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <Reveal as="h2" className={titleClassName} style={titleStyle}>
        {title}
      </Reveal>
      {subtitle && (
        <Reveal as="p" delay={120} className={subtitleClassName} style={subtitleStyle}>
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
