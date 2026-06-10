"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function HeroSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/services?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <section className="relative w-full overflow-hidden min-h-[620px] flex flex-col bg-gradient-to-b from-[#F9EDD8] to-[#E8D4B0]">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16 pb-10">
        <h1
          className="font-display font-normal uppercase tracking-[2px] leading-[134%]"
          style={{ fontSize: "clamp(40px, 5.1vw, 74px)" }}
        >
          <span className="block text-[#2C1008]">Reliable Hands For</span>
          <span className="block text-primary">Every Terrain</span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-[#2C1008] text-center"
          style={{
            fontSize: "20px",
            fontWeight: 300,
            lineHeight: "134%",
            letterSpacing: "0px",
          }}
        >
          From The Smallest Repair to the Largest Renovation.
          <br />
          Latache Connects you with Skilled Professionals who Carry the Load for
          you
        </p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="mt-14 w-full max-w-[645px]">
          <div className="flex items-center h-15.5 bg-white rounded-full shadow-lg pl-6 pr-px">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you need help with?"
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
      </div>

      {/* Dunes */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dunes.svg"
          alt=""
          className="w-full block"
          style={{ height: "280px", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </section>
  );
}
