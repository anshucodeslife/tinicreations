import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Glow Effect */}
        <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 tracking-wider"
        >
          Tini Creations
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-0.5 bg-amber-500 mt-4"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
