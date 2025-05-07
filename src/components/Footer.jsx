import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="py-6 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, type: "spring" }}
  >
    &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
  </motion.footer>
);

export default Footer;
