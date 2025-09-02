import React from "react";

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
      className="min-h-screen flex flex-col gap-10 items-center justify-center px-4 py-10 font-sans"
    >
         <h2 className="flex mx-auto items-center text-3xl font-bold text-yellow uppercase mb-12 w-full max-w-3xl">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">General Guidelines</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>

      {/* Main Card */}
      <div className="relative bg-[var(--color-cream)] rounded-2xl p-6 pt-14 md:p-10 w-full max-w-5xl shadow-[12px_12px_0px_var(--color-orange)] border-4 border-amber-950">
        
        {/* Tape Title */}
        <div className="absolute -top-10 sm:text-center bg-yellow left-1/2 -translate-x-1/2  px-8 py-4">
          <h2 className="relative text-xl text-center md:text-2xl font-extrabold text-amber-950 z-10">
            Rules To Follow
          </h2>
          {/* Tape effect */}
          <div className="absolute inset-0 -rotate-2 border-4 border-[var(--color-orange)] rounded-md shadow-[3px_3px_0px_var(--color-black)] -z-10"></div>
        </div>

        {/* Guidelines List */}
        <ul className="grid gap-4 md:gap-6 mt-4">
          {guidelines.map((rule, index) => (
            <li
              key={index}
              className="flex items-start gap-3 p-3 md:p-4 border-4 border-amber-900 rounded-xl 
              bg-[var(--color-orange)] text-white shadow-[4px_4px_0px_var(--color-black)]
              hover:-translate-y-1 hover:rotate-1 transition-transform duration-200"
            >
              <span className="font-extrabold text-base md:text-lg">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <span className="text-sm md:text-base">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
