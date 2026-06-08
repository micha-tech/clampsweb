import { Activity, Droplets, Flame, Settings, Zap } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/motion";

const visualCards = [
  { label: "Water Systems", icon: Droplets },
  { label: "Fire Safety", icon: Flame },
  { label: "Automation", icon: Settings },
  { label: "Electrical", icon: Zap },
];

export function HeroVisual() {
  return (
    <FadeIn delay={0.2} className="relative">
      <div className="relative min-h-[420px] w-full max-w-full overflow-hidden rounded-lg border border-white/15 bg-navy-950 shadow-industrial">
        <Image
          src="/engineering-systems-blueprint.png"
          alt="Industrial pump, pipework, electrical controls, and blueprint engineering linework"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/30 to-transparent" />
        <div className="absolute inset-0 bg-engineering-grid bg-[length:34px_34px] opacity-25" />
        <div className="absolute inset-x-6 top-14 h-px overflow-hidden bg-clamps-cyan/20">
          <span className="block h-full w-1/2 animate-line-scan bg-gradient-to-r from-transparent via-clamps-cyan to-transparent" />
        </div>
        <div className="absolute bottom-10 left-8 right-8 h-px bg-clamps-cyan/30" />
        <div className="absolute left-10 top-10 h-24 w-px bg-clamps-cyan/30" />
        <div className="absolute right-10 top-24 h-48 w-px bg-clamps-cyan/25" />

        <div className="relative grid h-full min-h-[420px] content-between gap-5 p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div className="rounded-lg border border-white/[0.12] bg-navy-950/75 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clamps-cyan">
                Infrastructure Systems
              </p>
              <p className="mt-4 max-w-48 text-sm leading-6 text-steel-100">
                Pumping, pipework, controls, and commissioning-ready delivery.
              </p>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-lg border border-clamps-cyan/40 bg-navy-950/60 text-clamps-cyan backdrop-blur">
              <Activity aria-hidden className="h-7 w-7 animate-soft-pulse" />
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3">
            {visualCards.map((card) => (
              <div
                key={card.label}
                className="min-w-0 rounded-lg border border-white/[0.12] bg-navy-950/60 p-4 backdrop-blur"
              >
                <card.icon aria-hidden className="h-5 w-5 text-clamps-cyan" />
                <p className="mt-4 break-words text-sm font-semibold text-white">
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-white/[0.12] bg-navy-950/70 p-4 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  Project execution framework
                </p>
                <p className="mt-1 text-xs leading-5 text-steel-200">
                  Scope, design, installation, commissioning, and maintenance
                </p>
              </div>
              <div className="h-2 w-20 shrink-0 rounded-sm bg-white/10 sm:w-28">
                <div className="h-full w-4/5 rounded-sm bg-clamps-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
