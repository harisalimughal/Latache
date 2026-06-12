import type { Testimonial } from "../types/testimonial.types";
import { StarRating } from "./StarRating";
import { useTranslations } from "next-intl";

export const TESTIMONIAL_CARD_WIDTH = 315.076904296875;
export const TESTIMONIAL_CARD_HEIGHT = 310.76922607421875;

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: Props) {
  const t = useTranslations("testimonials");

  const contentKey = `items.${testimonial.id}.content`;
  const categoryKey = `items.${testimonial.id}.category`;

  const content = t.has(contentKey) ? t(contentKey) : testimonial.content;
  const category = t.has(categoryKey) ? t(categoryKey) : testimonial.category;

  return (
    <article
      className="relative flex flex-col shrink-0 rounded-2xl bg-card border-t-[6px] border-t-[rgba(153,67,40,1)] opacity-100 shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2"
      style={{
        width: TESTIMONIAL_CARD_WIDTH,
        height: TESTIMONIAL_CARD_HEIGHT,
        borderRadius: 16,
      }}
    >
      {/* Stars + quote icon */}
      <div
        className="absolute flex items-start justify-between"
        style={{ top: 28, left: 28, right: 28 }}
      >
        <StarRating rating={testimonial.rating} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/hook.svg"
          alt=""
          width={30}
          height={22}
          className="shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* Author */}
      <div
        className="absolute flex items-center gap-3"
        style={{ top: 61, left: 28 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={testimonial.authorAvatar}
          alt=""
          className="w-9 h-9 rounded-full object-cover shrink-0"
          aria-hidden="true"
        />
        <span
          className="text-[#501B0E] font-semibold"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          {testimonial.authorName}
        </span>
      </div>

      {/* Content */}
      <p
        className="absolute overflow-hidden opacity-100"
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 400,
          fontSize: "17px",
          lineHeight: "24.66px",
          letterSpacing: "-0.09px",
          color: "rgba(153, 67, 40, 1)",
          width: 287,
          height: 148,
          top: 101,
          left: 28,
        }}
      >
        {content}
      </p>

      {/* Category */}
      <p
        className="absolute shrink-0"
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "25.2px",
          letterSpacing: "-0.09px",
          color: "rgba(159, 112, 79, 1)",
          top: 261,
          left: 28,
        }}
      >
        {category}
      </p>
    </article>
  );
}
