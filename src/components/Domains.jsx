import React from 'react';
import { motion } from 'framer-motion';
// import AI from "../assets/AI.png";
// import Dev from "../assets/Webdev.png";
// import Blockchain from "../assets/Blockchain.png";
// import Mobile from "../assets/Mobile.png";
// import Social from "../assets/Social.png";
import Tape1 from "../assets/tape1.png";
import Tape2 from "../assets/tape2.png";

const Domains = () => {
    const domains = [
        {
            title: 'Artificial Intelligence',
            description: 'Explore machine learning, computer vision, and natural language processing.',
            // image: AI,
        },
        {
            title: 'Web Development',
            description: 'Build full-stack web applications using modern frameworks and technologies.',
            // image: Dev,
        },
        {
            title: 'Blockchain & FinTech',
            description: 'Innovate with decentralized applications and financial technology solutions.',
            // image: Blockchain,
        },
        {
            title: 'Mobile Applications',
            description: 'Create native or cross-platform mobile apps for iOS and Android.',
            // image: Mobile,
        },
        {
            title: 'Social Good',
            description: 'Develop projects that address real-world problems and make a positive impact.',
            // image: Social,
        },
    ];

    const tapes = [Tape1, Tape2];
    const rotations = ["-2deg", "3deg", "-4deg", "2deg", "-1deg"];
    const bgColors = [
        "bg-[color:var(--color-pastel-pink)]",
        "bg-[color:var(--color-cream)]",
        "bg-[color:var(--color-mint)]",
        "bg-[color:var(--color-yellow)]",
        "bg-[color:var(--color-pastel-blue)]",
    ];
    const tapePositions = [
        "absolute -top-3 left-6 w-16 rotate-[5deg]",
        "absolute -top-3 right-6 w-18 -rotate-[6deg]",
        "absolute -top-4 left-1/2 -translate-x-1/2 w-20 rotate-[2deg]",
        "absolute -top-3 left-4 w-16 rotate-[-3deg]",
        "absolute -top-2 right-8 w-14 rotate-[4deg]",
    ];

    return (
        <div
            id="domains"
            className="min-h-screen flex items-center justify-center bg-yellow-50 p-6 sm:p-10"
        >
            <div className="text-center max-w-6xl w-full flex flex-col mx-auto">
                <h2 className="flex mx-auto items-center text-3xl font-bold text-[var(--color-yellow)] uppercase mb-12 w-full max-w-3xl">
                    <span className="flex-grow h-[2px] bg-gray-700"></span>
                    <span className="px-6">Domains</span>
                    <span className="flex-grow h-[2px] bg-gray-700"></span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {domains.map((domain, index) => {
                        const tape = tapes[index % tapes.length];
                        const rotation = rotations[index % rotations.length];
                        const bg = bgColors[index % bgColors.length];
                        const tapeStyle = tapePositions[index % tapePositions.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative group ${bg} p-6 rounded-xl border-3 border-amber-950 transition-transform duration-300`}
                                style={{
                                    rotate: rotation,
                                    boxShadow: "8px 8px 0px rgba(120, 53, 15, 0.4)",
                                }}
                            >

                                <img
                                    src={tape}
                                    alt="tape"
                                    className={tapeStyle}
                                />
                                <img
                                    src={domain.image}
                                    alt={domain.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-amber-800 mb-3">
                                    {domain.title}
                                </h3>
                                <p className="text-amber-900 text-base leading-relaxed">
                                    {domain.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Domains;
