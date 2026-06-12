"use client";

import { SectionHeader } from "@/components/motion/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { useTestimonials } from "../hooks/useTestimonials";
import {
  TestimonialCard,
  TESTIMONIAL_CARD_HEIGHT,
  TESTIMONIAL_CARD_WIDTH,
} from "./TestimonialCard";

import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const { data: testimonials, isPending, isError } = useTestimonials();
  const t = useTranslations("testimonials");

  return (
    <section className="relative bg-background py-20">
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
          subtitleClassName="text-[#501B0E] max-w-2xl mx-auto"
          subtitleStyle={{ fontSize: "16px", fontWeight: 300, lineHeight: "134%" }}
        />

        {isPending && (
          <div className="flex flex-wrap justify-center gap-x-[75px] gap-y-14">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-muted animate-pulse shrink-0"
                style={{ width: TESTIMONIAL_CARD_WIDTH, height: TESTIMONIAL_CARD_HEIGHT }}
              />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-center py-12 text-gray-500">
            Failed to load testimonials. Please try again later.
          </p>
        )}

        {!isPending && !isError && testimonials && testimonials.length === 0 && (
          <p className="text-center py-12 text-gray-500">
            No testimonials available at the moment.
          </p>
        )}

        {!isPending && !isError && testimonials && testimonials.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-[75px] gap-y-14">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={i * 70} className="shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
