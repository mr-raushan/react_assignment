import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl text-indigo-600">SoftSell</span>
        {/* Logo placeholder */}
        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold">
          S
        </span>
      </div>
      <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
        {[
          { label: "How It Works", href: "#how" },
          { label: "Why Choose Us", href: "#why" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ].map((item, idx) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + idx * 0.1,
              duration: 0.4,
              type: "spring",
            }}
            whileHover={{ scale: 1.1, color: "#6366f1" }}
          >
            <a href={item.href} className="hover:text-indigo-600">
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
      {/* Dark mode toggle */}
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
