import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const DISCOVER_LINKS = [
  { key: "becomeTasker", href: "/become-a-tasker" },
  { key: "servicesByCity", href: "/services/by-city" },
  { key: "servicesNearby", href: "/services/nearby" },
  { key: "allServices", href: "/services" },
  { key: "eliteTaskers", href: "/taskers/elite" },
  { key: "help", href: "/faq" },
];

const COMPANY_LINKS = [
  { key: "aboutUs", href: "/about" },
  { key: "careers", href: "/careers" },
  { key: "copyright", href: "/copyright" },
  { key: "poweredBy", href: "/powered-by" },
  { key: "terms", href: "/terms" },
  { key: "support", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function PublicFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="relative w-full h-87.5 bg-[#EDE0C8] overflow-hidden">
      {/* Dunes — absolute bottom, z-0, full width at natural height */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dunes.svg"
          alt=""
          className="w-full block"
          style={{ height: "192px", objectFit: "cover" }}
        />
      </div>

      {/* Content — z-10 so it renders over the dunes */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
        {/* Social bar */}
        <div className="flex flex-row items-center justify-center gap-3 mb-4">
          <span className="text-sm font-medium text-primary">
            {t("followUs")}
          </span>
          <div className="flex items-center">
            {SOCIAL_LINKS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && (
                  <span className="w-px h-4 bg-white mx-2" aria-hidden="true" />
                )}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-primary hover:opacity-70 transition-opacity"
                >
                  {s.icon}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Discover */}
          <div>
            <h3 className="text-sm font-medium text-primary mb-3">{t("discover")}</h3>
            <ul className="space-y-0">
              {DISCOVER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-primary leading-tight hover:opacity-70 transition-opacity"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-primary mb-3">{t("company")}</h3>
            <ul className="space-y-0">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-primary leading-tight hover:opacity-70 transition-opacity"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-sm font-medium text-primary mb-3">
              {t("downloadApp")}
            </h3>
            <p className="text-sm font-medium text-primary leading-relaxed">
              {t("appDescription")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
