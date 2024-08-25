import React from 'react';
import pic from "../../public/home.png";

const projects = [
    {
        title: 'CryptoTrendZ',
        description: 'Made for login and signup both functionality working to authenticate users if they have signed up already.',
        technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'Three.js', 'Chart.js', 'CoinGeckoAPI'],
        image: 'https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg',
        url: 'https://crypto-trendz.netlify.app/'
    },
    {
        title: 'FashionNest',
        description: 'An Application for Ecommerce shopping made with muti features such as filtering and adding to cart with eye catchy styling.',
        technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'Redux Toolkit'],
        image: 'https://fashionnest.netlify.app/assets/hero-fozJKOYE.png',
        url: 'https://fashionnest.netlify.app/'
    },
    {
        title: 'CodeWithh',
        description: 'A code editor with an additional feature ingtegration of both codepen and compiler for a particular programming language.',
        technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'ChakraUI', 'PistonAPI'],
        image: 'https://pics.craiyon.com/2023-05-27/06538c41a3dd4a43b24553f26c0c7a5c.webp',
        url: 'https://codewithh.netlify.app/'
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
        <div name='Projects' className='bg-black pt-10 pb-10'>
            <div className='flex justify-center text-black font-bold text-2xl md:text-3xl pt-4 text-white'>
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
