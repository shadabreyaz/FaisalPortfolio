import React from "react";
import { motion } from "framer-motion";
import useScrollDirection from "../hook/UseScrollDirection";

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Member() {
  const scrollDir = useScrollDirection();

  const memberships = [
    {
      org: "Young Leaders AI Community",
      location: "Abu Dhabi",
      role: "Member",
      logo: "/logos/young-leaders-ai.png",
      description: "Collaborating with emerging AI innovators to explore ethical, scalable, and transformative AI solutions.",
    },
    {
      org: "AI for Good",
      location: "Abu Dhabi",
      role: "Member",
      logo: "/logos/ai-for-good.png",
      description: "Engaging in initiatives leveraging AI to address global challenges and promote social impact.",
    },
    {
      org: "Euroweek Foundation",
      location: "Poland",
      role: "Youth Leader",
      logo: "/logos/euroweek.png",
      description: "Leading youth programs that foster international collaboration, leadership, and innovation.",
    },
    {
      org: "Longevity and Wellness Center",
      location: "Dubai",
      role: "Member",
      logo: "/logos/longevity-center.png",
      description: "Contributing to discussions and initiatives focused on health, longevity, and wellness innovation.",
    },
  ];
  

  return (
    <section id="memberships" className="py-12 sm:py-20 md:py-0 md:h-screen flex items-center justify-center bg-[#30395B] px-0 sm:px-8 lg:px-12">
      <motion.div variants={container(scrollDir)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="custom-container">
        <motion.h2 variants={item}
            className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 md:mb-1 lg:mb-4 italic bg-linear-to-t from-[#93C5FD] to-[#3B82F6]
                 bg-clip-text text-transparent`}>
          Memberships
        </motion.h2>

        <motion.h3 variants={item} 
          className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 md:mb-1 lg:mb-5 text-white">
          Connecting with Global Innovation and Leadership Communities
        </motion.h3>

        <motion.p variants={item} 
          className="text-gray-200 text-base sm:text-lg mb-8 md:mb-5 lg:mb-10 sm:max-w-[90%]">
          Over the years I have actively engaged with organizations that drive global innovation, social impact and leadership communities. These memberships reflect a commitment to learning, collaboration, and contributing to organizations shaping the future.
        </motion.p>

        <motion.div variants={container(scrollDir)} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          {memberships.map((member, idx) => (
            <motion.div
              key={idx} variants={card}
              className="flex flex-col items-start p-4 rounded-2xl bg-linear-to-br from-[#FFFFFF]/15 to-[#FFFFFF]/5
              backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(255,255,255,0.16), 0_10px_30px_rgba(0,0,0,0.18)]
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <img
                src={member.logo}
                alt={member.org}
                className="w-16 h-16 object-contain mb-3 md:mb-2 lg:mb-4"
              />
              <h3 className="font-semibold text-base sm:text-lg mb-1 md:mb-0 lg:mb-2 text-white">{member.org}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 mb-1">
                {member.role} — {member.location}
              </p>
              <p className="text-sm md:text-base text-slate-300">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
