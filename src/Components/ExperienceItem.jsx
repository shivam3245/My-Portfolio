import React from 'react';

const ExperienceItem = ({ experience }) => {
    return (
        <div className="bg-black  border-4 md:border-x-6 md:border-y-6  p-2 md:p-6 rounded-lg shadow-lg flex-1  animate-rgb-border">
            <h3 className="text-xl font-semibold mb-2 hover:scale-105 duration-200 cursor-pointer">{experience.role}</h3>
            <p className="text-purple-500 mb-4">{experience.date}</p>
            <ul className="list-disc pl-5 space-y-2">
                {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceItem;
