// import { useEffect, useRef } from "react";
// import { animate, useMotionValue } from "framer-motion";

// const Counter = ({ from = 0, to, duration = 2 }) => {
//   const count = useMotionValue(from);
//   const ref = useRef();

//   useEffect(() => {
//     const controls = animate(count, to, {
//       duration,
//       ease: "easeOut",
//       onUpdate(value) {
//         if (ref.current) {
//           ref.current.textContent = Math.floor(value).toLocaleString();
//         }
//       },
//     });

//     return controls.stop;
//   }, []);

//   return <span ref={ref}>{from}</span>;
// };

// export default Counter;


import { useEffect, useRef } from "react";
import { animate, useMotionValue, useInView } from "framer-motion";

const Counter = ({ from = 0, to, duration = 2 }) => {
  const ref = useRef();
  const count = useMotionValue(from);
  const inView = useInView(ref, { once: true, amount: 0.5 }); // ⬅️ Triggers when 50% visible

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toLocaleString();
          }
        },
      });

      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return <span ref={ref}>{from}</span>;
};

export default Counter;