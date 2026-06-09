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

    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
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
