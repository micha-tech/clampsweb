import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { MotionCard } from "@/components/motion";

type ServiceCardProps = {
  title: string;
  description: string;
  accent: string;
  icon: LucideIcon;
  delay?: number;
};

export function ServiceCard({
  title,
  description,
  accent,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <MotionCard delay={delay} className="h-full">
      <article className="technical-rule group relative flex h-full flex-col overflow-hidden rounded-lg border border-steel-100 bg-white p-6 shadow-industrial-sm transition hover:-translate-y-0.5 hover:border-clamps-line">
        <div className="absolute inset-x-0 top-0 h-1 bg-clamps-blue" />
        <div className="flex items-start justify-between gap-5">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-clamps-blue/[0.12] text-clamps-muted">
            <Icon aria-hidden className="h-6 w-6" strokeWidth={1.8} />
          </div>
          <ArrowUpRight
            aria-hidden
            className="h-5 w-5 text-steel-300 transition group-hover:text-clamps-muted"
          />
        </div>
        <p className="mt-7 text-sm font-semibold text-clamps-muted">{accent}</p>
        <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-steel-500">
          {description}
        </p>
      </article>
    </MotionCard>
  );
}
