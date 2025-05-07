import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
      >
        Unlock Value from Unused Software Licenses
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        SoftSell helps businesses resell or value their unused software licenses
        quickly, securely, and for the best price.
      </motion.p>
      <a href="#contact">
        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.08 }}
        >
          Get a Quote
        </motion.button>
      </a>
    </section>
  );
};

export default HeroSection;
