import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { FadeIn, MotionCard } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import {
  capabilities,
  deliveryLifecycle,
  industries,
  metrics,
  projects,
  safetyCommitments,
  services,
  trustRibbon,
} from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-navy-950"
      >
        <Image
          src="/mechanical-engineering-hero.webp"
          alt="3D mechanical assembly being developed in engineering design software"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[66%_center] sm:object-[62%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,16,31,0.98)_0%,rgba(4,16,31,0.9)_38%,rgba(4,16,31,0.36)_68%,rgba(4,16,31,0.1)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-navy-950/35 lg:hidden" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(4,16,31,0.82)_0%,transparent_44%,rgba(4,16,31,0.15)_100%)] lg:hidden" />
        <div className="absolute inset-0 -z-10 bg-engineering-grid bg-[length:48px_48px] opacity-[0.09]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-clamps-cyan/50 to-transparent" />

        <div className="section-shell flex min-h-[calc(100svh-5rem)] items-center py-14 sm:py-16">
          <div className="w-full max-w-3xl lg:max-w-[46rem]">
            <FadeIn>
              <div className="inline-flex items-center gap-3 rounded-full border border-clamps-cyan/25 bg-navy-950/45 px-4 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clamps-cyan opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-clamps-cyan" />
                </span>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-clamps-cyan sm:text-xs">
                  Clamps Engineering Solutions
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <h1 className="mt-6 max-w-[18ch] font-display text-[2.45rem] font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:mt-8 sm:text-6xl lg:text-[4rem]">
                Engineering critical infrastructure for lasting performance.
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="mt-6 max-w-xl text-base leading-7 text-steel-200 sm:text-lg sm:leading-8">
                From concept to commissioning, Clamps delivers dependable water,
                fire protection, electrical, automation, and industrial systems
                across Nigeria.
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <Link
                  href="/request-quote"
                  className="focus-ring group inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-clamps-blue px-6 py-4 text-sm font-semibold text-navy-950 shadow-glow-blue transition hover:bg-clamps-cyan"
                >
                  Discuss Your Project
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/#projects"
                  className="focus-ring inline-flex min-h-14 items-center justify-center rounded-lg border border-white/25 bg-navy-950/35 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-clamps-cyan hover:bg-white/[0.1]"
                >
                  Explore Our Work
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 border-l-2 border-clamps-blue pl-4 text-xs font-semibold text-steel-200 sm:mt-11 sm:pl-5 sm:text-sm">
                {trustRibbon.map((item, index) => (
                  <span
                    key={item}
                    className={`items-center gap-3 ${index > 2 ? "hidden sm:inline-flex" : "inline-flex"}`}
                  >
                    {index > 0 ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-clamps-cyan" />
                    ) : null}
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-steel-50 py-14 sm:py-16">
        <div className="section-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <MotionCard key={metric.label} delay={index * 0.05}>
                <article className="technical-rule h-full rounded-lg border border-steel-100 bg-white p-5 shadow-industrial-sm">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-clamps-blue/10 text-clamps-muted">
                    <metric.icon aria-hidden className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-navy-900">
                    {metric.label}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-steel-500">
                    {metric.detail}
                  </p>
                </article>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              label="About Clamps"
              title="A Lagos-based engineering partner for systems that must keep performing."
              description="Mechanical, water infrastructure, fire protection, electrical, automation, and maintenance solutions for projects where technical competence and dependable execution are essential."
            />
          </div>

          <FadeIn delay={0.12}>
            <figure className="overflow-hidden rounded-lg border border-steel-100 bg-white p-2 shadow-industrial">
              <Image
                src="/about-site-inspection.jpg"
                alt="Clamps Engineering team conducting site inspection on industrial pipework"
                width={2048}
                height={967}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="h-auto w-full rounded-md"
              />
              <figcaption className="px-3 py-4 text-sm font-semibold text-steel-700">
                Site inspection and commissioning support by Clamps Engineering
                personnel.
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      <section
        id="capabilities"
        className="light-grid-bg overflow-hidden py-20 sm:py-24"
      >
        <div className="section-shell">
          <SectionHeader
            label="Engineering Capabilities"
            title="Technical breadth for critical water, fire protection, electrical, automation, and industrial systems."
            description="Design, installation, rehabilitation, commissioning, and maintenance for critical infrastructure systems."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <MotionCard key={capability.title} delay={index * 0.04}>
                <article className="technical-rule group h-full rounded-lg border border-steel-100 bg-white p-6 shadow-industrial-sm transition hover:-translate-y-0.5 hover:border-clamps-line">
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy-900 text-clamps-cyan">
                      <capability.icon aria-hidden className="h-5 w-5" />
                    </div>
                    <span className="h-px w-16 bg-clamps-line transition group-hover:bg-clamps-blue" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel-500">
                    {capability.description}
                  </p>
                </article>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              label="Core Service Lines"
              title="Engineering delivery from design and installation through commissioning and maintenance."
              description="Each service line is structured around practical site execution, safety-critical delivery, and long-term system reliability."
            />
            <FadeIn delay={0.12}>
              <div className="hidden rounded-lg border border-steel-100 bg-steel-50 p-4 text-sm font-semibold text-steel-700 lg:block">
                Assess. Engineer. Execute. Maintain.
              </div>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="industrial-bg overflow-hidden py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            label="How We Deliver Engineering Projects"
            title="A disciplined project lifecycle from site assessment to operations support."
            description="A connected process from site assessment to operations support, reducing handover risk and improving system dependability."
            inverse
            align="center"
          />
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 hidden h-px w-[calc(100%-3rem)] bg-clamps-cyan/30 lg:block" />
            <div className="grid gap-5 lg:grid-cols-6">
              {deliveryLifecycle.map((step, index) => (
                <MotionCard key={step.title} delay={index * 0.04}>
                  <article className="relative h-full rounded-lg border border-white/[0.12] bg-white/[0.07] p-5 text-white backdrop-blur">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-clamps-cyan/10 text-clamps-cyan">
                        <step.icon aria-hidden className="h-5 w-5" />
                      </div>
                      <span className="font-display text-sm font-semibold text-clamps-cyan">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-steel-200">
                      {step.description}
                    </p>
                  </article>
                </MotionCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="industries"
        className="overflow-hidden bg-steel-50 py-20 sm:py-24"
      >
        <div className="section-shell">
          <SectionHeader
            label="Industries We Serve"
            title="Built for the organizations responsible for dependable infrastructure and safe operations."
            description="Water utilities, manufacturing, government infrastructure, commercial real estate, industrial facilities, residential estates, and institutional facilities."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <MotionCard key={industry.title} delay={index * 0.04}>
                <article className="technical-rule flex h-full items-center gap-4 rounded-lg border border-steel-100 bg-white p-5 shadow-industrial-sm">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-clamps-blue/10 text-clamps-muted">
                    <industry.icon aria-hidden className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {industry.title}
                  </h3>
                </article>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              label="Project Portfolio"
              title="Selected engineering work across water infrastructure, fire protection, estates, and industrial systems."
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-navy-900 py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionHeader
              label="Safety & Quality Commitment"
              title="Rigorous engineering, safety, and quality standards across the project lifecycle."
              description="Rigorous standards applied across planning, installation, commissioning, and maintenance."
              inverse
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {safetyCommitments.map((commitment, index) => (
                <MotionCard key={commitment.title} delay={index * 0.05}>
                  <article className="h-full rounded-lg border border-white/[0.12] bg-white/[0.07] p-6 text-white">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-clamps-cyan/10 text-clamps-cyan">
                      <commitment.icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {commitment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel-200">
                      {commitment.description}
                    </p>
                  </article>
                </MotionCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
