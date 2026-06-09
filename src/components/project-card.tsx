import { MapPin, Wrench } from "lucide-react";
import Image from "next/image";
import { MotionCard } from "@/components/motion";

type ProjectCardProps = {
  title: string;
  category: string;
  location: string;
  discipline: string;
  image: string;
  summary: string;
  delay?: number;
};

export function ProjectCard({
  title,
  category,
  location,
  discipline,
  image,
  summary,
  delay = 0,
}: ProjectCardProps) {
  return (
    <MotionCard delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-lg border border-steel-100 bg-white shadow-industrial-sm transition hover:-translate-y-1 hover:border-clamps-line hover:shadow-industrial">
        <div className="relative h-36 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center transition duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-5 pt-10">
            <p className="font-display text-lg font-semibold leading-tight text-white">
              {discipline}
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-clamps-line bg-clamps-blue/[0.08] px-3 py-1 text-xs font-semibold text-clamps-muted">
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-500">
              <MapPin aria-hidden className="h-3.5 w-3.5" />
              {location}
            </span>
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-steel-500">
            {summary}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-clamps-muted">
            <Wrench aria-hidden className="h-3.5 w-3.5" />
            {discipline}
          </div>
        </div>
      </article>
    </MotionCard>
  );
}
