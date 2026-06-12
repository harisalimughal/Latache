"use client";

import { useState } from "react";
import {
  Zap,
  Droplets,
  Paintbrush,
  Hammer,
  Truck,
  Sprout,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { useFeaturedServices } from "../hooks/useServices";
import { ServiceCard } from "./ServiceCard";
import { useTranslations } from "next-intl";

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  Paintbrush,
  Hammer,
  Truck,
  Sprout,
  Wrench,
};

export function ServicesSection() {
  const { data: services, isPending, isError } = useFeaturedServices();
  const [activeId, setActiveId] = useState<string>("1");
  const t = useTranslations("services");

  return (
    <section className="relative bg-background py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          titleClassName="font-display font-normal text-[#501B0E] mb-3"
          titleStyle={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: "134%",
            letterSpacing: "0.5px",
          }}
          subtitleClassName="text-[#501B0E] max-w-2xl mx-auto"
          subtitleStyle={{ fontSize: "16px", fontWeight: 300, lineHeight: "134%" }}
        />

        {isPending && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-muted animate-pulse h-32"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-12 text-gray-500">
            Failed to load services. Please try again later.
          </div>
        )}

        {!isPending && !isError && services && services.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No services available at the moment.
          </div>
        )}

        {!isPending && !isError && services && services.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            onMouseLeave={() => setActiveId("1")}
          >
            {services.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Wrench;
              const nameKey = `items.${service.slug}.name`;
              const descKey = `items.${service.slug}.description`;
              const name = t.has(nameKey) ? t(nameKey) : service.name;
              const description = t.has(descKey) ? t(descKey) : service.description;

              return (
                <Reveal key={service.id} delay={i * 60}>
                  <ServiceCard
                    icon={Icon}
                    name={name}
                    description={description}
                    active={activeId === service.id}
                    onHover={() => setActiveId(service.id)}
                  />
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
