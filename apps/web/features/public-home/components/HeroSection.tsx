"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { Search } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Typewriter } from "@/components/motion/Typewriter";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const t = useTranslations("hero");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/services?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <section className="relative w-full overflow-hidden min-h-[620px] flex flex-col bg-gradient-to-b from-[#F9EDD8] to-[#E8D4B0]">
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16 pb-10">
        <h1
          className="font-display font-normal uppercase tracking-[2px] leading-[134%]"
          style={{ fontSize: "clamp(40px, 5.1vw, 74px)" }}
        >
          <span className="block text-[#2C1008]">
            <Typewriter text={t("titleLine1")} delay={60} startDelay={0} />
          </span>
          <span className="block text-primary">
            <Typewriter text={t("titleLine2")} delay={60} startDelay={1100} cursorRetainTime={3000} />
          </span>
        </h1>

        <Reveal
          as="p"
          immediate
          delay={260}
          className="mt-8 max-w-2xl text-[#2C1008] text-center"
          style={{
            fontSize: "20px",
            fontWeight: 300,
            lineHeight: "134%",
            letterSpacing: "0px",
          }}
        >
          {t("subtitle")}
        </Reveal>

        <Reveal immediate delay={420} className="mt-14 w-full max-w-[645px]">
          <form onSubmit={handleSearch}>
          <div className="flex items-center h-15.5 bg-white rounded-full shadow-lg pl-6 pr-px">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="flex-1 h-full bg-transparent outline-none pr-2 text-base text-gray-600 placeholder:text-gray-400 font-normal"
            />
            <button
              type="submit"
              aria-label="Search"
              className="shrink-0 bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
              style={{
                height: "60px",
                minWidth: "96px",
                paddingLeft: "28px",
                paddingRight: "28px",
                borderTopRightRadius: "1000px",
                borderBottomRightRadius: "1000px",
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
              }}
            >
              <Search size={24} strokeWidth={2} />
            </button>
          </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
