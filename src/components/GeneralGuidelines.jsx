import React from "react";
import { motion } from "framer-motion";

const guidelines = [
  "Each team should consist of 2–4 members. Interdisciplinary teams are encouraged.",
  "All submissions must be original. Plagiarism is strictly prohibited.",
  "Submit your idea before the deadline. Late entries will not be accepted.",
  "Teams will get 5–7 minutes to pitch, followed by a short Q&A.",
  "Judging criteria: innovation, feasibility, impact, and clarity."
];

export default function GeneralGuidelines() {
  return (
    <div
      style={{
        backgroundColor: "#FEFCE8", // pale yellow
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px"
      }}
      className="min-h-screen flex items-center justify-center px-4 py-10 font-sans"
    >
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-[var(--color-cream)] rounded-2xl p-8 pt-16 md:p-20 w-full max-w-7xl shadow-[15px_15px_0px_var(--color-orange)] border-4 border-amber-950"
      >
        {/* Tape Title */}
        <motion.div
          initial={{ rotate: -3, y: -10, opacity: 0 }}
          animate={{ rotate: -2, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute -top-12 sm:text-center bg-yellow left-1/2 max-w-2xl max-h-2xl -translate-x-1/2 px-6 py-6"
        >
          <h2 className="relative text-2xl text-center md:text-3xl font-extrabold text-amber-950 z-10">
            General Guidelines
          </h2>
          {/* Tape effect */}
          <div className="absolute inset-0 -rotate-2 border-4 border-[var(--color-orange)] rounded-md shadow-[4px_4px_0px_var(--color-black)] -z-10"></div>
        </motion.div>

        {/* Guidelines List */}
        <ul className="grid gap-6 md:gap-8 mt-6">
          {guidelines.map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="flex items-start gap-3 p-4 md:p-6 border-4 border-[var(--color-black)] rounded-xl 
                bg-[var(--color-orange)] text-white shadow-[6px_6px_0px_var(--color-black)] 
                transition-transform duration-200"
            >
              <span className="font-extrabold text-lg md:text-xl">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <span className="text-base md:text-lg">{rule}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
