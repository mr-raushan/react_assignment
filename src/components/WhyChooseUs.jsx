import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🔒",
    title: "Secure Transactions",
    desc: "Your data and transactions are protected with industry-leading security.",
  },
  {
    icon: "⚡",
    title: "Fast Payouts",
    desc: "Get paid instantly after accepting our offer.",
  },
  {
    icon: "🤝",
    title: "Trusted by Businesses",
    desc: "Hundreds of companies trust SoftSell for license resale.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "Our team is always here to help you at every step.",
  },
];

const WhyChooseUs = () => (
  <section id="why" className="py-16 px-4 bg-indigo-50 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-200">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {reasons.map((reason, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-3">{reason.icon}</div>
          <h3 className="font-semibold text-lg mb-2 text-indigo-700 dark:text-indigo-200">
            {reason.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            {reason.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
