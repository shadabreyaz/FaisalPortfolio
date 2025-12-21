import React, {useRef} from 'react'
import {motion, useScroll, useTransform } from 'framer-motion';

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target:targetRef});
    const x = useTransform(scrollYProgress, [0,1], ['0%', '-68%'])

  return (
    <div className='carousel bg-gray-700 h-[500vh]' ref={targetRef}>
        <div className="contentcontainer h-screen sticky top-0 flex items-center justify-start overflow-hidden">
            <motion.div className="images flex w-[300vw] gap-[3vw] px-16 py-0" style={{x}}>
                <div className="imageItem w-screen shrink-0">
                    <Experience />
                </div>
                <div className="imageItem w-screen shrink-0">
                    <Experience />
                </div>
                <div className="imageItem w-screen shrink-0">
                    <Experience />
                </div>
            </motion.div>
        </div>
    </div>
  )
}
