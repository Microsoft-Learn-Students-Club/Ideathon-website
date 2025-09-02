import React, { useState } from "react";
import TiltedPill from "./TiltedPill";

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
      title: "Inauguration",
      cardTitle: "Inauguration and ID Distribution",
      desc: `The day begins with ID distribution at 8:30 a.m., followed by the official inauguration ceremony from 9:00 to 9:45 a.m., marking the formal start of the event.`,
      extra: (
        <>
          <strong>ID Distribution:</strong> 8:30 A.M <br />
          <strong>Inauguration:</strong> 9:00 - 9:45 A.M
        </>
      ),
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Round 1",
      cardTitle: "Auction Round",
      desc: `Round 1 kicks off with 30 teams competing in an exciting Auction round, setting the stage for the challenges ahead.`,
      extra: "Time: 9:45 - 11:30 a.m.",
      color: "bg-[var(--color-teal)]",
    },
    {
      title: "Round 2",
      cardTitle: "One Minute Pitch",
      desc: `Shortlisted teams will deliver a 1-minute pitch to showcase their ideas and creativity.`,
      extra: "Time: 11:45 - 12:45 p.m.",
      color: "bg-[var(--color-maroon)]",
    },
    {
      title: "Mini Game 1",
      cardTitle: "Networking Game",
      desc: `A fun and interactive networking mini-game designed to build connections among participants.`,
      extra: "Time: 1:00 - 1:30 p.m.",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Elimination",
      cardTitle: "Round 1 & 2 Eliminations",
      desc: `Teams will be shortlisted based on their performance in Round 1 and Round 2.`,
      extra: "Time: 1:45 p.m.",
      color: "bg-[var(--color-teal)]",
    },
    {
      title: "Round 3",
      cardTitle: "Explanation + Chits",
      desc: `Teams will explain their ideas in detail and prepare their presentations for the final round.`,
      extra: "Time: 1:45 - 2:15 p.m.",
      color: "bg-[var(--color-maroon)]",
    },
    {
      title: "Food + PPT Prep",
      cardTitle: "Refreshments + Preparation",
      desc: `Participants can enjoy refreshments while preparing their PPTs for the final presentation.`,
      extra: "Time: 2:15 - 3:00 p.m.",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Round 3",
      cardTitle: "Final Presentations",
      desc: `Teams present their ideas to the judges, showcasing creativity, feasibility, and impact.`,
      extra: "Time: 3:00 - 5:00 p.m.",
      color: "bg-[var(--color-teal)]",
    },
    {
      title: "Mini Game 2",
      cardTitle: "Guest Speech + Game",
      desc: `An engaging guest session followed by a quick interactive activity.`,
      extra: "Time: 5:00 - 5:45 p.m.",
      color: "bg-[var(--color-maroon)]",
    },
    {
      title: "Results",
      cardTitle: "Result Declaration",
      desc: `Winners of Pitch Perfect Ideathon are announced.`,
      extra: "Time: 5:45 - 6:15 p.m.",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Closing Ceremony",
      cardTitle: "Closing",
      desc: `The event concludes with a closing ceremony, followed by a meet and interaction session.`,
      extra: "Time: 6:15 - 7:00 p.m.",
      color: "bg-[var(--color-teal)]",
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
      <h2 className="flex mx-auto items-center text-3xl font-bold text-yellow uppercase mb-12 w-full max-w-3xl">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">Stages & Timeline</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>

      <div className="flex flex-col items-center relative w-full">
        <TiltedPill
          title={"Registration"}
          bgColor="bg-cream"
          tiltedBgColor="bg-orange"
        />
        <GroovyConnector height={60} />
        <div className="bg-[var(--color-maroon)] text-white border-4 border-black rounded-2xl p-6 w-[90%] md:w-[70%] shadow-lg flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">Register on Unstop</h3>
            <p className="mb-3">
              Get ready to showcase your innovation at the{" "}
              <strong>Pitch Perfect Ideathon</strong>, organized by the{" "}
              <strong>Microsoft Learn Student Club (MLSC).</strong>
              This is your chance to bring creative solutions, pitch your ideas,
              and stand out among brilliant minds. Form your team, brainstorm,
              and turn your vision into reality!
            </p>
            <p className="text-sm">
              <strong>Note:</strong> All participants are required to register
              through{" "}
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Unstop
              </a>{" "}
              to confirm their participation.
            </p>
            <p className="mt-4">
              <strong>Start:</strong> 19 August 2025
            </p>
          </div>
          {/* Right side small card */}
          <div className="bg-[var(--color-black)] rounded-2xl p-5 w-full md:w-80 shadow-md flex flex-col items-center relative">
            <h4 className="text-lg font-bold mb-3">Pitch Perfect Ideathon</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">🎤 Organized by MLSC</li>
              <li className="flex items-center gap-2">
                💡 Showcase your ideas
              </li>
              <li className="flex items-center gap-2">📝 Register on Unstop</li>
            </ul>
            <button className="mt-5 bg-[var(--color-yellow)] text-black px-5 py-2 rounded-3xl font-semibold hover:bg-yellow-400 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>
      <GroovyConnector height={60} />
      {stages.slice(0, showAll ? stages.length : 2).map((stage, i) => (
        <div key={i} className="flex flex-col items-center relative w-full">
          <TiltedPill
            title={stage.title}
            bgColor="bg-cream"
            tiltedBgColor="bg-orange"
          />
          <GroovyConnector height={60} />

          <div
            className={`${stage.color} border-4 border-black text-white rounded-2xl p-6 w-[90%] md:w-[70%] shadow-lg`}
          >
            <h3 className="text-xl font-bold mb-3">{stage.cardTitle}</h3>
            <p className="mb-3">{stage.desc}</p>
            <p className="mt-4">
              <strong>{stage.extra}</strong>
            </p>
          </div>

          {/* Render connector only if not last */}
          {i < (showAll ? stages.length : 2) - 1 && (
            <GroovyConnector height={60} />
          )}
        </div>
      ))}
      {/* Expand button */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="
    mt-6 
    bg-[#800000]  /* Maroon base */
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
