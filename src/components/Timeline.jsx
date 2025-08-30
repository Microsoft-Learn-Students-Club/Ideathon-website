import React from 'react';

const Timeline = () => {
    return (
        <div id="timeline" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-8">
            <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Event Timeline</h2>
                <div className="relative">
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 absolute h-full left-1/2 -translate-x-1/2"></div>
                    <div className="grid gap-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="order-1 md:order-none w-full md:w-1/2 md:pr-10 text-right">
                                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Day 1: Opening Ceremony</h3>
                                <p className="text-gray-600 dark:text-gray-400">Event kickoff, keynote speakers, and team formation.</p>
                            </div>
                            <div className="order-1 md:order-none w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white">1</div>
                            <div className="order-1 md:order-none w-full md:w-1/2 md:pl-10 text-left"></div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="order-1 md:order-none w-full md:w-1/2 md:pr-10 text-right"></div>
                            <div className="order-1 md:order-none w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white">2</div>
                            <div className="order-1 md:order-none w-full md:w-1/2 md:pl-10 text-left">
                                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Day 2: Hacking & Workshops</h3>
                                <p className="text-gray-600 dark:text-gray-400">24-hour non-stop hacking, mentorship, and technical workshops.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="order-1 md:order-none w-full md:w-1/2 md:pr-10 text-right">
                                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Day 3: Judging & Awards</h3>
                                <p className="text-gray-600 dark:text-gray-400">Project submissions, presentations, final judging, and closing ceremony.</p>
                            </div>
                            <div className="order-1 md:order-none w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white">3</div>
                            <div className="order-1 md:order-none w-full md:w-1/2 md:pl-10 text-left"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Timeline;