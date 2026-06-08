import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "full",
  className,
  priority = false,
}: BrandLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/clamps-logo-mark.png"
        alt="Clamps Engineering Solutions Limited mark"
        width={458}
        height={482}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src="/clamps-logo-full.png"
      alt="Clamps Engineering Solutions Limited"
      width={1401}
      height={482}
      priority={priority}
      className={className}
    />
  );
}
