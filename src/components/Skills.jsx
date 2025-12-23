import React from "react";
import { motion } from "framer-motion";
import useScrollDirection from "../hook/UseScrollDirection";

export default function Skills() {
  const skills = [
    "AI-Driven Business Intelligence",
    "Cybersecurity Awareness & Risk Management",
    "Cloud Infrastructure & Digital Ecosystems",
    "Data Analysis & Predictive Insights",
    "Healthcare Technology & Longevity Solutions",
    "Artificial Intelligence",
    "Digital Transformation",
    "Visionary Leadership & Growth Strategy",
    "Project Management",
    "Technology Integration & Cloud Solutions",
    "Service Delivery",
    "Business Development & Strategic Partnerships",
    "Market Expansion (UAE & Middle East)",
  ];

  const container = (scrollDir) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: scrollDir === "down" ? 1 : -1,
      },
    },
  });
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  const pill = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };
  
  const scrollDir = useScrollDirection();
  return (
    <section
      id="skills"
      className="py-12 sm:py-20 md:py-0 md:h-screen flex items-center justify-center px-0 sm:px-8 lg:px-12"
      style={{
        background: "linear-gradient(180deg, #D6E2FF 0%, #CDE0FF 100%)",
      }}
    >
      <motion.div className="custom-container" variants={container(scrollDir)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}>
        <motion.h2 variants={item}
          className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 md:mb-1 lg:mb-4 italic bg-linear-to-t from-[#20283f] to-[#3B82F6] bg-clip-text text-transparent`}
        >
          Skills
        </motion.h2>

        <motion.h3 variants={item} className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 md:mb-1 lg:mb-5">
          Bridging Technology, Strategy, and Innovation
        </motion.h3>

        <motion.p variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-6 sm:mb-8 md:mb-5 lg:mb-10 sm:max-w-[90%]">
          A decade-long journey across technology, strategy, and innovation has equipped me with expertise in turning ideas into scalable solutions. My skills span AI-driven technologies, digital ecosystems, cybersecurity, and leadership, enabling measurable impact in enterprises and government initiatives across the Middle East.
        </motion.p>

        {/* Skills Tags with Framer Motion */}
        <motion.div
          className="flex flex-wrap gap-4 lg:gap-6"
          variants={container(scrollDir)}
        >
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              variants={pill}
              whileHover={{
                scale: 1.08,
                transition: { stiffness: 120, damping: 16 },
              }}
              className="bg-white text-[#20283f] text-sm sm:text-base font-medium px-4 py-2 rounded-full shadow-sm cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
