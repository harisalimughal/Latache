"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Careers", href: "/careers" },
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Reviews", href: "/reviews" },
  { label: "Sign up / Log in", href: "/login" },
] as const;

export function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — CTA + globe */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/become-a-tasker"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Become a Tasker
            </Link>
            <button
              aria-label="Change language"
              className="p-1 text-gray-600 hover:text-primary transition-colors"
            >
              <Globe size={22} strokeWidth={1.5} />
            </button>
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
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex items-center gap-3">
            <Link
              href="/become-a-tasker"
              className="flex-1 text-center px-5 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Become a Tasker
            </Link>
            <button
              aria-label="Change language"
              className="p-2 text-gray-600 hover:text-primary transition-colors border border-border rounded-md"
            >
              <Globe size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
