export const mobileContainer = (scrollDir) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        staggerDirection: scrollDir === "down" ? 1 : -1,
      },
    },
  });
  
  export const mobileItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };