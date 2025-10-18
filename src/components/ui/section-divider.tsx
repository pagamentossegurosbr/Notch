import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

export const SectionDivider = ({ className }: SectionDividerProps) => {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent opacity-10",
        className,
      )}
      initial={{ opacity: 0.08 }}
      animate={{ opacity: [0.08, 0.12, 0.08] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

export default SectionDivider;