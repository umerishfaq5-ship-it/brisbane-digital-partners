import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
}

const SectionHeading = ({ eyebrow, title, description, center = true, light = false, level = 2, id }: SectionHeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`mb-14 md:mb-20 ${center ? "text-center" : ""}`}
  >
    {eyebrow && (
      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${
        light 
          ? "bg-accent/15 text-accent border border-accent/20" 
          : "bg-primary/5 text-primary border border-primary/10"
      }`}>
        <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-accent" : "bg-accent"}`} />
        {eyebrow}
      </span>
    )}
    <HeadingTag id={id} className={`font-heading font-bold text-3xl md:text-[2.75rem] leading-[1.12] ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </HeadingTag>
    {description && (
      <p className={`mt-5 max-w-2xl leading-relaxed text-[15px] ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
  );
};

export default SectionHeading;
