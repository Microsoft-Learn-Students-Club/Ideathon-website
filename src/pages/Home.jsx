import React from 'react';
import Faq from '../components/Faq';
import Timeline from '../components/Timeline';
import Domains from '../components/Domains';
import Prizes from '../components/Prizes';
import GeneralGuidelines from '../components/GeneralGuidelines';
import About from '../components/About';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <div id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="timeline">
                <Timeline />
            </div>
            <div id="domains">
                <Domains />
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
        </>
    );
};

export default Home;
