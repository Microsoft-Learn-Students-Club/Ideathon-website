import { useMemo, useRef, useState, useEffect, useId } from "react";
import goldTrophy from "../assets/gold.png";
import silverTrophy from "../assets/silver.png";
import bronzeTrophy from "../assets/bronze.png";

const CurvedLoop = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;

  // 🔥 responsive curveAmount
  const [responsiveCurve, setResponsiveCurve] = useState(curveAmount);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640)
        setResponsiveCurve(curveAmount * 0.4); // mobile
      else if (window.innerWidth < 1024)
        setResponsiveCurve(curveAmount * 0.7); // tablet
      else setResponsiveCurve(curveAmount); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [curveAmount]);

  const pathD = `M-100,40 Q500,${40 + responsiveCurve} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil(1800 / textLength) + 2)
        .fill(text)
        .join("")
    : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (measureRef.current)
      setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute("startOffset", initial + "px");
      setOffset(initial);
    }
  }, [spacing]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const currentOffset = parseFloat(
          textPathRef.current.getAttribute("startOffset") || "0"
        );
        let newOffset = currentOffset + delta;
        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;
        textPathRef.current.setAttribute("startOffset", newOffset + "px");
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = (e) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(
      textPathRef.current.getAttribute("startOffset") || "0"
    );
    let newOffset = currentOffset + dx;
    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;
    textPathRef.current.setAttribute("startOffset", newOffset + "px");
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive
    ? dragRef.current
      ? "grabbing"
      : "grab"
    : "auto";

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="
          select-none 
          w-full 
          overflow-visible 
          block 
          aspect-[100/12] 
          text-[6rem] 
          font-bold 
          uppercase 
          leading-none
        "
        viewBox="0 0 1440 120"
      >
        {/* hidden measurement text */}
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>

        <defs>
          <path
            ref={pathRef}
            id={pathId}
            d={pathD}
            fill="none"
            stroke="transparent"
          />
        </defs>

        {ready && (
          <text xmlSpace="preserve" className={`fill-cream ${className ?? ""}`}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={offset + "px"}
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

const prizes = [
  {
    id: 2,
    title: "1st Runner-up",
    trophy: silverTrophy,
    prize: "₹ 5,000 + Certificate + Internship Opportunity + Goodies",
    size: "w-28 md:w-40",
  },
  {
    id: 1,
    title: "Winner",
    trophy: goldTrophy,
    prize: "₹ 10,000 + Certificate + Internship Opportunity + Goodies",
    size: "w-36 md:w-52",
  },
  {
    id: 3,
    title: "2nd Runner-up",
    trophy: bronzeTrophy,
    prize: "₹ 2,500 + Certificate + Internship Opportunity + Goodies",
    size: "w-28 md:w-40",
  },
];

const Prizes = () => {
  return (
    <div className="w-full bg-teal text-yellow py-12 px-6 relative overflow-visible">
      {/* Title */}
      <CurvedLoop
        marqueeText="Prizes 🎁 For  The  Winner's 🏆"
        speed={3}
        curveAmount={-100}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      {/* Trophies */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {prizes.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
          >
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">
              {item.title}
            </h3>

            {/* Trophy */}
            <img
              src={item.trophy}
              alt={item.title}
              className={`${item.size} object-contain`}
            />

            {/* Prize Info */}
            <p className="text-sm md:text-base text-mint max-w-xs leading-relaxed">
              {item.prize}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-xs absolute right-4 bottom-4">
        *Prizes are for each track
      </p>
    </div>
  );
};

export default Prizes;
