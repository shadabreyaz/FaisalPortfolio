import React from 'react'
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
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


export default function Timeline({ id, background = "#EFF6dd", title, subtitle, description, items}) {
  const scrollDir = useScrollDirection();

      return (
        <section id={id} className={`${background} py-12 sm:py-20 md:py-0 md:h-screen flex items-center justify-center px-0 sm:px-8`}>
          <div className="custom-container flex flex-col lg:flex-row items-center gap-8 md:gap-2 lg:gap-10">
    
            {/* LEFT SIDE — INTRO */}
            <motion.div
                className="w-full"
                variants={container(scrollDir)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
              >

              <motion.h2 variants={item} className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 md:mb-1 lg:mb-4 italic bg-linear-to-t from-[#93C5FD] to-[#3B82F6]
                 bg-clip-text text-transparent`}>
                {title}
              </motion.h2> 

              <motion.h3  variants={item} className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 md:mb-1 lg:mb-5 text-white">
               {subtitle}
              </motion.h3> 

              <motion.p  variants={item} className="text-base sm:text-lg mb-4 sm:mb-6 sm:max-w-[90%] text-gray-200">
               {description}
              </motion.p>

            </motion.div>
    
            {/* RIGHT SIDE — EXPERIENCE STACK */}
            <motion.div  variants={container(scrollDir)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }} 
              className="w-full flex flex-col justify-center gap-7 md:gap-4 lg:gap-8 border-l border-slate-300 pl-6 sm:pl-8">
              {items.map((exp, idx) => (
                <motion.div key={idx} variants={item} className="relative group">
                  
                  {/* Dot indicator */}
                  <span className="timeline-dot absolute -left-8 sm:-left-10 top-3 size-4 rounded-full bg-[rgb(var(--brand-light-blue))] transition-transform duration-500 ease-in-out 
                     group-hover:scale-150" />
    
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-100">
                    {exp.role}
                  </h3>
    
                  <p className="font-medium text-[rgb(var(--brand-light-blue))]">
                    {exp.company}  {exp.location? '—' : ''} {exp.location}
                  </p>
    
                  <p className="text-sm text-gray-200 mb-1">
                    {exp.period}
                  </p>
    
                  <p  className="text-base sm:text-lg text-gray-300 max-w-[96%] md:max-w-[98%]">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
    
          </div>
        </section>
      );
}
