"use client";

import { Link, useRouter, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

const NAV_LINKS = [
  { key: "careers", href: "/careers" },
  { key: "services", href: "/services" },
  { key: "howItWorks", href: "/how-we-work" },
  { key: "reviews", href: "/reviews" },
  { key: "login", href: "/login" },
] as const;

const LANGUAGES = [
  { label: "Darija", code: "ma", locale: "darija", disabled: false },
  { label: "French", code: "fr", locale: "fr", disabled: true },
  { label: "English", code: "gb", locale: "en", disabled: false },
  { label: "Spanish", code: "es", locale: "es", disabled: true },
] as const;

export function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: "en" | "darija") {
    router.replace(pathname, { locale });
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-full.svg"
              alt="Latache"
              width={148}
              height={56}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Right — CTA + globe */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/become-a-tasker"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              {t("becomeTasker")}
            </Link>

            {/* Language picker */}
            <div ref={langRef} className="relative">
              <button
                aria-label="Change language"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((prev) => !prev)}
                className="p-1 text-gray-600 hover:text-primary transition-colors"
              >
                <Globe size={22} strokeWidth={1.5} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-md shadow-lg border border-border py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.label}
                      disabled={lang.disabled}
                      onClick={() => {
                        if (!lang.disabled) {
                          changeLanguage(lang.locale as "en" | "darija");
                          setLangOpen(false);
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                        lang.disabled
                          ? "opacity-50 cursor-not-allowed text-gray-400"
                          : "text-gray-700 hover:bg-muted hover:text-primary"
                      }`}
                    >
                      
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://flagcdn.com/w20/${lang.code}.png`}
                        alt={lang.label}
                        width={20}
                        height={15}
                        className="block"
                      />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-5 pt-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-2 py-3 text-sm font-medium text-gray-700 hover:text-primary border-b border-muted last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="pt-3 flex items-center gap-3">
            <Link
              href="/become-a-tasker"
              className="flex-1 text-center px-5 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              {t("becomeTasker")}
            </Link>
            <div className="relative">
              <button
                aria-label="Change language"
                onClick={() => setLangOpen((prev) => !prev)}
                className="p-2 text-gray-600 hover:text-primary transition-colors border border-border rounded-md"
              >
                <Globe size={20} strokeWidth={1.5} />
              </button>
              {langOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-44 bg-white rounded-md shadow-lg border border-border py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.label}
                      disabled={lang.disabled}
                      onClick={() => {
                        if (!lang.disabled) {
                          changeLanguage(lang.locale as "en" | "darija");
                          setLangOpen(false);
                          setMobileOpen(false);
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                        lang.disabled
                          ? "opacity-50 cursor-not-allowed text-gray-400"
                          : "text-gray-700 hover:bg-muted hover:text-primary"
                      }`}
                    >
                      
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://flagcdn.com/w20/${lang.code}.png`}
                        alt={lang.label}
                        width={20}
                        height={15}
                        className="block"
                      />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
