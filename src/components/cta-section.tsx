import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion";

export function CTASection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn>
          <div className="technical-rule relative overflow-hidden rounded-lg bg-navy-900 px-6 py-12 text-white shadow-industrial sm:px-10 lg:px-14">
            <div className="absolute inset-0 bg-engineering-grid bg-[length:34px_34px] opacity-50" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Speak with our engineering team about your next project.
                </h2>
                <p className="mt-5 text-base leading-8 text-steel-200 sm:text-lg">
                  Speak with Clamps Engineering Solutions LTD about water
                  infrastructure, fire protection, electrical, automation, or
                  industrial systems that demand dependable performance.
                </p>
              </div>
              <Link
                href="/request-quote"
                className="focus-ring inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-clamps-blue px-6 py-4 text-sm font-semibold text-navy-950 shadow-glow-blue transition hover:bg-clamps-cyan"
              >
                Discuss Your Project
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
