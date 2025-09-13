import React, { useState } from "react";
import TiltedPill from "./TiltedPill";
import { motion } from "framer-motion";

const GroovyConnector = ({ height = 40 }) => {
  return (
    <svg
      width="40"
      height={height}
      viewBox={`0 0 40 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <path
        d={`M20 0 Q 30 ${height / 4}, 20 ${height / 2} T 20 ${height}`}
        stroke="#facc15"
        strokeWidth="3"
        strokeDasharray="8 6"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;14"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

const Timeline = () => {
  const [showAll, setShowAll] = useState(false);

  const stages = [
    {
      title: "Registration + Video & Reel Submission",
      cardTitle: "Submit Idea Video & Reel",
      desc: `Teams must register and submit a 1-minute idea video along with an Instagram reel tagging @mlsc_vcet. This serves as the first round of evaluation.`,
      extra: "Start: 9 Sep 2025 | End: 15 Sep 2025, 12:30 PM IST",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Shortlisting of Teams",
      cardTitle: "Top 30 Teams Announced",
      desc: `Based on video + reel submissions, the best 30 teams will be shortlisted for the offline rounds. Criteria: innovation, novelty, and clarity.`,
      extra: "Date: 15 Sep 2025 (Evening)",
      color: "bg-[var(--color-teal)]",
    },
    {
      title: "Round 1",
      cardTitle: "Auction Round",
      desc: `Teams strategically bid for advantages using credits. This determines boosts and penalties in later rounds.`,
      extra: "Duration: 1 hr 45 min | Mode: Offline",
      color: "bg-[var(--color-maroon)]",
    },
    {
      title: "Round 2",
      cardTitle: "One-Minute Pitch",
      desc: `Each team delivers a 60-second elevator pitch followed by a jury Q&A. Quick, sharp, and persuasive.`,
      extra: "Duration: 1 hr | Mode: Offline",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Round 3",
      cardTitle: "Final Presentations",
      desc: `Teams present their PPTs (5–7 minutes) and face a situational challenge + jury Q&A. The grand finale of NovaTra 1.0.`,
      extra: "Duration: 2 hrs | Mode: Offline",
      color: "bg-[var(--color-teal)]",
    },
    {
      title: "Winner Announcement",
      cardTitle: "Results & Prize Distribution",
      desc: `Winners, runners-up, and participants are recognized. Certificates and prizes worth ₹12,000 announced.`,
      extra: "Date: 17 Sep 2025 (End of Event)",
      color: "bg-[var(--color-maroon)]",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10"
      style={{
        backgroundColor: "#FEFCE8",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Section Heading */}
      <h2 className="flex mx-auto items-center text-3xl md:text-4xl font-bold text-yellow uppercase mb-12 w-full max-w-3xl">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">Stages & Timeline</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>

      {stages.slice(0, showAll ? stages.length : 2).map((stage, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center relative w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <TiltedPill
            title={stage.title}
            bgColor="bg-cream"
            tiltedBgColor="bg-orange"
          />
          <GroovyConnector height={60} />

          <div
            className={`${stage.color} border-4 border-black text-white rounded-2xl p-6 w-[90%] md:w-[65%] shadow-lg`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {stage.cardTitle}
            </h3>
            <p className="mb-3 text-base md:text-lg">{stage.desc}</p>
            
            <div className="flex flex-col lg:flex-row justify-between">

            {/* Pill for date/deadline */}
            <div className="block bg-[var(--color-black)] text-white font-semibold text-sm md:text-base px-4 py-2 mt-4 rounded-full shadow-md border border-black">
              {stage.extra}
            </div>

            {/* Registration Button */}
            {stage.title.includes("Registration") && (
              <a
                href="https://unstop.com/competitions/novatra-10-where-ideas-meet-impact-vidyavardhinis-college-of-engineering-and-technology-maharashtra-1554303"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[var(--color-red)] text-center text-white font-bold px-6 py-2 rounded-full shadow-md border-3 border-black hover:bg-red-500 transition"
              >
                Register Now
              </a>
            )}
                </div>
          </div>


          {/* Connector only if not last */}
          {i < (showAll ? stages.length : 2) - 1 && (
            <GroovyConnector height={60} />
          )}
        </motion.div>
      ))}

      {/* Expand button */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="
            mt-6 
            bg-[#800000]  
            text-white 
            px-6 py-3 
            rounded-3xl 
            font-semibold 
            shadow-[0_6px_0px_#4B0000]  
            active:translate-y-[4px] 
            active:shadow-[0_2px_0px_#4B0000] 
            transition-all 
            duration-150
          "
        >
          View Entire Timeline
        </button>
      )}

      {/* Collapse button */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="
            mt-6 
            bg-[#800000]  
            text-white 
            px-6 py-3 
            rounded-3xl 
            font-semibold 
            shadow-[0_6px_0px_#4B0000]  
            active:translate-y-[4px] 
            active:shadow-[0_2px_0px_#4B0000] 
            transition-all 
            duration-150
          "
        >
          Close Timeline
        </button>
      )}
    </div>
  );
};

export default Timeline;
