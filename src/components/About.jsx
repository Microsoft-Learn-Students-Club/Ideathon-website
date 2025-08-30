import React from 'react'

const About = () => {
    return (
        <div id="about" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-8">
            <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Our Event</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Welcome to our annual hackathon! This event brings together students, developers, and creators from all backgrounds to build, learn, and innovate. Our goal is to foster a collaborative environment where you can turn your ideas into reality. Whether you're a seasoned programmer or just starting, our hackathon is the perfect place to challenge yourself and connect with like-minded individuals. We believe that great ideas can come from anywhere, and we're excited to see what you create.
                </p>
            </div>
        </div>
    );
};
export default About
