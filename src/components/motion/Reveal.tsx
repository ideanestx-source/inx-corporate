"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation delay in seconds — use for staggering siblings (e.g. i * 0.07). */
  delay?: number;
  duration?: number;
  /** Vertical offset (px) the content animates in from. Set 0 to disable. */
  y?: number;
  /** Horizontal offset (px) the content animates in from. Set 0 to disable. */
  x?: number;
  /** Replay every time the element re-enters view instead of only once. */
  once?: boolean;
  /** Fraction of the element that must be visible before it reveals. */
  amount?: number;
};

/**
 * Shared scroll-reveal wrapper — the single implementation of the
 * `useInView` + `motion.div` fade/slide-in pattern that was previously
 * duplicated inline across most section components.
 *
 * Respects `prefers-reduced-motion` automatically: the root layout wraps the
 * app in `<MotionConfig reducedMotion="user">`, which every `motion.*`
 * element (including this one) reads from context — no per-component
 * handling required here.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 16,
  x = 0,
  once = true,
  amount = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
