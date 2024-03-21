import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const text1 = "Portal Talian";
  const text2 = "Indahkan Malaysia";


  const wordAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  const wordAnimation2 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay:0.5 },
  };

  return (
    <div className="h-screen bg-[url('/bg-kualalumpur.webp')] bg-cover mt-12">
      <div className="container mx-auto px-4 md:px-0 flex items-center h-full">
        <motion.div
          className="banner-name"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }} // Stagger the animation of children
        >
          <p className="text-white font-bold text-4xl md:text-8xl">
            <motion.span
                {...wordAnimation1}
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {text1}
              </motion.span>
          </p>
          <p className="text-white font-bold text-4xl md:text-8xl">
            <motion.span
                {...wordAnimation2}
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {text2}
              </motion.span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
