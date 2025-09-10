import React from 'react';
import { motion } from 'framer-motion';
import pin from "../assets/about/pin.png";
import redclip from "../assets/about/redclip.png";
import blueclip from "../assets/about/blueclip.png";
import mlsclogo from "../assets/about/mlsclogo.png";

const About = () => {
    return (
        <div id="about" className="min-h-screen flex items-center justify-center bg-yellow-50 p-8">
            <section className='relative flex flex-col-reverse lg:flex-row items-center bg-[var(--color-orange)] border-4 border-[var(--color-black)] rounded-3xl rounded-tl-none w-full md:w-3/4 min-h-[70vh] p-2 g:p-8'>

                {/* Section Header */}
                <div className='absolute -top-10 md:-top-14 -left-1 bg-[var(--color-orange)] border-4 border-[var(--color-black)] w-34 h-10 md:h-14 border-b-0 rounded-t-2xl px-7 md:px-5 py-3'>
                    <p className='text-[var(--color-cream)] font-bold text-xl md:text-2xl'>ABOUT</p>
                </div>

                {/* Pin */}
                <motion.img
                    src={pin}
                    alt="clip"
                    key="pin"
                    initial={{ opacity: 0, x: -50, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                    transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="z-10 absolute top-16 md:top-20 left-5 md:left-10 transform -translate-x-1/2 w-20 sm:w-28 mb-3 hover:rotate-3 transition-transform duration-300"
                />

                {/* Blue Clip */}
                <motion.img
                    src={blueclip}
                    alt="clip"
                    key="blue"
                    initial={{ opacity: 0, y: -50, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                    transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="z-10 absolute -top-14 md:-top-20 right-4 sm:left-1/2 transform -translate-x-1/2 w-20 sm:w-28 mb-3 hover:rotate-3 transition-transform duration-300"
                />

                <div
                    className='absolute top-10 left-2 lg:-rotate-2 min-h-[50vh] w-[70%] lg:w-1/3 rounded-sm'
                    style={{
                        background: `
                            repeating-linear-gradient(
                                to top,
                                rgba(0,0,0,0.1) 0px,
                                rgba(0,0,0,0.1) 1px,
                                rgba(255,255,255,0.5) 1px,
                                rgba(255,255,255,0.5) 24px
                            )
                            `,
                    }}
                ></div>

                {/* Content Card with two notes */}
                <div className="z-5 lg:relative left-10 sm:-rotate-2 bg-[var(--color-cream)] text-center lg:w-2/3 p-6 rounded-xl border-3 border-[var(--color-black)] border-dashed shadow-xl">

                    {/* Who Are We */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            Who Are <span className="text-[var(--color-red)]">We?</span>
                        </h2>
                        <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                            MLSC VCET is a technical club that fosters coding culture at Vidyavardhini’s College of Engineering and Technology.
                            We mentor students to sharpen their problem-solving, coding, and logical reasoning skills.
                        </p>
                        <p className="text-gray-700 text-sm md:text-lg mt-4 leading-relaxed">
                            Through peer learning and collaboration, we spread technical knowledge, build open-source projects, and host events
                            that drive innovation.
                        </p>
                    </div>


                    {/* About NovaTra */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            About <span className="text-[var(--color-red)]">NovaTra 1.0</span>
                        </h2>
                        <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                            NovaTra 1.0 is a business presentation competition aimed at inspiring creativity,
                            innovation, and entrepreneurial spirit among engineering students. Through engaging
                            rounds of bidding, pitching, and networking, participants present their product ideas
                            and problem-solving skills to peers, mentors, and judges.
                        </p>
                        <p className="text-gray-700 text-sm md:text-lg mt-4 leading-relaxed">
                            <strong>Purpose:</strong> To empower students to transform raw ideas into impactful
                            solutions, enhance their presentation abilities, and foster meaningful connections.
                        </p>
                    </div>
                </div>

                {/* Event Logo */}
                <img
                    src='/logo-cropped.svg'
                    alt="NovaTra"
                    className="block lg:absolute right-5 lg:right-14 top-56 -rotate-2 w-80 lg:w-80 mb-3"
                />

                {/* MLSC Logo */}
                <img
                    src={mlsclogo}
                    alt="MLSC"
                    className="mr-auto md:mr-0 block lg:absolute right-5 top-4 rotate-6 w-25 lg:w-44 sm:w-48 lg:mb-3"
                />

                {/* Red Clip */}
                <motion.img
                    src={redclip}
                    alt="clip"
                    key="red"
                    initial={{ opacity: 0, y: 50, rotate: 180 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 190 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="z-10 absolute -bottom-16 md:-bottom-20 sm:right-20 w-20 sm:w-28 mb-3 -rotate-15 hover:-rotate-10 transition-transform duration-300"
                />
            </section>
        </div>
    );
};

export default About;
