import React from 'react';
import { motion } from 'framer-motion';
// import CEO from "../assets/ceo.png";
// import CFO from "../assets/cfo.png";
// import CMO from "../assets/cmo.png";
import Tape1 from "../assets/tape1.png";
import Tape2 from "../assets/tape2.png";

const Roles = () => {
    const roles = [
        {
            title: 'CEO (Chief Executive Officer)',
            description:
                'The CEO sets the vision and direction for the idea, ensuring all aspects of the concept align to solve the core problem.',
            // image: CEO,
        },
        {
            title: 'CFO (Chief Financial Officer)',
            description:
                'The CFO is responsible for the financial viability of the idea, outlining a sustainable business model and projecting costs and revenue.',
            // image: CFO,
        },
        {
            title: 'CMO (Chief Marketing Officer)',
            description:
                'The CMO focuses on the go-to-market strategy, defining the target audience and planning how the idea will be presented and sold.',
            // image: CMO,
        },
    ];

    const tapes = [Tape1, Tape2];
    const rotations = ["-2deg", "3deg", "-4deg"];
    const bgColors = [
        "bg-red-400",
        "bg-[color:var(--color-mint)]",
        "bg-[color:var(--color-pastel-blue)]",
    ];
    const tapePositions = [
        "absolute -top-3 left-6 w-16 rotate-[5deg]",
        "absolute -top-3 right-6 w-18 -rotate-[6deg]",
        "absolute -top-4 left-1/2 -translate-x-1/2 w-20 rotate-[2deg]",
    ];

    return (
        <div
            id="roles"
            className="min-h-screen flex items-center justify-center bg-yellow-50 p-6 sm:p-10"
        >
            <div className="text-center max-w-6xl w-full flex flex-col mx-auto">
                <h2 className="flex mx-auto items-center text-3xl font-bold text-[var(--color-yellow)] uppercase mb-5 w-full max-w-3xl">
                    <span className="flex-grow h-[2px] bg-gray-700"></span>
                    <span className="px-6">Event Roles</span>
                    <span className="flex-grow h-[2px] bg-gray-700"></span>
                </h2>
                <div className='font-semibold m-3 text-md lg:text-2xl '>
                    <p>This event features three key roles
                        essential for developing a winning idea</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {roles.map((role, index) => {
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
                                    src={role.image}
                                    alt={role.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-bold text-[var(--color-black)] mb-3">
                                    {role.title}
                                </h3>
                                <p className="font-semibold text-[var(--color-maroon)] text-base leading-relaxed">
                                    {role.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Roles;