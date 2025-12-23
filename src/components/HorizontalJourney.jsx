import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Timeline from './Timeline';
import Member from './Member';
import Skills from './Skills';
import useScrollDirection from '../hook/UseScrollDirection';
import { mobileContainer, mobileItem } from '../animations/mobileanimation';

export default function HorizontalJourney({ setHideHeader }) {
  const experiences = [
    {
      role: "Chief Executive Officer / CTO",
      company: "Qutbee Technologies",
      location: "Abu Dhabi, UAE",
      period: "2020 – Present",
      description:
        "Leading technology, strategy, and operations with a strong focus on AI-driven solutions, digital ecosystems, and scalable innovation.",
    },
    {
      role: "TechOps Specialist",
      company: "Abu Dhabi Investment Authority",
      location: "Abu Dhabi, UAE",
      period: "2017 – 2020",
      description:
        "Oversaw IT operations, infrastructure optimization, and enterprise-level systems supporting critical government initiatives.",
    },
    {
      role: "Lead Operations (NOC / IT)",
      company: "Digital Dubai",
      location: "Dubai, UAE",
      period: "2014 – 2017",
      description:
        "Contributed to Dubai’s digital transformation, including the landmark initiative that established the world’s first paperless government.",
    },
  ];
  const education = [
    {
      role: "Corporate Strategy",
      company: "University of London",
      period: "2020",
      description:
        "A focused foundation in strategic planning, market analysis, and financial decision-making, aligning vision, execution, and innovation.",
    },
    {
      role: "Master of Science in Information Technology",
      company: "School of Engineering & Technology, BGSB University (State University)",
      period: "2016 – 2018",
      description:
        "Advanced studies in information systems and enterprise technologies, reinforcing system design, analytical thinking, and scalable platform architecture.",
    },
    {
      role: "Bachelor of Computer Applications (BCA)",
      company: "University of Kashmir",
      period: "2013 – 2016",
      description:
        "Built core expertise in computer science, software development, and systems thinking.",
    },
  ];


  const targetRef = useRef(null);

  // for header
  useEffect(() => {
    if (window.innerWidth < 768) return;
  
    const section = targetRef.current;
    if (!section) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideHeader(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
  
    observer.observe(section);
  
    return () => observer.disconnect();
  }, [setHideHeader]);

  // for horizontal scroll
 
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  // for animation
  const scrollDir = useScrollDirection();
  return (
    <>
      {/* MOBILE — vertical */}
      <div className="block md:hidden">
        <motion.div
          variants={mobileContainer(scrollDir)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
         >
          <motion.div variants={mobileItem}>
           <Timeline id="journey"
              title="Experience"
              subtitle="Leadership in Technology, Strategy & Digital Transformation"
              description="A decade-long journey shaping innovation across government, enterprise, and emerging technology ecosystems in the Middle East. Each role reflects a commitment to turning vision into impact leveraging AI, scalable systems, and operational excellence to build the future."
              items={experiences}
              background="bg-linear-to-br from-[#2C3654] via-[#2C3654] to-[#2E559B]"
            />
          </motion.div>
        </motion.div>

        <motion.div
            variants={mobileContainer(scrollDir)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={mobileItem}>
              <Timeline id="education"
                title="Education"
                subtitle="Strategic Thinking Grounded in Technical Excellence"
                description="My academic path mirrors the same philosophy that defines my professional journey combining strategic insight with strong technical foundations. Each stage of education strengthened my ability to navigate complexity, lead change, and design technology-driven solutions with long term impact."
                items={education}
                background="bg-linear-to-tr from-[#2C3654] via-[#2C3654] to-[#2E559B]"
              />
            </motion.div>
        </motion.div>
       
        <motion.div className="imageItem w-screen shrink-0">
          <Member />
        </motion.div>

        <motion.div className="imageItem w-screen shrink-0">
          <Skills />
        </motion.div>

      </div>

      {/* Desktop version                     to increase the scroll speed change height */}
      <div className='bg-[#EFF6FF] h-[500vh] hidden md:block relative' ref={targetRef}>  
        <div className="contentcontainer h-screen sticky top-0 flex items-center justify-start overflow-hidden">
          <motion.div className="images flex w-[300vw] py-0" style={{ x }}>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, threshold:0.99 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="imageItem w-screen shrink-0">
              <Timeline id="journey"
                title="Experience"
                subtitle="Leadership in Technology, Strategy & Digital Transformation"
                description="A decade-long journey shaping innovation across government, enterprise, and emerging technology ecosystems in the Middle East. Each role reflects a commitment to turning vision into impact leveraging AI, scalable systems, and operational excellence to build the future."
                items={experiences}
                background="bg-linear-to-br from-[#2C3654] via-[#2C3654] to-[#2E559B]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, threshold:0.99 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               className="imageItem w-screen shrink-0">
              <Timeline id="education"
                title="Education"
                subtitle="Strategic Thinking Grounded in Technical Excellence"
                description="My academic path mirrors the same philosophy that defines my professional journey combining strategic insight with strong technical foundations. Each stage of education strengthened my ability to navigate complexity, lead change, and design technology-driven solutions with long term impact."
                items={education}
                background="bg-linear-to-tr from-[#2C3654] via-[#2C3654] to-[#2E559B]"
              />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, threshold:0.99 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               className="imageItem w-screen shrink-0">
              <Member />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, threshold:0.99 }}
              transition={{ duration: 0.8, ease: "easeOut" }} 
             className="imageItem w-screen shrink-0">
              <Skills />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </>
  )
}
