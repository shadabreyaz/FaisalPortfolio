import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

const Counter = ({ from = 0, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const ref = useRef();

  useEffect(() => {
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
  }, []);

  return <span ref={ref}>{from}</span>;
};

export default Counter;
