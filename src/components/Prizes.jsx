
import { useState } from "react";

const COLORS = {
  blue: "var(--color-teal)", // primary
  gold: "var(--color-yellow)", // accent (winner)
  coral: "var(--color-orange)", // accent (others)
  cream: "var(--color-cream)", // neutral
  white: "#ffffff", // neutral for on-teal text
  black: "var(--color-black)", // neubrutalist outline/shadow
  mint: "var(--color-mint)", // secondary accent
};

const TROPHIES = {
  "Winner": "src/assets/gold.png",
  "Runner-up": "src/assets/silver.png",
  "2nd Runner-up": "src/assets/bronze.png",
};

const DEFAULT_AMOUNTS = {
  "Winner": "₹15,000",
  "Runner-up": "₹7,500",
  "2nd Runner-up": "₹4,000",
};

function FilterTabs({ value, onChange }) {
  const options = ["Winner", "Runner-up", "2nd Runner-up"];
  return (
    <div
      className="flex flex-wrap items-center gap-2 sm:gap-3"
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
            className="px-4 py-2 text-sm font-extrabold rounded-md border-[3px] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
            style={{
              backgroundColor: active ? COLORS.mint : COLORS.cream,
              borderColor: COLORS.black,
              color: COLORS.black,
              boxShadow: active
                ? `4px 4px 0 ${COLORS.black}`
                : `6px 6px 0 ${COLORS.black}`,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function PrizeCard({ rank, imgSrc, highlight, amount }) {
  const badgeBg = COLORS.gold;
  const amountBg = COLORS.gold;

  const isSecond = rank === "2nd Runner-up";
  const isWinner = rank === "Winner";

  return (
    <div
      className="relative rounded-xl border-[4px] p-6 md:p-7 lg:p-8 flex flex-col items-center text-center justify-between"
      style={{
        backgroundColor: COLORS.cream,
        borderColor: COLORS.black,
        color: COLORS.black,
        boxShadow: isSecond
          ? `12px 12px 0 ${COLORS.black}`
          : `8px 8px 0 ${COLORS.black}`,
        transform: isSecond
          ? "rotate(2deg) skewY(1deg) translateY(-2px)"
          : isWinner || highlight
          ? "rotate(-1deg) translateY(-2px)"
          : "none",
      }}
    >
      <span
        aria-label="Prize money"
        className="absolute -top-4 right-4 rounded-md px-3 py-1 text-xs sm:text-sm font-extrabold tracking-wide border-[3px]"
        style={{
          backgroundColor: badgeBg,
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
        alt={`${rank} trophy`}
        width={140}
        height={140}
        className="mt-6 mx-auto block h-auto w-28 sm:w-36"
      />

      <div className="mt-5">
        <span
          className="inline-block text-2xl sm:text-3xl md:text-4xl font-black leading-none px-3 py-1 rounded-md border-[3px]"
          style={{
            backgroundColor: amountBg,
            color: COLORS.black,
            borderColor: COLORS.black,
            boxShadow: `6px 6px 0 ${COLORS.black}`,
          }}
        >
          {amount ? amount : "Prize Money"}
        </span>
      </div>

      <p className="mt-5 text-sm sm:text-base font-semibold leading-6 text-pretty">
        {" + Certificate + Goodies"}
      </p>
    </div>
  );
}

export default function Prizes({ amounts = {} }) {
  const [view, setView] = useState(null);

  const getAmount = (rank) =>
    amounts && amounts[rank] ? amounts[rank] : DEFAULT_AMOUNTS[rank];

  const items = [
    {
      rank: "Runner-up",
      imgSrc: TROPHIES["Runner-up"],
      amount: getAmount("Runner-up"),
    },
    { rank: "Winner", imgSrc: TROPHIES["Winner"], amount: getAmount("Winner") },
    {
      rank: "2nd Runner-up",
      imgSrc: TROPHIES["2nd Runner-up"],
      amount: getAmount("2nd Runner-up"),
    },
  ];

  const selected = items.find((i) => i.rank === view);

  return (
    <section id="Prizes" aria-label="Competition Prizes" className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <header className="mb-6 sm:mb-8">
          <h2 className="flex items-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 gap-4">
            <span className="flex-1 border-t border-gray-700"></span>
            Prizes
            <span className="flex-1 border-t border-gray-700"></span>
          </h2>

          <p
            className="mt-4 text-sm sm:text-base leading-6 max-w-prose font-semibold"
            style={{ color: COLORS.black }}
          >
            Click a button to view a prize.
          </p>

          <div className="mt-4">
            <FilterTabs
              value={view}
              onChange={(opt) => setView((prev) => (prev === opt ? null : opt))}
            />
          </div>
        </header>

        {selected && (
          <div className="mx-auto max-w-sm">
            <PrizeCard
              rank={selected.rank}
              imgSrc={selected.imgSrc}
              amount={selected.amount}
              highlight={selected.rank === "Winner"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
