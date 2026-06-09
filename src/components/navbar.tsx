"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-100/90 bg-white/92 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex min-h-20 items-center justify-between gap-5"
      >
        <Link
          href="/#home"
          className="focus-ring group flex min-w-0 items-center gap-3 rounded-lg"
          onClick={() => setOpen(false)}
        >
          <BrandLogo
            variant="full"
            priority
            className="h-10 w-auto max-w-52 object-contain sm:h-14 sm:max-w-none"
          />
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg text-sm font-semibold text-steel-700 transition hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/request-quote"
            className="focus-ring rounded-lg bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-industrial-sm transition hover:bg-navy-800"
          >
            Discuss Project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-steel-100 text-navy-900 lg:hidden"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-steel-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-steel-700 transition hover:bg-steel-50 hover:text-navy-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-lg bg-navy-900 px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Request Engineering Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
