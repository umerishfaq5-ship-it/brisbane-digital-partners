import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ eyebrow, title, description, center = true, light = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`mb-14 md:mb-20 ${center ? "text-center" : ""}`}
  >
    {eyebrow && (
      <span className={`inline-block font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3 ${light ? "text-accent" : "text-accent"}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`font-heading font-bold text-3xl md:text-[2.75rem] leading-[1.15] ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-5 max-w-2xl leading-relaxed text-[15px] ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
