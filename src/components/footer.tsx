import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems, services } from "@/lib/content";

const socialLinks = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@clampsengineering?_r=1&_t=ZS-973yDSqgvtY",
    icon: TikTokIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/clampsengineeringsolutions?igsh=MWdsMGlrZDFzNDh5ZA==",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1C92EYj1pz/",
    icon: FacebookIcon,
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M14.5 3v10.15a4.35 4.35 0 1 1-4.35-4.35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.5 3c.5 3.15 2.3 5 5.5 5.35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        height="15"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        width="15"
        x="4.5"
        y="4.5"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16.7 7.3h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M14 8.2h2.2V5h-2.8c-3 0-4.7 1.8-4.7 4.8v2H6v3.3h2.7V21H12v-5.9h3l.5-3.3H12v-1.7c0-1.2.5-1.9 2-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clamps-cyan">
              Follow Clamps
            </p>
            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-steel-200 transition hover:border-clamps-cyan hover:bg-clamps-blue hover:text-navy-950"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
