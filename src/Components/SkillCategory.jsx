import React from 'react';
import { FiCode, FiTool, FiUsers, FiDatabase } from 'react-icons/fi';

const icons = {
    Frontend: <FiCode size={24} />,
    Database: <FiDatabase size={24} />,
    Tools: <FiTool size={24} />,
    'Soft Skills': <FiUsers size={24} />,
};

const SkillCategory = ({ category, selectedCategory, setSelectedCategory }) => {
    const isSelected = category === selectedCategory;
    return (
        <div
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center justify-center p-4 mx-3 rounded-lg cursor-pointer transition-transform transform ${isSelected ? 'bg-purple-600 scale-105' : 'bg-gray-800 hover:scale-105'
                }`}
        >
            <div>{icons[category]}</div>
            <span className="text-center text-sm md:text-lg font-semibold p-0.5">{category}</span>
        </div>
    );
};

export default SkillCategory;
