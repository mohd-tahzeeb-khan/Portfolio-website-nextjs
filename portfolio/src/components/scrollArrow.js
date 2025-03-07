'use client'
import { motion } from "framer-motion";

const ScrollArrow = () => {
  // Animation variants for the arrow
  const arrowVariants = {
    initial: { y: 0 },
    animate: { y: 10, transition: { yoyo: Infinity, duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "50px",
        left: "90%",
        transform: "translateX(-50%)",
        fontSize: "100px",
        cursor: "pointer",
        color:"#000"
      }}
    //   variants={arrowVariants}
      initial={{y:0}}
      animate={{y:10, transition:{yoyo:Infinity, duration:0.8, ease:"easeInOut"}}}
    >
      ↓
    </motion.div>
  );
};

export default ScrollArrow;