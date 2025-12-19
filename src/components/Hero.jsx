import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import useScrollDirection from "../hook/UseScrollDirection";
import Counter from "./Counter";

/* ================= VARIANTS ================= */

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= HELPERS ================= */

const splitWords = (text) =>
  text.split(" ").map((word, idx) => (
    <motion.span
      key={idx}
      variants={wordItem}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));

const letterItem = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.54,
      ease: "easeOut",
    },
  },
};

const splitLetters = (text) =>
  text.split("").map((char, idx) => (
    <motion.span
      key={idx}
      variants={letterItem}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));


/* ================= COMPONENT ================= */

export default function Hero() {
  const scrollDir = useScrollDirection();

  /* ---- Looping titles ---- */
  const titles = [
    "TECH SAVVY ENTREPRENEUR",
    "BUSINESS STRATEGIST",
    "AI VISIONARY",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [startLoop, setStartLoop] = useState(false);

  useEffect(() => {
    if (!startLoop) return;

    const lettersCount = titles[titleIndex].length;

    const staggerTime = 0.1; // same as your letter stagger
    const animationTime = lettersCount * staggerTime * 1000; // ms
    const pauseAfterWord = 1200; // 1.2s pause after full word

    const timeout = setTimeout(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, animationTime + pauseAfterWord);

    return () => clearTimeout(timeout);
  }, [startLoop, titleIndex]);


  /* ---- Container stagger ---- */
  const heroContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
        staggerDirection: scrollDir === "down" ? 1 : -1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.4 } }, // stagger everything in order
      }}
      className="w-full bg-[#f8fafc] relative pt-36 pb-4 sm:pt-0 sm:pb-0 sm:min-h-screen flex flex-col justify-end items-center"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-left md:bg-center"
        style={{
          backgroundImage: "url('/hero-bg.webp')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-t from-[#20283f]/95 via-[#20283f]/55 to-[#20283f]/40" />

      {/* Content */}
      <div className="relative z-10 custom-container text-center flex flex-col items-center">

        {/* Location */}
        <motion.span variants={heroItem} className="font-semibold text-sm sm:text-base rounded-full px-4 py-1 mb-4 border border-[rgb(var(--brand-white))] text-white flex items-center gap-2">
          <FaLocationDot className="text-white" /> Abu Dhabi, UAE
        </motion.span>

        {/* H1 */}
        <motion.h1
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.4 } } }}
          className="text-3xl sm:text-4xl md:text-5xl leading-tight text-white"
        >
          {splitWords("Hi, I'm")}
          <span className="text-[rgb(var(--brand-light-blue))]">{splitWords("Faisal Qutbee")}</span>
        </motion.h1>

        {/* H2 looping titles */}
        <motion.div
          variants={heroItem}
          onAnimationComplete={() => setStartLoop(true)}
          className="mb-4 min-h-12 sm:min-h-18 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={titles[titleIndex]}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[rgb(var(--brand-white))]"
            >
              {splitLetters(titles[titleIndex])}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.3 } } }} className="flex gap-4 flex-wrap justify-center">
          <motion.button variants={buttonItem} className="cursor-pointer group relative flex items-center border-2 border-white px-4 pr-12 sm:pr-14 py-2 sm:py-2.5 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner overflow-hidden active:scale-95 text-sm sm:text-base">
            Schedule a Call
            <div className="absolute right-1 top-1/2 -translate-y-1/2 size-7 sm:size-9 bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.5rem)]">
              <HiArrowNarrowRight className="text-white w-5 h-5 group-hover:translate-x-1 transition" />
            </div>
          </motion.button>

          <motion.button variants={buttonItem} className="cursor-pointer px-6 sm:px-10 py-2 sm:py-2.5 border-2 border-[rgb(var(--brand-light-blue))] hover:bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] hover:text-white bg-white font-semibold rounded-full shadow-inner active:scale-95 text-sm sm:text-base">
            View My Work
          </motion.button>
        </motion.div>

        {/* Hero Content (Stats → Scroll → Description) */}
        <motion.div 
          variants={heroContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex flex-col lg:flex-row items-center justify-between mt-8 sm:mt-12 lg:mt-18 mb-6 gap-8 lg:gap-16 w-full">
          {/* Stats */}
          <div className="w-full lg:w-[38%] flex justify-center gap-6 order-1 lg:order-0">
            {[{ val: 100, label: 'Completed Projects' }, { val: 98, label: 'Client Satisfaction' }, { val: 10, label: 'Years of Experience' }].map((item, i) => (
              <motion.div key={i} variants={heroItem} className="flex flex-col items-center">
                <h3 className="text-xl sm:text-3xl font-bold leading-tight text-[rgb(var(--brand-light-blue))]">
                  <Counter to={item.val} duration={4} />{i === 1 ? '%' : '+'}
                </h3>
                <p className="text-[rgb(var(--brand-white))] text-lg font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="shrink-0 flex flex-col items-center justify-center order-1 lg:order-0">
            <motion.div variants={heroItem} className="flex flex-col items-center">
              <motion.div className="w-10 h-10 rounded-full border-2 border-[rgb(var(--brand-light-blue))] flex items-center justify-center mb-2 shadow-md" animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <motion.div className="w-4 h-4 rounded-full bg-[rgb(var(--brand-light-blue))]" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
              </motion.div>
              <motion.p className="text-sm sm:text-base text-[rgb(var(--brand-white))] tracking-wider font-semibold text-center">
                Scroll to Explore
              </motion.p>
            </motion.div>
          </div>

          {/* Description */}
          <div className="w-full lg:w-[38%] justify-items-center lg:justify-items-end">
            <motion.p variants={heroItem} className="text-base text-[rgb(var(--brand-white))] text-center lg:text-left sm:max-w-5/6">
              I’m a Dubai-based Entrepreneur and Business Strategist specializing in AI Technology, Healthcare, and Longevity. With experience across the UAE in multinationals, private enterprises, and government initiatives like Digital Dubai and major Abu Dhabi projects, I drive innovation at the intersection of business and human well-being.
            </motion.p>
          </div>
        </motion.div>
      </div>

    </motion.section>

  );
}
