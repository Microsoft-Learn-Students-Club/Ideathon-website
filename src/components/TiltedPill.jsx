import React from "react";

const TiltedPill = ({
  title,
  bgColor = "bg-gray-400",        // Foreground pill color
  tiltedBgColor = "bg-white",      // Tilted background color
}) => {
  return (
    <div className="relative inline-block">
      {/* Tilted background */}
      <div
        className={`absolute inset-0 rounded-full transform rotate-4 ${tiltedBgColor}`}
      ></div>

      {/* Foreground pill */}
      <div
        className={`relative ${bgColor} text-black px-8 py-2 rounded-full text-lg font-semibold`}
      >
        {title}
      </div>
    </div>
  );
};

export default TiltedPill;
