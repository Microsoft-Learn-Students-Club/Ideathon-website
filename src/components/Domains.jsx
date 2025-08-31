import React from 'react';
import { motion } from 'framer-motion';
import AI from "../assets/ai.png"; 
import Dev from "../assets/Webdev.png";
import Blockchain from "../assets/Blockchain.png";
import Mobile from "../assets/Mobile.png";
import Social from "../assets/Social.png";


const Domains = () => {
    const domains = [
        {
            title: 'Artificial Intelligence',
            description:
                'Explore machine learning, computer vision, and natural language processing.',
            image: AI, 
        },
        {
            title: 'Web Development',
            description:
                'Build full-stack web applications using modern frameworks and technologies.',
            image: Dev, 
        },
        {
            title: 'Blockchain & FinTech',
            description:
                'Innovate with decentralized applications and financial technology solutions.',
            image: Blockchain,
        },
        {
            title: 'Mobile Applications',
            description:
                'Create native or cross-platform mobile apps for iOS and Android.',
            image: Mobile,
        },
        {
            title: 'Social Good',
            description:
                'Develop projects that address real-world problems and make a positive impact.',
            image: Social,
        },
    ];

    return (
        <div
            id="domains"
            className="min-h-screen flex items-center justify-center bg-teal p-6 sm:p-10"
        >
            <div className="text-center max-w-6xl w-full">
                <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-12">
                    Hackathon Domains
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-transparent hover:border-cream transition-all duration-300 ease-in-out"
                        >
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cream group-hover:blur-sm group-hover:opacity-60 transition-all duration-300 pointer-events-none"></div>
                            <img
                                src={domain.image}
                                alt={domain.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-cream mb-3">
                                {domain.title}
                            </h3>
                            <p className="text-gray-600 dark:text-cream text-base leading-relaxed">
                                {domain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Domains;