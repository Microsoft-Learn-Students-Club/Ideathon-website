import React from 'react';
import Faq from '../components/faq';
import Timeline from '../components/Timeline';
import Domains from '../components/Domains';
import Prizes from '../components/Prizes';
import GeneralGuidelines from '../components/GeneralGuidelines';
import About from '../components/About';

const Home = () => {
    return (
        <>
            <div id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <h1 className="font-bold text-4xl text-black dark:text-white text-center mt-10">Welcome to the Ideathon!</h1>
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
