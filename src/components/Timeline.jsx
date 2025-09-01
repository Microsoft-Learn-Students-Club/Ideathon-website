import React from "react";
import TiltedPill from "./TiltedPill";

// const GroovyConnector = ({ color = "gray", height = 40}) => {
//   return (
//     <svg
//       width="40"
//       height={height}
//       viewBox={`0 0 40 ${height}`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="mx-auto"
//     >
//       <path
//         d={`M20 0 Q 30 ${height / 4}, 20 ${height / 2} T 20 ${height}`}
//         stroke={color}
//         strokeWidth="2"
//         strokeDasharray="6 6"
//         fill="transparent"
//       />
//     </svg>
//   );
// };

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
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10"
      style={{
        backgroundColor: "#FEFCE8", // pale yellow
        backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
    `,
        backgroundSize: "30px 30px", // spacing of the grid
      }}
    >
      {/* Section Heading */}
      <h2 className="flex mx-auto items-center text-3xl font-bold text-yellow uppercase mb-12 w-full max-w-3xl">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">Stages & Timeline</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>

      <div className="flex flex-col items-center relative w-full">
        {/* Registration Label */}
        <TiltedPill title={"Registration"} bgColor="bg-cream" tiltedBgColor="bg-orange" />

        {/* Connector line */}
        <GroovyConnector color="gray" height={60} />

        {/* Round 1 Card */}
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
              <li className="flex items-center gap-2">💡 Showcase your ideas</li>
              <li className="flex items-center gap-2">📝 Register on Unstop</li>
            </ul>

            <button className="mt-5 bg-[var(--color-yellow)] text-black px-5 py-2 rounded-3xl font-semibold hover:bg-yellow-400 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <GroovyConnector color="gray" height={60} />

      <div className="flex flex-col items-center relative w-full">
        {/* Round 1 Label */}
        <TiltedPill title={"Round 1"} bgColor="bg-cream" tiltedBgColor="bg-orange" />

        {/* Connector line */}
        <GroovyConnector color="gray" height={60} />

        {/* Round 1 Card */}
        <div className="bg-[var(--color-yellow)] border-4 border-black text-white rounded-2xl p-6 w-[90%] md:w-[70%] shadow-lg flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">Round 1 Details</h3>
            <p className="mb-3">
              Submit your innovative ideas online. The top submissions will move
              forward to the next stage.
            </p>

            <p className="mt-4">
              <strong>Start:</strong> 25 August 2025
            </p>
          </div>
        </div>

        {/* Connector line */}
        <GroovyConnector color="gray" height={60} />

        <TiltedPill title={"Round 2"} bgColor="bg-cream" tiltedBgColor="bg-orange" />

        {/* Connector line */}
        <GroovyConnector color="gray" height={60} />

        {/* Round 2 Card */}
        <div className="bg-[var(--color-teal)] border-4 border-black text-white rounded-2xl p-6 w-[90%] md:w-[70%] shadow-lg flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">Round 2 Details</h3>
            <p className="mb-3">
              Shortlisted teams will pitch their solutions live in front of
              judges. Finalists will be chosen from this round.
            </p>

            <p className="mt-4">
              <strong>Start:</strong> 28 August 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
