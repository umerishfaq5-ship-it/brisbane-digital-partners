/**
 * Shared Framer Motion animation variants.
 * Import from this file across all pages — do NOT duplicate locally.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** Helper: adds a delay to any variant */
export function withDelay<T extends { visible: { transition?: object } }>(
  variant: T,
  delay: number
): T {
  return {
    ...variant,
    visible: {
      ...variant.visible,
      transition: { ...(variant.visible.transition ?? {}), delay },
    },
  };
}
