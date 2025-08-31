import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Code, Clock, Smile, Handshake } from "lucide-react";
import "../index.css";

const GeneralGuidelines = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120 },
        },
    };

    const listItemHover = {
        scale: 1.03,
        x: 6,
        backgroundColor: "rgba(59,130,246,0.1)", // subtle blue tint
        transition: { duration: 0.25, ease: "easeOut" },
    };

    const rules = [
        { text: "Team size can be a minimum of 2 and a maximum of 4 members.", icon: Users },
        { text: "All code must be original and written during the hackathon.", icon: Code },
        { text: "Projects must be submitted on time to be eligible for judging.", icon: Clock },
        { text: "Mentors are available to guide, but will not write code for you.", icon: ShieldCheck },
        { text: "Respect peers & staff. Harassment will not be tolerated.", icon: Handshake },
        { text: "Most importantly, have fun and enjoy the process!", icon: Smile },
    ];

    return (
        <div
            id="guidelines"
            className="min-h-screen relative overflow-hidden flex flex-col lg:flex-row items-center justify-center px-4 bg-gray-950 text-gray-100"
        >
            {/* Background Animated Blobs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-60 h-60 bg-purple-600 rounded-full mix-blend-screen blur-3xl opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.1, x: 30, y: -30 }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-500 rounded-full mix-blend-screen blur-3xl opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.1, x: -30, y: 30 }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />

            {/* Heading Side */}
            <motion.div
                className="z-10 text-center lg:text-left mb-6 lg:mb-0 lg:mr-10 max-w-lg"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    General Guidelines
                </h2>
                <p className="mt-3 text-gray-400 text-sm sm:text-base">
                    To ensure fairness and a great experience for all, please follow these
                    key principles throughout the event.
                </p>
            </motion.div>

            {/* Guidelines Card */}
            <motion.div
                className="z-10 bg-gray-900/60 backdrop-blur-md border border-gray-700/60 p-5 rounded-2xl shadow-lg w-full max-w-2xl max-h-[70vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <motion.ul
                    className="space-y-3 text-gray-300 text-sm sm:text-base"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {rules.map(({ text, icon: Icon }, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-md cursor-pointer bg-gray-800/40 border border-gray-700/40 hover:text-white"
                            variants={itemVariants}
                            whileHover={listItemHover}
                        >
                            <Icon className="w-5 h-5 text-blue-400 mt-1" />
                            <span>{text}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
};

export default GeneralGuidelines;
