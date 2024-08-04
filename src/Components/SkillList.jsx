import React from 'react';

const SkillList = ({ skills }) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">{skills.length > 0 && skills[0].category}</h3>
            {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
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
