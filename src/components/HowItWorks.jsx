import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "📤",
    title: "Upload License",
    desc: "Submit your unused software license details securely.",
  },
  {
    icon: "💰",
    title: "Get Valuation",
    desc: "Receive a fair market valuation within 24 hours.",
  },
  {
    icon: "🏦",
    title: "Get Paid",
    desc: "Accept the offer and receive payment instantly.",
  },
];

const HowItWorks = () => (
  <section id="how" className="py-16 px-4 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300">
      How It Works
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center bg-indigo-50 dark:bg-gray-800 rounded-lg p-6 shadow w-64"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="font-semibold text-xl mb-2 text-indigo-700 dark:text-indigo-200">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
