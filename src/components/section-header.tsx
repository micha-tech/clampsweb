import { FadeIn } from "@/components/motion";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {label ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            inverse ? "text-clamps-cyan" : "text-clamps-muted"
          }`}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          inverse ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            inverse ? "text-steel-200" : "text-steel-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
