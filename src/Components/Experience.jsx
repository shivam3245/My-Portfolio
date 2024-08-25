import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {
    const experiences = [
        {
            role: 'Software Developer Intern at ZEE Entertainment Enterprises Ltd',
            date: 'March 2024 - April 2024',
            description: [
                'Worked on Bizapp which is a business application of the organization for producers, actors and employees',
                'Got opportunity to build Producer Employment Form using React vite and Bootstrap with interactive features',
                'Collaborated with UX/UI designers to understand the design pattern and required features and functions of the form.',
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
        <div name="Work Experience" className="bg-[url(https://img.lovepik.com/bg/20231228/an-empty-office-with-people-working-on-computers_2495630_wh860.png)] bg-fixed bg-cover bg-center text-white p-10 shadow-lg max-w-8xl mx-auto pt-10 md:pt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 hover:scale-110 duration-200 cursor-pointer">Work Experience</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 md:text-lg text-sm mb-8 md:mb-16">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
