import { Factory, MapPin } from "lucide-react";
import Image from "next/image";
import { MotionCard } from "@/components/motion";

type ProjectCardProps = {
  title: string;
  category: string;
  location: string;
  discipline: string;
  summary: string;
  delay?: number;
};

export function ProjectCard({
  title,
  category,
  location,
  discipline,
  summary,
  delay = 0,
}: ProjectCardProps) {
  return (
    <MotionCard delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-steel-100 bg-white text-navy-900 shadow-industrial-sm transition hover:-translate-y-1 hover:border-clamps-line hover:shadow-industrial">
        <div className="relative h-40 overflow-hidden bg-navy-900">
          <Image
            src="/engineering-systems-blueprint.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center opacity-[0.86] transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 via-navy-900/40 to-transparent" />
          <div className="absolute inset-5 border border-clamps-cyan/30" />
          <div className="absolute bottom-6 left-6 h-px w-40 bg-clamps-cyan/50" />
          <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-lg border border-clamps-cyan/40 bg-navy-950/50 text-clamps-cyan backdrop-blur">
            <Factory aria-hidden className="h-6 w-6" />
          </div>
          <div className="absolute left-6 top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clamps-cyan">
              Portfolio
            </p>
            <p className="mt-3 max-w-52 font-display text-lg font-semibold leading-tight text-white">
              {discipline}
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-clamps-line bg-clamps-blue/[0.08] px-3 py-1 text-xs font-semibold text-clamps-muted">
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-500">
              <MapPin aria-hidden className="h-3.5 w-3.5" />
              {location}
            </span>
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-navy-900">
            {title}
          </h3>
          <div className="mt-5 border-l-2 border-clamps-blue pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-500">
              Engineering Discipline
            </p>
            <p className="mt-1 text-sm font-semibold text-navy-900">
              {discipline}
            </p>
          </div>
          <p className="mt-5 flex-1 text-sm leading-7 text-steel-500">
            {summary}
          </p>
        </div>
      </article>
    </MotionCard>
  );
}
