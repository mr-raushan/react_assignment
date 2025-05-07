import React, { useState } from "react";
import { motion } from "framer-motion";

const licenseTypes = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "AutoCAD",
  "Other",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required.";
    if (!form.email) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email.";
    if (!form.company) errs.company = "Company is required.";
    if (!form.license) errs.license = "Select a license type.";
    if (!form.message) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
    } else {
      setSubmitted(true);
      setForm({ name: "", email: "", company: "", license: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-indigo-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
      >
        Contact Us
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-8 flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        {submitted && (
          <div className="text-green-600 dark:text-green-400 mb-2">
            Thank you! We'll be in touch soon.
          </div>
        )}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
          {errors.name && (
            <div className="text-red-500 text-sm">{errors.name}</div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
          {errors.company && (
            <div className="text-red-500 text-sm">{errors.company}</div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">License Type</label>
          <select
            name="license"
            value={form.license}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select...</option>
            {licenseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.license && (
            <div className="text-red-500 text-sm">{errors.license}</div>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
            rows={4}
          />
          {errors.message && (
            <div className="text-red-500 text-sm">{errors.message}</div>
          )}
        </div>
        <motion.button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg mt-2"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
