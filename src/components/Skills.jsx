import React from "react";
import { motion } from "framer-motion";

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
    "Service Delivery",
    "Technology Integration & Cloud Solutions",
    "Business Development & Strategic Partnerships",
    "Market Expansion (UAE & Middle East)",
  ];

  // Variants for fade-in with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  return (
    <section
      id="skills"
      className="py-12 sm:py-20"
      style={{
        background: "linear-gradient(180deg, #D6E2FF 0%, #CDE0FF 100%)",
      }}
    >
      <div className="custom-container">
        <h2
          className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 sm:mb-4 italic bg-linear-to-t from-[#20283f] to-[#3B82F6] bg-clip-text text-transparent`}
        >
          Skills
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 sm:mb-5">
          Bridging Technology, Strategy, and Innovation
        </h3>

        <p className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-12 sm:max-w-[90%]">
          A decade-long journey across technology, strategy, and innovation has equipped me with expertise in turning ideas into scalable solutions. My skills span AI-driven technologies, digital ecosystems, cybersecurity, and leadership, enabling measurable impact in enterprises and government initiatives across the Middle East.
        </p>

        {/* Skills Tags with Framer Motion */}
        <motion.div
          className="flex flex-wrap gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05,
                transition: { stiffness: 80, damping: 36 } 
              }}
              className="bg-white text-[#20283f] text-sm sm:text-base font-medium px-4 py-2 rounded-full shadow-sm cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
