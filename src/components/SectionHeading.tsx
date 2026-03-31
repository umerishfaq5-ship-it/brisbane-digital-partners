import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ eyebrow, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
  >
    {eyebrow && (
      <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-2">
        {eyebrow}
      </span>
    )}
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>}
  </motion.div>
);

export default SectionHeading;
