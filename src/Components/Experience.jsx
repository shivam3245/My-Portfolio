import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {
    const experiences = [
        {
            role: 'Software Developer Intern',
            company: 'RK Software Solutions',

            description: [
                'Built a dynamic and responsive frontend using React and TailwindCSS, enabling real-time tracking of over 100 inquiries, 50+ quotations, and multiple customer transactions daily with data visualization through Chart.js.',
                "Developed JWT-based authentication and RESTful APIs using Node.js and Express.js, optimizing security and performance. Reduced overall latency by 20% and minimized redundant API calls for improved efficiency"
            ],
        },
        {
            role: 'Software Developer Intern',
            company: 'ZEE Entertainment Enterprises Ltd',

            description: [
                'Developed a Producer Empanelment Form module under BizApp, a business application used by 100+ producers for streamlined onboarding.',
                'Utilized React and Bootstrap to enhance user experience and achieve 100% responsiveness across devices.',
                'Collaborated with a 5-member team, implementing efficient API handling for accurate database storage.'
            ]
        }

    ];

    return (
        <div name="Work Experience" className="bg-[url(https://img.lovepik.com/bg/20231228/an-empty-office-with-people-working-on-computers_2495630_wh860.png)] bg-fixed bg-cover bg-center text-white p-10 shadow-lg max-w-8xl mx-auto pt-10 md:pt-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 hover:scale-110 duration-200 cursor-pointer">Work Experience</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 md:text-lg text-sm mb-8 md:mb-16">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
