import {
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { FadeIn, MotionCard } from "@/components/motion";
import { QuoteForm } from "@/components/quote-form";
import { credibilityPlaceholders, quoteSteps } from "@/lib/content";

const quickServices = [
  "Water Systems",
  "Fire Protection",
  "Electrical",
  "Automation",
];

export default function RequestQuotePage() {
  return (
    <main className="light-grid-bg">
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-engineering-grid bg-[length:36px_36px] opacity-35" />
        <div className="section-shell relative">
          <FadeIn>
            <h1 className="break-words font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Request Engineering Consultation
            </h1>
            <p className="mt-5 max-w-2xl break-words text-base leading-8 text-steel-200 sm:text-lg">
              Submit your project requirements through a structured engineering
              inquiry portal for review, clarification, and proposal planning.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="overflow-hidden py-14 sm:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <FadeIn>
            <QuoteForm />
          </FadeIn>

          <aside className="grid gap-5">
            <MotionCard>
              <section className="technical-rule rounded-lg border border-steel-100 bg-white p-6 shadow-industrial-sm lg:sticky lg:top-28">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-clamps-blue/[0.12] text-clamps-muted">
                    <FileText aria-hidden className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    What Happens Next
                  </h2>
                </div>
                <ol className="mt-6 space-y-4">
                  {quoteSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-xs font-semibold text-clamps-cyan">
                        {index + 1}
                      </span>
                      <span className="pt-1 text-sm font-semibold leading-6 text-steel-700">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex gap-3 rounded-lg border border-clamps-line bg-clamps-blue/[0.08] p-4">
                  <Clock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-clamps-muted" />
                  <p className="text-sm font-semibold leading-6 text-navy-900">
                    Typical Response Time: Within 1 Business Day
                  </p>
                </div>
              </section>
            </MotionCard>

            <MotionCard delay={0.08}>
              <section className="rounded-lg border border-steel-100 bg-white p-6 shadow-industrial-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-clamps-blue/[0.12] text-clamps-muted">
                    <Headphones aria-hidden className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    Consultation Readiness
                  </h2>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="flex gap-3 rounded-lg bg-steel-50 p-4">
                    <Clock aria-hidden className="mt-0.5 h-5 w-5 text-clamps-muted" />
                    <p className="text-sm leading-6 text-steel-600">
                      Requests are reviewed by project need, site location,
                      service type, and urgency.
                    </p>
                  </div>
                  <div className="flex gap-3 rounded-lg bg-steel-50 p-4">
                    <ShieldCheck
                      aria-hidden
                      className="mt-0.5 h-5 w-5 text-clamps-muted"
                    />
                    <p className="text-sm leading-6 text-steel-600">
                      Technical details are handled with care and used only for
                      engineering response preparation.
                    </p>
                  </div>
                </div>
              </section>
            </MotionCard>

            <MotionCard delay={0.14}>
              <section className="rounded-lg bg-navy-900 p-6 text-white shadow-industrial-sm">
                <h2 className="font-display text-xl font-semibold">
                  Quick Service Areas
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {quickServices.map((service) => (
                    <div
                      key={service}
                      className="rounded-lg border border-white/[0.12] bg-white/[0.07] p-4"
                    >
                      <CheckCircle2
                        aria-hidden
                        className="h-5 w-5 text-clamps-cyan"
                      />
                      <p className="mt-3 text-sm font-semibold text-white">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </MotionCard>
          </aside>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="section-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {credibilityPlaceholders.map((item, index) => (
              <MotionCard key={item} delay={index * 0.04}>
                <article className="flex h-full items-center gap-3 rounded-lg border border-dashed border-steel-200 bg-steel-50 p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-clamps-cyan">
                    <BadgeCheck aria-hidden className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-sm font-semibold text-navy-900">
                      {item}
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-steel-500">
                      Placeholder ready for verified proof.
                    </p>
                  </div>
                </article>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
