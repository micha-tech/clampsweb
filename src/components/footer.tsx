import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex rounded-lg bg-white px-4 py-3">
            <BrandLogo
              variant="full"
              className="h-16 w-auto max-w-[250px] object-contain"
            />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-steel-200">
            Mechanical engineering, water infrastructure, fire protection,
            electrical, automation, and maintenance for dependable systems.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-clamps-cyan">Services</h2>
          <ul className="mt-4 space-y-3 text-sm text-steel-200">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-clamps-cyan">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring inline-flex rounded-md text-steel-200 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-clamps-cyan">Contact</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-steel-200">
            <p>Email: info@clampsengineering.com</p>
            <p>Phone: +234 813 698 2856</p>
            <p>Phone: +234 703 129 4368</p>
            <p>Address: 2, Barracks Road, Car wash Bus Stop, Isheri-Idimu, Egbeda Lagos.</p>
          </div>
          <Link
            href="/request-quote"
            className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg border border-clamps-cyan/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-clamps-cyan hover:bg-white/10"
          >
            Speak With Our Engineering Team
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-xs text-steel-300 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Clamps Engineering Solutions LTD. All rights reserved.</p>
          <p>Reliable infrastructure. Safer systems. Stronger operations.</p>
        </div>
      </div>
    </footer>
  );
}
