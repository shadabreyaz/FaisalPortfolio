import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const socialLinks = [
  { href: "https://www.facebook.com/faisalqutbee/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/faisalqutbee/?hl=en", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaXTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/ifaisalrafiq/", icon: FaLinkedinIn, label: "LinkedIn" },
];

const menuLinks = [
  { href: "#about", label: "About" },
  { href: "#advisory", label: "Advisory" },
  { href: "#contact", label: "Contact" },
  { href: "#journey", label: "Journey" },
];

export default function Header({ hidden }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function smoothScroll(e, id) {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }

  return (
    <motion.nav
      initial="hidden"
      animate={[
        "visible",
        hidden ? "hideHeader" : "showHeader",
      ]}
      variants={{
        ...headerVariants,
        hideHeader: {
          y: "-120%",
          opacity: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        },
        showHeader: {
          y: "0%",
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        },
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out overflow-hidden
        ${
          isScrolled
            ? "top-2 backdrop-blur-lg shadow-md rounded-4xl sm:rounded-[40px] w-[86%] bg-[#20283f]/60"
            : "top-0 w-full bg-transparent"
        }`}
    >
      {/* HEADER BAR */}
      <div className="custom-container flex items-center py-4 md:py-5">

        {/* MOBILE LOGO */}
        <motion.a href="/" variants={itemVariants}
          className="lg:hidden font-semibold font-nata text-2xl sm:text-3xl uppercase bg-linear-to-r from-[#93C5FD] via-[#C7D2FE] to-[#3B82F6]
            bg-clip-text text-transparent">
            Qutbee
        </motion.a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center justify-between w-full">

          {/* LEFT – SOCIAL */}
          <div className={`flex-1 flex justify-start ${isScrolled ? "gap-1" : "gap-2.5"}`}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                variants={itemVariants}
                target="_blank"
                className="group relative text-white font-medium text-lg flex items-center gap-1"
              >
                <span className="font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  [
                </span>

                <span>{isScrolled ? <Icon className="size-5" /> : label}</span>

                <span className="font-semibold opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  ]
                </span>
              </motion.a>
            ))}
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <motion.a href="/" variants={itemVariants}
              className="font-semibold font-nata text-3xl uppercase bg-linear-to-r from-[#93C5FD] via-[#C7D2FE] to-[#3B82F6]
              bg-clip-text text-transparent">
              Qutbee
            </motion.a>
          </div>

          {/* RIGHT – MENU */}
          <div className="flex-1 flex justify-end items-center gap-3">
            {menuLinks.map(({ href, label }) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                variants={itemVariants}
                className="group relative font-medium text-lg text-white flex items-center gap-1"
              >
                <span className="font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  [
                </span>
                <span>{label}</span>
                <span className="font-semibold opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  ]
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <motion.button
          variants={itemVariants}
          className="lg:hidden ml-auto text-2xl text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* MOBILE MENU (SAME SURFACE) */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 px-6 py-6 bg-[#20283f]/60 backdrop-blur-lg">

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-2xl text-white hover:text-teal-400 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* MENU LINKS */}
          <div className="flex flex-col gap-4 text-center">
            {menuLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                className="text-lg text-white hover:text-teal-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
