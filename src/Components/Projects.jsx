import React from 'react';
import pic from "../../public/home.png";

const projects = [
    {
        title: 'User Authentication',
        description: 'Made for login and signup both functionality working to authenticate users if they have signed up already.',
        technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzWyZCkjKiA2h2ci8F49riUdyvmB0iSIk-w&s'
    },
    {
        title: 'Chatting Application',
        description: 'An application for chatting in real time is made by using web sockets and react for eyye catching UI/UX and logic',
        technologies: ['HTML', 'CSS', 'React', 'Websockets'],
        image: 'https://cdn.dribbble.com/users/7159574/screenshots/18575668/media/d213bbbf615c603059d1deef87b9adb4.jpg?resize=400x300&vertical=center'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects, skills, and contact information.',
        technologies: ['HTML', 'CSS', 'React', 'TailwindCSS'],
        image: 'https://pics.craiyon.com/2023-05-27/06538c41a3dd4a43b24553f26c0c7a5c.webp'
    },
    {
        title: 'Multifeatured TODO App',
        description: 'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
        technologies: ['HTML', 'CSS', 'TailwindCSS', 'React'],
        image: 'https://i.pinimg.com/originals/5e/81/9a/5e819a5ce865476b73087fd1276e7c3e.png',
        url: 'https://multi-featured-todo.netlify.app/'  // Add the URL here
    }
];

const Projects = () => {
    return (
        <div name='Projects' className='bg-gradient-to-b from-blue-200 to-blue-200'>
            <div className='flex justify-center text-black font-bold text-2xl md:text-3xl pt-4'>
                <h1>My Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-8">

                {projects.map((project, index) => (
                    <div className="bg-gray-800 hover:scale-105 duration-200 font-semibold cursor-pointer text-white rounded-lg overflow-hidden shadow-lg w-72 border border-2 border-black" key={index}>
                        {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            </a>
                        ) : (
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-gray-700 rounded-full px-3 py-1 text-sm">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
