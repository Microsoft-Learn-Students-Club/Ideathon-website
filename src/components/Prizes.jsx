import Spline from "@splinetool/react-spline";

export default function PrizeSection() {
  return (
    <section id="prizes" className="relative bg-gray-900 text-white py-12 px-4">
      
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm z-0"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
         
        {/* Left side: Trophy (hidden on mobile) */}
        <div className="hidden md:flex relative justify-center md:justify-start">
          <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-lg h-[180px] sm:h-[250px] md:h-[600px] overflow-hidden rounded-2xl">
            <Spline scene="https://prod.spline.design/c2mvxYMRCwg0ayFO/scene.splinecode" />
          </div> 

          {/* Overlay text instead of watermark */}
          <div className="absolute bottom-2 sm:left-1/2 sm:translate-x-1/2 lg:left-4/12 -translate-y-4
            bg-gray-800 text-gray-200 text-xs sm:text-sm md:text-base px-3 py-1 rounded-lg shadow-lg border-4 border-dotted">
            *Prizes are for each track
          </div>
        </div>
       
        {/* Right side: Prizes */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            🎁 Prizes
          </h2>
          <ul className="space-y-5">
            <li className="bg-gray-800 p-5 rounded-xl shadow-lg hover:border-4 border-double hover:bg-gray-700 transition active:border-4 active:bg-gray-700">
              <h3 className="text-lg md:text-xl font-semibold">🏆 WINNER</h3>
              <p className="text-gray-300 text-sm md:text-base">
                ₹50,000 cash prize + Certificate of Excellence.
              </p>
            </li>
            <li className="bg-gray-800 p-5 rounded-xl shadow-lg hover:border-4 border-double hover:bg-gray-700 transition active:border-4 active:bg-gray-700">
              <h3 className="text-lg md:text-xl font-semibold">🥇 1'st RUNNER UP</h3>
              <p className="text-gray-300 text-sm md:text-base">
                ₹25,000 cash prize + Merit Certificate.
              </p>
            </li>
            <li className="bg-gray-800 p-5 rounded-xl shadow-lg hover:border-4 border-double hover:bg-gray-700 transition active:border-4 active:bg-gray-700">
              <h3 className="text-lg md:text-xl font-semibold">🥈 2'nd RUNNER UP</h3>
              <p className="text-gray-300 text-sm md:text-base">
                ₹10,000 cash prize + Participation Certificate.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
