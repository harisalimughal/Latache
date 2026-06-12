import type { PopularProject } from "../types/public-home.types";
import { useTranslations } from "next-intl";

interface Props {
  project: PopularProject;
}

export function ProjectCard({ project }: Props) {
  const t = useTranslations("projects");
  const titleKey = `items.${project.slug}`;
  const title = t.has(titleKey) ? t(titleKey) : project.title;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 select-none">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="px-4 py-3">
        <h3
          className="text-[#2C1008] leading-tight"
          style={{ fontWeight: 500, fontSize: "14px" }}
        >
          {title}
        </h3>
        <p
          className="text-gray-500 mt-0.5"
          style={{ fontWeight: 300, fontSize: "12px" }}
        >
          {t("startingPrice", { price: project.startingPrice })}
        </p>
      </div>
    </div>
  );
}
