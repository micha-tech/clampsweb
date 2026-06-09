"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileStickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const updateVisibility = () => setVisible(window.scrollY > 520);

    const frame = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    const interval = window.setInterval(updateVisibility, 250);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.clearInterval(interval);
    };
  }, [pathname]);

  if (pathname !== "/" || !visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
      <Link
        href="/request-quote"
        className="focus-ring flex min-h-14 items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-4 text-sm font-semibold text-white shadow-industrial"
      >
        Discuss Your Project
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    </div>
  );
}
