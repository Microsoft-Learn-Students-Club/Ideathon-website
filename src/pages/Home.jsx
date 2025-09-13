import React from 'react';
import Faq from '../components/Faq';
import Timeline from '../components/Timeline';
import Domains from '../components/Domains';
import Prizes from '../components/Prizes';
import GeneralGuidelines from '../components/GeneralGuidelines';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Roles from '../components/Roles';

const Home = () => {
    return (
        <>
            <div id="home" className="min-h-screen flex items-center justify-center bg-yellow-50">
                <Hero />
            </div>
            {/* Simple wavy line */}
            <div className="w-full flex justify-center -mt-4 bg-yellow-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 50"
                    className="w-full h-12 pb-5"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 25 Q 25 0, 50 25 T 100 25 T 150 25 T 200 25 T 250 25 T 300 25 T 350 25 T 400 25 T 450 25 T 500 25"
                        stroke="black"
                        strokeWidth="7"
                        fill="transparent"
                    />
                </svg>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="timeline">
                <Timeline />
            </div>
            {/* <div id="domains">
                <Domains />
            </div> */}
            <div id="roles">
                <Roles />
            </div>
            <div id="prizes">
                <Prizes />
            </div>
            <div id="general-guidelines">
                <GeneralGuidelines />
            </div>
            <div id="faqs">
                <Faq />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    );
};

export default Home;
