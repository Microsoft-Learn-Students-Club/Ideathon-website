import { useState } from "react";
import bookmark from "../assets/prizes/bookmark.png";
import goldTrophy from "../assets/prizes/gold.png";
import silverTrophy from "../assets/prizes/silver.png";
import participants from "../assets/prizes/participants.png";

const COLORS = {
  blue: "var(--color-teal)", // primary
  gold: "var(--color-yellow)", // accent (winner)
  coral: "var(--color-orange)", // accent (others)
  cream: "var(--color-cream)", // neutral
  white: "#ffffff", // neutral for on-teal text
  black: "var(--color-black)", // neubrutalist outline/shadow
  mint: "var(--color-mint)", // secondary accent
  maroon: "var(--color-maroon)",
  pastelPink: "var(--color-pastel-pink)",
  brown: "var(--color-brown)",
};

const TROPHIES = {
  "Winner": goldTrophy,
  "Runner-up": silverTrophy,
  "All Participants": participants,
};

const DEFAULT_AMOUNTS = {
  "Winner": "₹4,000",
  "Runner-up": "₹3,000",
  "All Participants": "Networking",
};

function FilterTabs({ value, onChange }) {
  const options = ["Winner", "Runner-up", "All Participants"];
  return (
    <div
      className="hidden sm:flex flex-wrap items-center gap-2 sm:gap-3"
      role="tablist"
      aria-label="Select prize to view"
    >
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt)}
            className="px-4 py-2 text-sm font-extrabold rounded-3xl border-[3px] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
            style={{
              backgroundColor: active ? COLORS.brown : COLORS.cream,
              borderColor: COLORS.black,
              color: active ? COLORS.white : COLORS.black,
              boxShadow: active
                ? `2px 2px 0 ${COLORS.black}`
                : `4px 4px 0 ${COLORS.black}`,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function PrizeCard({ rank, imgSrc, highlight, amount, onHover, onLeave }) {
  // pick bg per rank
  const bgMap = {
    "Winner": COLORS.maroon,
    "Runner-up": COLORS.coral,
    "All Participants": COLORS.blue,
  };

  const cardBg = bgMap[rank] || COLORS.cream;
  const isSecond = rank === "All Participants";
  const isRunner = rank === "Runner-up";
  const isWinner = rank === "Winner";

  return (
    <div
      onMouseEnter={() => onHover(rank)}
      onMouseLeave={onLeave}
      className="lg:w-[500px] relative rounded-xl border-[4px] p-6 md:p-7 lg:p-8 flex flex-col items-center text-center justify-between cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: cardBg,
        borderColor: COLORS.black,
        color: COLORS.black,
        boxShadow: highlight
          ? `12px 12px 0 ${COLORS.black}`
          : `8px 8px 0 ${COLORS.brown}`,
        transform: highlight
          ? "scale(1.05) rotate(-1deg) translateY(-6px)"
          : isSecond
            ? "rotate(0deg) skewY(1deg) translateY(-2px)"
            : isRunner
              ? "rotate(1deg) skewY(1deg) translateY(-2px)"
              : isWinner
                ? "rotate(-3deg) translateY(-2px)"
                : "none",
        zIndex: highlight ? 10 : 1,
      }}
    >
      <img src={bookmark} className=" absolute -top-2 w-10 h-10 left-3"></img>
      {/* <span className="absolute top-0 left-5 w-5 h-5 bg-[var(--color-black)]"></span> */}
      <span
        aria-label="Prize money"
        className="absolute -top-4 right-4 rounded-md px-3 py-1 text-xs sm:text-sm font-extrabold tracking-wide border-[3px]"
        style={{
          backgroundColor: COLORS.white,
          color: COLORS.black,
          borderColor: COLORS.black,
          boxShadow: `4px 4px 0 ${COLORS.black}`,
        }}
      >
        {amount ? amount : "Prize Money"}
      </span>

      <div className="inline-flex items-center gap-2">
        <span
          className="px-3 py-1 rounded-md text-xs font-extrabold tracking-wide border-[3px]"
          style={{
            backgroundColor: COLORS.mint,
            color: COLORS.black,
            borderColor: COLORS.black,
            boxShadow: `4px 4px 0 ${COLORS.black}`,
          }}
        >
          {rank}
        </span>
      </div>

      <img
        src={imgSrc || "/placeholder.svg"}
        alt={`${rank}`}
        width={140}
        height={140}
        className="mt-6 mx-auto block h-auto w-28 sm:w-36"
      />

      <div className="mt-5">
        <span
          className="inline-block text-2xl sm:text-3xl md:text-4xl font-black leading-none px-3 py-1 rounded-md border-[3px]"
          style={{
            backgroundColor: COLORS.white,
            color: COLORS.black,
            borderColor: COLORS.black,
            boxShadow: `6px 6px 0 ${COLORS.black}`,
          }}
        >
          {amount ? amount : "Prize Money"}
        </span>
      </div>

      <p className="mt-5 text-sm sm:text-base font-semibold leading-6 text-pretty text-white">
        {" + Certificate + Goodies"}
      </p>
    </div>
  );
}

export default function Prizes({ amounts = {} }) {
  const [view, setView] = useState(null);
  const [hover, setHover] = useState(null);

  const getAmount = (rank) =>
    amounts && amounts[rank] ? amounts[rank] : DEFAULT_AMOUNTS[rank];

  // 👑 Order changed → Winner → Runner-up → All Participants
  const items = [
    { rank: "Winner", imgSrc: TROPHIES["Winner"], amount: getAmount("Winner") },
    {
      rank: "Runner-up",
      imgSrc: TROPHIES["Runner-up"],
      amount: getAmount("Runner-up"),
    },
    {
      rank: "All Participants",
      imgSrc: TROPHIES["All Participants"],
      amount: getAmount("All Participants"),
    },
  ];

  const active = view || hover;

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#FEFCE8", 
        backgroundImage: `
      radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px),
      radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px)
    `,
        backgroundSize: "30px 30px", 
        backgroundPosition: "0 0, 15px 15px", 
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <header className="flex flex-col items-center mb-6 sm:mb-8">
          <h2 className="flex mx-auto items-center text-3xl font-bold text-[var(--color-yellow)] uppercase mb-5 w-full max-w-3xl">
            <span className="flex-grow h-[2px] bg-gray-700"></span>
            <span className="px-6">Prizes</span>
            <span className="flex-grow h-[2px] bg-gray-700"></span>
          </h2>

          <div className="mt-4">
            <FilterTabs
              value={view}
              onChange={(opt) => setView((prev) => (prev === opt ? null : opt))}
            />
          </div>
        </header>

        <div className="flex justify-center gap-10 flex-wrap">
          {items.map((item) => (
            <div
              key={item.rank}
              className="w-full sm:w-[280px] md:w-[300px] flex justify-center"
              style={{
                transform:
                  item.rank === "Winner"
                    ? "translateY(15px) scale(1)"
                    : item.rank === "Runner-up"
                      ? "translateY(25px) scale(0.93)"
                      : "translateY(30px) scale(0.87)",
              }}
            >
              <PrizeCard
                rank={item.rank}
                imgSrc={item.imgSrc}
                amount={item.amount}
                highlight={active === item.rank}
                onHover={setHover}
                onLeave={() => setHover(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
