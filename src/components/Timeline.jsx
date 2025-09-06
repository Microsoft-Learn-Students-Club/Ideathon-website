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
      title: "Registration Deadline",
      cardTitle: "Last Date for Registration",
      desc: `All interested teams must complete the registration process before the deadline to be eligible for participation. 
      Form your teams, brainstorm initial ideas, and make sure all details are correctly submitted on the official registration portal.`,
      extra: "Deadline: ",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "PPT + Video Submission",
      cardTitle: "Submit PPT and Video",
      desc: `Teams are required to prepare and submit a detailed presentation (PPT) along with a short explanatory video. 
      This helps the jury understand your concept, execution plan, and creative vision before the shortlisting process begins.`,
      extra: "Deadline: ",
      color: "bg-[var(--color-teal)]",
    },
    {
      title: "Reel Submission",
      cardTitle: "Reel Submission Deadline",
      desc: `To showcase creativity, teams must also create and submit a short Instagram-style reel about their project. 
      The reel should be engaging, visually appealing, and highlight the uniqueness of your idea in under a minute.`,
      extra: "Deadline: ",
      color: "bg-[var(--color-maroon)]",
    },
    {
      title: "Shortlisted Teams",
      cardTitle: "Results Announcement",
      desc: `Based on the PPT, video, and reel submissions, the best teams will be shortlisted for the main event. 
      The evaluation will consider innovation, feasibility, and clarity of presentation. Only the shortlisted teams will move forward.`,
      extra: "Date: ",
      color: "bg-[var(--color-yellow)]",
    },
    {
      title: "Main Event",
      cardTitle: "NovaTra 1.0",
      desc: `The grand event where shortlisted teams present their ideas live in front of the judges and audience. 
      Teams will pitch their projects, answer questions, and compete for the title. 
      Expect intense brainstorming, creative pitches, and an exciting atmosphere of innovation.`,
      extra: "Event Dates: ",
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
      <h2 className="flex mx-auto items-center text-3xl md:text-4xl font-bold text-yellow uppercase mb-12 w-full max-w-3xl">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">Stages & Timeline</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>

      {stages.slice(0, showAll ? stages.length : 2).map((stage, i) => (
        <div key={i} className="flex flex-col items-center relative w-full">
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
            <p className="mt-4 text-sm md:text-base">
              <strong>{stage.extra}</strong>
            </p>
          </div>

          {/* Connector only if not last */}
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
