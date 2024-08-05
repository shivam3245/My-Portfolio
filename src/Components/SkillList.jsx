import React from 'react';

const SkillList = ({ skills, category }) => {
    return (
        <div className='p-2 border border-4 border-gray-500'>
            <h3 className="text-lg md:text-2xl mb-4 text-center ">{category}</h3>
            {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-zinc-50 h-2.5 rounded-full"
                            style={{ width: skill.level }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillList;
