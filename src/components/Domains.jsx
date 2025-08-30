import React from 'react';

const Domains = () => {
    const domains = [
        { title: 'Artificial Intelligence', description: 'Explore machine learning, computer vision, and natural language processing.' },
        { title: 'Web Development', description: 'Build full-stack web applications using modern frameworks and technologies.' },
        { title: 'Blockchain & FinTech', description: 'Innovate with decentralized applications and financial technology solutions.' },
        { title: 'Mobile Applications', description: 'Create native or cross-platform mobile apps for iOS and Android.' },
        { title: 'Social Good', description: 'Develop projects that address real-world problems and make a positive impact.' },
    ];

    return (
        <div id="domains" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-8">
            <div className="text-center max-w-4xl">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Hackathon Domains</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{domain.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{domain.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Domains;