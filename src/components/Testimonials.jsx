import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "Acme Corp",
    review:
      "SoftSell made it incredibly easy to turn our unused licenses into cash. Fast, secure, and transparent!",
  },
  {
    name: "John Smith",
    role: "Procurement Lead",
    company: "BetaTech",
    review:
      "The process was smooth and the support team was always available. Highly recommend SoftSell!",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 px-4 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300">
      Customer Testimonials
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col bg-indigo-50 dark:bg-gray-800 rounded-lg p-6 shadow w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.03 }}
        >
          <p className="text-gray-700 dark:text-gray-200 mb-4 italic">
            "{t.review}"
          </p>
          <div className="mt-auto">
            <span className="font-semibold text-indigo-700 dark:text-indigo-200">
              {t.name}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              , {t.role} at {t.company}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
