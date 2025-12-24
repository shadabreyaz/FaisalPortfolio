import React, { useState } from 'react'
import { motion } from "framer-motion";
import useScrollDirection from '../hook/UseScrollDirection';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";


export default function Contact() {
    const scrollDir = useScrollDirection();
    const [animateDone, setAnimateDone] = useState(false);

    const container = (scrollDir) => ({
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.35,
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
        <section id='contact' className="pt-12 sm:pt-20">
            <div className="custom-container">
                {/* Heading */}
                <motion.h2
                    className={`text-2xl sm:text-3xl md:text-[40px] italic font-semibold capitalize mb-2 sm:mb-3 text-center
                        ${animateDone
                            ? "bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] bg-clip-text text-transparent"
                            : "text-[#2E559B]"
                        }`}
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.28,
                                staggerDirection: scrollDir === "down" ? 1 : -1,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                    onAnimationComplete={() => setAnimateDone(true)}
                >
                    {splitWords("Get In Touch")}
                </motion.h2>

                {/* Contact form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 sm:mt-16 pb-8 sm:pb-14">
                    <motion.div variants={container(scrollDir)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}>
                        <motion.h3  variants={item} className="text-xl sm:text-[26px] md:text-4xl leading-tight font-medium mb-2 sm:mb-3">
                            Contact Us
                        </motion.h3>
                        <motion.h3  variants={item} className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-3 md:mb-5 bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] bg-clip-text text-transparent">
                            Let's Talk for Your Next Projects.
                        </motion.h3>
                        <motion.p  variants={item} className="text-base sm:text-lg mb-6 sm:mb-7 text-[rgb(var(--brand-black))]">
                            If you have a question or need guidance, fill out the form and our team will get back to you shortly.You can also reach us directly by email.
                        </motion.p>

                        <div className='flex items-center gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-7 flex-wrap'>
                            <motion.div  variants={item}>
                                <p className="font-semibold text-lg sm:text-xl 
                                text-[rgb(var(--brand-black))] mb-1">Email</p>
                                <a href='mailto:support@qutbee.com' className='flex items-center gap-2 text-base sm:text-lg hover:text-[#2E559B] hover:-translate-y-1 transition-all duration-300'>
                                    <IoIosMail className='size-6 text-[#2E559B]' /> support@qutbee.com
                                </a>
                            </motion.div>

                            <motion.div  variants={item}>
                                <p className="font-semibold text-lg sm:text-xl
                                text-[rgb(var(--brand-black))] mb-1">Phone</p>
                                <a href='tel:+971509853664' className='flex items-center gap-2 text-base sm:text-lg hover:text-[#2E559B] hover:-translate-y-1 transition-all duration-300'><FaPhone className='size-5 text-[#2E559B]' /> +971 509853664</a>
                            </motion.div>
                        </div>

                        <div>
                            <motion.p  variants={item} className="font-semibold text-lg sm:text-xl text-[rgb(var(--brand-black))] mb-3">
                                Follow Me
                            </motion.p>
                            <div className="flex items-center gap-6">
                                <motion.div variants={item}>
                                    <a href="https://www.instagram.com/faisalqutbee/?hl=en" target='_blank' className=" bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] size-10 flex items-center justify-center rounded-full hover:scale-125 transition-all duration-300" >
                                        <FaInstagram className="size-5 text-white" />
                                    </a>
                                </motion.div>

                               <motion.div variants={item}>
                                <a href="https://www.linkedin.com/in/ifaisalrafiq/" target='_blank' className="bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] size-10 flex items-center justify-center rounded-full hover:scale-125 transition-all duration-300" >
                                        <FaLinkedinIn className="size-5 text-white" />
                                    </a>
                               </motion.div>

                                <motion.div variants={item}>
                                    <a href="https://wa.me/971509853664" target="_blank" aria-label="Whatsapp" className="bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] size-10 flex items-center justify-center rounded-full hover:scale-125 transition-all duration-300" >
                                        <FaWhatsapp className="size-5 text-white" />
                                    </a>
                                </motion.div>

                                <motion.div variants={item}>
                                    <a href="https://www.facebook.com/faisalqutbee/" target='_blank' className="bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] size-10 flex items-center justify-center rounded-full hover:scale-125 transition-all duration-300" >
                                        <FaFacebookF className="size-5 text-white" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form className="" initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}>
                        <div className='mb-6'>
                            <label className="block font-semibold text-base sm:text-lg text-[rgb(var(--brand-blue))] mb-1">
                                Name & Surname*
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. James Brown"
                                className="w-full border-b-2 focus:outline-none py-1"
                            />
                        </div>

                        <div className='mb-6'>
                            <label className="block font-semibold text-base sm:text-lg text-[rgb(var(--brand-blue))] mb-1">
                                Email*
                            </label>
                            <input
                                type="email"
                                placeholder="e.g. mail@example.com"
                                className="w-full border-b-2 focus:outline-none py-1"
                            />
                        </div>

                        <div className='mb-6'>
                            <label className="block font-semibold text-base sm:text-lg text-[rgb(var(--brand-blue))] mb-1">
                                Phone*
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. +356 99 999 999"
                                className="w-full border-b-2 focus:outline-none py-1"
                            />
                        </div>

                        <div className='mb-6'>
                            <label className="block text-base sm:text-lg font-semibold text-[rgb(var(--brand-blue))]">
                                Message Us
                            </label>
                            <textarea
                                rows="3"
                                placeholder="How can we help you?"
                                className="w-full mt-1 border-b-2 focus:outline-none p-1">
                            </textarea>
                        </div>

                        <button
                            className="cursor-pointer group relative flex items-center border-2 border-[rgb(var(--brand-light-blue))] px-8 pr-12 sm:pr-18 py-2 sm:py-2.5 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner overflow-hidden active:scale-95 text-sm sm:text-lg">
                             Send Message
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 size-7 sm:size-9 bg-linear-to-r from-[rgb(var(--brand-dark-blue))] to-[rgb(var(--brand-primary-blue))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.5rem)]">
                            <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                            </div>
                        </button>

                    </motion.form>
                </div>

                <motion.footer variants={container(scrollDir)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }} 
                  className='flex items-center justify-between border-t border-gray-400
                  py-4 sm:py-6'>
                    <motion.span variants={item} className='text-sm sm:text-base'>Faisal@qutbee.com</motion.span>
                    <motion.span variants={item} className='text-sm sm:text-base'>All Rights Reserved</motion.span>
                </motion.footer>
            </div>
        </section>
    )
}
