import React from 'react';

const Prizes = () => {
    return (
        <div id="prizes" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-8">
            <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Prizes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-yellow-400 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900">1st Place</h3>
                        <p className="text-gray-800 text-lg">Cash Prize: $5000</p>
                    </div>
                    <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900">2nd Place</h3>
                        <p className="text-gray-800 text-lg">Cash Prize: $3000</p>
                    </div>
                    <div className="bg-amber-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-white">3rd Place</h3>
                        <p className="text-gray-200 text-lg">Cash Prize: $1000</p>
                    </div>
                </div>
                <p className="mt-8 text-gray-600 dark:text-gray-400">
                    In addition to cash prizes, winners will receive exciting tech gadgets and mentorship opportunities from leading industry experts.
                </p>
            </div>
        </div>
    );
};


export default Prizes;