import React from 'react';

const GeneralGuidelines = () => {
    return (
        <div id="guidelines" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-8">
            <div className="text-center max-w-3xl mb-8">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">General Guidelines & Rules</h2>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-3xl w-full">
                <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
                    <li>Team size can be a minimum of 2 and a maximum of 4 members.</li>
                    <li>All code must be original and written during the hackathon.</li>
                    <li>Projects must be submitted on time to be eligible for judging.</li>
                    <li>Mentors are available to provide guidance, but will not write code for you.</li>
                    <li>Be respectful to your peers and staff. Any form of harassment will not be tolerated.</li>
                    <li>Have fun and enjoy the hacking process!</li>
                </ul>
            </div>
        </div>
    );
};


export default GeneralGuidelines