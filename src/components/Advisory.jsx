import React, { useState } from 'react'
import { motion } from "framer-motion";
import useScrollDirection from '../hook/UseScrollDirection';
import Counter from './Counter';
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Advisory({setIsOpen}) {
    const [animateDone, setAnimateDone] = useState(false);
    const scrollDir = useScrollDirection();

    const container = (scrollDir) => ({
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.6,
                staggerDirection: scrollDir === "down" ? 1 : -1,
            },
        },
    });

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const wordItem = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const splitWords = (text) =>
        text.split(" ").map((word, idx) => (
            <motion.span key={idx} variants={wordItem} className="inline-block mr-2">
                {word}
            </motion.span>
        ));

    return (
        <section id='advisory' className="py-12 sm:py-20 bg-[#EFF6FF]">
            <div className="custom-container flex flex-col items-center">
                {/* Heading */}
                <motion.h2
                    className={`text-2xl sm:text-3xl md:text-[40px] italic font-medium capitalize mb-2 sm:mb-3 text-center
                        ${animateDone
                            ? "bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] bg-clip-text text-transparent"
                            : "text-[#2E559B]"
                        }`}
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.25,
                                staggerDirection: scrollDir === "down" ? 1 : -1,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                    onAnimationComplete={() => setAnimateDone(true)}
                >
                    {splitWords("Business Advisory with Real World Impact")}
                </motion.h2>


                {/* Subheading */}
                <motion.h3
                    className="text-xl sm:text-2xl md:text-[30px] font-medium text-center max-w-3xl mb-7 md:mb-14"
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.25,
                                staggerDirection: scrollDir === "down" ? 1 : -1,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                >
                    {splitWords(
                        "Guiding Businesses through strategy, regulation, and scalable growth across the Middle East."
                    )}
                </motion.h3>


                {/* Content */}
                <motion.div variants={container(scrollDir)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                   className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mb-12 sm:mb-16">
                    <motion.div variants={item}>
                        <p className="text-base sm:text-lg mb-6 text-[rgb(var(--brand-black))]">
                            I support founders, enterprises, and government aligned initiatives across every stage of growth from market entry and regulatory navigation to strategic planning and execution.
                        </p>
                        <p className="text-base sm:text-lg text-[rgb(var(--brand-black))]">
                            Whether launching a new venture or scaling an existing operation, my approach focuses on clarity, compliance, and sustainable growth.
                        </p>
                    </motion.div>

                    <motion.div variants={item}>
                        <p className="text-base sm:text-lg mb-6 text-[rgb(var(--brand-black))]">
                            As a entrepreneur and technology strategist, I bring a results driven mindset backed by expertise in AI, cloud computing, cybersecurity, and digital transformation.
                        </p>
                        <p className="text-base sm:text-lg text-[rgb(var(--brand-black))]">
                            I specialize in identifying opportunities, solving complex challenges, and transforming ideas into scalable, future ready businesses.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Stats – Full width */}
                <motion.div variants={container(scrollDir)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }} 
                    className="w-full max-w-80 sm:max-w-6xl bg-[#2E559B] rounded-2xl p-5">
                    <motion.div variants={item} className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                        {[
                            { val: 100, label: "Large Scale Projects Worth", suffix: "M+" },
                            { val: 8, label: "Industries Worked Across", suffix: "+" },
                            { val: 7, label: "Countries Served", suffix: "+" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                    <Counter to={stat.val} duration={3} />
                                    {stat.suffix}
                                </h3>
                                <p className="text-white/80 text-sm sm:text-[17px] font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* button */}
                <motion.div variants={container(scrollDir)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }} className="mt-10">
                    <motion.button variants={item} onClick={() => setIsOpen(true)}
                        className="cursor-pointer group relative flex items-center border-2 border-[rgb(var(--brand-light-blue))] px-4 pr-12  sm:pr-14 py-2 sm:py-2.5 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner overflow-hidden active:scale-95 text-sm sm:text-base">
                        Book a Strategy Call
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 size-7 sm:size-9 bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.5rem)]">
                            <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                        </div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
