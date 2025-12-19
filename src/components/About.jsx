import React, { useState } from 'react'
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import useScrollDirection from '../hook/UseScrollDirection';

export default function About() {
  const [animateDone, setAnimateDone] = useState(false);

  // Parent container animation
  const container = (scrollDir) => ({
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        staggerDirection: scrollDir === "down" ? 1 : -1, // reverse if scrolling up
      },
    },
  });

  // Every line animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Word-by-word animation for headings
  const wordItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Helper to split text into words for word animation
  const splitWords = (text) =>
    text.split(" ").map((word, idx) => (
      <motion.span key={idx} variants={wordItem} className="inline-block mr-2">
        {word}
      </motion.span>
  ));

  const scrollDir = useScrollDirection(); // 'up' or 'down'
  return (
    <section id='about' className="py-12 sm:py-20 bg-[#EFF6FF]">
        
      <div className="custom-container flex flex-col lg:flex-row items-end gap-10">
        <motion.div
            className="w-full lg:w-[40%] flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.91, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img
                src="/faisal.webp"
                alt="About-img"
                className="w-full sm:h-100 lg:h-145 rounded-3xl object-cover object-bottom-right"
            />
        </motion.div>

        <motion.div className='w-full lg:w-[60%]'
          variants={container(scrollDir)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}>
  
            <motion.h2 
              className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-4 italic  
              ${animateDone ? 'bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] bg-clip-text text-transparent' : 'text-[#2E559B]'}`}
              variants={{ show: { transition: { staggerChildren: 0.2, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
              initial="hidden"
              whileInView="show"
              onAnimationComplete={() => setAnimateDone(true)}
            >
              {splitWords("Turning vision into impact through AI Technology, Healthcare, and Longevity across the Middle East.")}
            </motion.h2>

            {/* Word-by-word subheading */}
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-5"
              variants={{ show: { transition: { staggerChildren: 0.25, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
              initial="hidden"
              whileInView="show"
            >
              {splitWords("Entrepreneur & Strategist Shaping Innovation.")}
            </motion.h3>

            <motion.p 
             variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-6 sm:max-w-[90%]">
              With over a decade of experience, I help individuals and organizations unlock their potential across the Middle East and beyond. My approach blends visionary strategy, operational excellence, and technology-driven innovation, ensuring each project not only succeeds but reshapes the industry it touches.
            </motion.p>
            <motion.p 
             variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-8 sm:max-w-[90%]">
              Technology is more than a tool, it is the canvas on which we build the future of business and humanity. Innovation is turning the impossible into the inevitable, and true progress lies in daring to create what others only imagine.
            </motion.p>
        
            <motion.div variants={item}>
              <button
                className="cursor-pointer group relative flex items-center border-2 border-[rgb(var(--brand-light-blue))] px-4 pr-12  sm:pr-14 py-2 sm:py-2.5 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner overflow-hidden active:scale-95 text-sm sm:text-base">
                  About Me
                <div className="absolute right-1 top-1/2 -translate-y-1/2 size-7 sm:size-9 bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.5rem)]">
                <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </div>
              </button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
