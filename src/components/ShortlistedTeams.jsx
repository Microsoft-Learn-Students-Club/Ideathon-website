import React from 'react'

const ShortlistedTeams = () => {
    const shortlistedTeams = [
        { name: 'Team Innovators', project: 'AI-Powered Study Assistant' },
        { name: 'Code Wizards', project: 'Decentralized Voting Platform' },
        { name: 'Alpha Squad', project: 'Smart Home Energy Management' },
        { name: 'The Misfits', project: 'Real-time Language Translator' },
        { name: 'Creative Coders', project: 'Sustainable Urban Planning Model' },
        { name: 'Binary Builders', project: 'Gamified Fitness Tracker' },
        { name: 'Tech Titans', project: 'Interactive 3D Art Gallery' },
        { name: 'Synergy Seven', project: 'Open-Source Healthcare Records System' },
        { name: 'Pixel Pioneers', project: 'Procedural Terrain Generator' },
        { name: 'Circuit Breakers', project: 'IoT-based Water Quality Monitor' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-8">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Shortlisted Teams</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shortlistedTeams.map((team, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{team.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{team.project}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShortlistedTeams;
