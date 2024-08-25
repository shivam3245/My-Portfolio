import React, { useState } from 'react';
import SkillCategory from './SkillCategory';
import SkillList from './SkillList';

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Frontend');

    const skills = {
        Frontend: [
            { name: 'HTML5', level: '80%' },
            { name: 'Tailwind CSS', level: '50%' },
            { name: 'BootStrap', level: '50%' },
            { name: 'JavaScript', level: '65%' },
            { name: 'React.js', level: '60%' },
        ],
        Database: [
            { name: 'MS SQL Server', level: '60%' },

        ],
        Tools: [
            { name: 'VSCode', level: '70%' },
            { name: 'Git', level: '60%' },
            { name: 'GitHub', level: '60%' },
            { name: 'Autocad', level: '65%' },

        ],
        'Soft Skills': [
            { name: 'Communication', level: '90%' },
            { name: 'Teamwork', level: '85%' },
            { name: 'Problem Solving', level: '80%' },
            { name: 'Time Management', level: '75%' },
        ],
    };

    return (
        <div name="Skills" className=''>
            <div className="bg-black text-white pl-8 pr-8 pt-5 pb-[8%] shadow-lg max-w-8xl ">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8">Technical Skills</h2>
                <div className="grid grid-cols-2 gap-4 mb-8 ">
                    {Object.keys(skills).map((category) => (
                        <SkillCategory
                            key={category}
                            category={category}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    ))}
                </div>
                <SkillList skills={skills[selectedCategory]} category={selectedCategory} />
            </div>
        </div>
    );
};
export default Skills;
