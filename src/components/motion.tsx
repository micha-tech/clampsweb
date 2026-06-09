"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionBlockProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function FadeIn({ children, className, delay = 0 }: MotionBlockProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className, delay = 0 }: MotionBlockProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? {} : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.48, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
