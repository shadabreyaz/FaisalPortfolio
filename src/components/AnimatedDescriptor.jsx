import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "TECH SAVVY ENTREPRENEUR",
  "BUSINESS STRATEGIST",
  "AI VISIONARY",
];

export default function AnimatedDescriptor() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.4em] overflow-hidden">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center
          text-[rgb(var(--brand-teal))] font-semibold tracking-wide"
      >
        {words[index]}
      </motion.span>
    </div>
  );
}
