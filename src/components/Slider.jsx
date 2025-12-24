import React from 'react'
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Slider({
    logos,
    speed = 20, // pixels per second (higher = faster)
    direction = 'left'
}) {

    const controls = useAnimationControls();

    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos];

    const containerWidth = logos.length * 120; // Approx width per logo (adjust based on your logo size)
    const totalWidth = containerWidth * 2;

    useEffect(() => {
        const animateSlider = async () => {
            await controls.start({
                x: direction === 'left' ? `-50%` : '50%',
                transition: {
                    duration: totalWidth / speed,
                    repeat: Infinity,
                    ease: 'linear',
                },
            });
        };

        animateSlider();

        return () => controls.stop();
    }, [controls, totalWidth, speed, direction]);

  return (
        <div className='relative'>
          <div className="relative z-10 w-full overflow-hidden py-2 bg-[rgb(var(--brand-dark-blue))]">
                <motion.div
                    className="flex whitespace-nowrap">
                    <motion.div
                        className="flex items-center gap-12 sm:gap-20 md:gap-28"
                        animate={controls}
                        style={{ width: totalWidth }}>
                        {duplicatedLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 size-28 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="object-cover brightness-155 contrast-120"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
          </div>
        </div>
  )
}
