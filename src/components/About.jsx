import { useState } from "react";
import "./About.css";

const About = () => {
    const bgColors = ["teal", "cyan", "orange", "red"];
    const fillColors = ["cyan", "mint", "yellow", "orange"];

    const [colorIndex, setColorIndex] = useState(0);
    const [restoreTask, setRestoreTask] = useState(null);
    const [isMobileView, setView] = useState(window.matchMedia("(width < 40rem)").matches);

    const restore = () => {
        if (restoreTask !== null) clearTimeout(restoreTask);
        setRestoreTask(setTimeout(() => {
            setRestoreTask(null);
            setColorIndex(0);
        }, 200));
    };

    const modifyColorIndex = (newColorIndex) => {
        if (isMobileView) return;
        if (restoreTask !== null) clearTimeout(restoreTask);
        setRestoreTask(null);
        setColorIndex(newColorIndex);
    }

    window.matchMedia("(width < 40rem)").addEventListener('change', e => setView(e.matches));

    return (
        <div id="about" className={`relative h-screen flex items-center justify-center bg-${bgColors[colorIndex]}`}>
            <div className="z-1 text-center max-w-2xl m-8 sm:p-8 sm:bg-black/50 sm:rounded-lg">
                <h2 className="header text-4xl font-bold text-cream mb-16">About</h2>
                <p className="text-cream text-justify text-lg font-bold">
                    Welcome to our annual hackathon! This event brings 
                    together <span onMouseEnter={() => modifyColorIndex(1)} onMouseLeave={restore} className="text-mint">students</span>
                    , <span onMouseEnter={() => modifyColorIndex(2)} onMouseLeave={restore} className="text-yellow">developers</span>, 
                    and <span onMouseEnter={() => modifyColorIndex(3)} onMouseLeave={restore} className="text-orange">creators</span> from 
                    all backgrounds to build, learn, and innovate. Our goal is to foster a collaborative environment where you can turn your ideas into reality. Whether you're a seasoned programmer or just starting, our hackathon is the perfect place to challenge yourself and connect with like-minded individuals. We believe that great ideas can come from anywhere, and we're excited to see what you create.
                </p>
            </div>
            <svg
                viewBox="0 0 1440 490"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 transition duration-150 ease-in-out"
            >
                <path
                    d="M 0,500 L 0,93 C 97.51196172248802,101.3732057416268 195.02392344497605,109.7464114832536 303,105 C 410.97607655502395,100.2535885167464 529.4162679425838,82.38755980861244 621,72 C 712.5837320574162,61.61244019138756 777.3110047846891,58.70334928229666 856,75 C 934.6889952153109,91.29665071770334 1027.33971291866,126.79904306220095 1127,133 C 1226.66028708134,139.20095693779905 1333.33014354067,116.10047846889952 1440,93 L 1440,500 L 0,500 Z"
                    stroke="none"
                    stroke-width="0"
                    fill-opacity="0.4"
                    className={`fill-${fillColors[colorIndex]} transition duration-150 ease-in-out path-0`}
                    transform="rotate(-180 720 250)"
                >
                </path>
                <path
                    d="M 0,500 L 0,218 C 123.61722488038276,203.1961722488038 247.23444976076553,188.39234449760764 327,188 C 406.76555023923447,187.60765550239236 442.67942583732054,201.62679425837322 534,195 C 625.3205741626795,188.37320574162678 772.0478468899522,161.10047846889952 895,172 C 1017.9521531100478,182.89952153110048 1117.1291866028707,231.9712918660287 1204,246 C 1290.8708133971293,260.0287081339713 1365.4354066985647,239.01435406698565 1440,218 L 1440,500 L 0,500 Z"
                    stroke="none"
                    stroke-width="0"
                    fill-opacity="0.53"
                    className={`fill-${fillColors[colorIndex]} transition duration-150 ease-in-out path-1`}
                    transform="rotate(-180 720 250)"
                >
                </path>
                <path
                    d="M 0,500 L 0,343 C 68.7846889952153,323.13397129186603 137.5693779904306,303.267942583732 249,317 C 360.4306220095694,330.732057416268 514.5071770334928,378.06220095693783 617,375 C 719.4928229665072,371.93779904306217 770.4019138755982,318.48325358851673 865,318 C 959.5980861244018,317.51674641148327 1097.885167464115,370.00478468899524 1201,383 C 1304.114832535885,395.99521531100476 1372.0574162679425,369.4976076555024 1440,343 L 1440,500 L 0,500 Z"
                    stroke="none"
                    stroke-width="0"
                    fill-opacity="1"
                    className={`fill-${fillColors[colorIndex]} transition duration-150 ease-in-out path-2`}
                    transform="rotate(-180 720 250)"
                >
                </path>
            </svg>
        </div>
    );
};
export default About
