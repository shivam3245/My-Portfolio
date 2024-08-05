import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {
    const experiences = [
        {
            role: 'Software Developer Intern at ZEE Entertainment Enterprises Ltd',
            date: 'March 2024 - April 2024',
            description: [
                'Worked on Bizapp which is a business application of the organization for producers, actors and employees',
                'Got opportunity to build Producer Employment Form using React vite and Bootstrap for interactive functions',
                'Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web applications.',
            ],
        },
        {
            role: 'Software Developer Intern at RK Software Solutions',
            date: 'December 2023 - February 2024',
            description: [
                'Built responsive web applications using React.js and implemented reusable components for consistency',
                'Enhanced performance through code splitting, lazy loading, and resolving bottlenecks.',
                'Connected applications to RESTful APIs and ensured data integrity with effective error handling.',
            ],
        }
    ];

    return (
        <div name="Work Experience" className="bg-gradient-to-b from-gray-950 to-blue-200 text-white p-10 shadow-lg max-w-8xl mx-auto pt-16">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-8 hover:scale-110 duration-200 cursor-pointer">Work Experience</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 md:text-lg text-sm">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
