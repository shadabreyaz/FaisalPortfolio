import React from 'react'
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import useScrollDirection from '../hook/UseScrollDirection';


const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35, // Each card comes one by one
      delayChildren: 0.8,
    },
  },
};

const statsCard = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const statsIcon = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1, 
    transition: { duration: 0.5, ease: "backOut" } 
  },
};


export default function Hero({setIsOpen}) {

  const scrollDir = useScrollDirection();

  const heroContainer = (scrollDir) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
        staggerDirection: scrollDir === "down" ? 1 : -1,
      },
    },
  });

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

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={heroContainer(scrollDir)}
       className="w-full bg-[#f8fafc] relative min-h-screen flex flex-col items-center justify-center">
       <div className="absolute inset-0 z-0"
        style={{ backgroundImage: `
            linear-gradient(20deg, rgba(248,250,252,1) 0%,  rgba(219,234,254,0.7) 30%,  rgba(165,180,252,0.5) 60%, rgba(129,140,248,0.6) 100% ),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)`}}>
       </div>
       <div className="relative custom-container text-center flex flex-col items-center">
         <motion.span variants={heroItem} 
           className="font-semibold text-sm sm:text-base rounded-full px-4 py-1 mb-2 
            border border-[rgb(var(--brand-black))] flex items-center gap-2">
            <FaLocationDot /> Abu Dhabi, UAE
         </motion.span>

         <motion.h1 variants={{ show: { transition: { staggerChildren: 0.4, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
           initial="hidden"
           whileInView="show"
           className="text-3xl sm:text-5xl md:text-6xl leading-tight">
              {splitWords("Hi, I'm")} <span className="text-[rgb(var(--brand-teal))]">{splitWords("Faisal Qutbee")} </span>
              <br />
              {/* {splitWords("Microscopic Dentist")} */}
         </motion.h1>
       </div>
    </motion.section>
  )
}
