import React from 'react';

const projects = [
    {
        title: 'CryptoTrendZ',
        description: 'Made for login and signup both functionality working to authenticate users if they have signed up already.',
        technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'Three.js', 'Chart.js', 'CoinGeckoAPI'],
        image: 'https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg',
        url: 'https://crypto-trendz.netlify.app/',
        codeUrl: 'https://github.com/shivam3245/CryptoTrendZ/tree/main/crypto-current'
    },
    {
        title: 'FashionNest',
        description: 'An Application for Ecommerce shopping made with muti features such as filtering and adding to cart with eye catchy styling.',
        technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'Redux Toolkit'],
        image: 'https://fashionnest.netlify.app/assets/hero-fozJKOYE.png',
        url: 'https://fashionnest.netlify.app/',
        codeUrl: 'https://github.com/shivam3245/Ecommerce'
    },
    {
        title: 'CodeWithh',
        description: 'A code editor with an additional feature ingtegration of both codepen and compiler for a particular programming language.',
        technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'ChakraUI', 'PistonAPI'],
        image: 'https://pics.craiyon.com/2023-05-27/06538c41a3dd4a43b24553f26c0c7a5c.webp',
        url: 'https://codewithh.netlify.app/',
        codeUrl: 'https://github.com/shivam3245/Code-Withh'
    },
    {
        title: 'Multifeatured TODO App',
        description: 'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
        technologies: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React'],
        image: 'https://i.pinimg.com/originals/5e/81/9a/5e819a5ce865476b73087fd1276e7c3e.png',
        url: 'https://multi-featured-todo.netlify.app/',
        codeUrl: 'https://github.com/shivam3245/Shivam-todo'
    },
    {
        title: 'Currency Converter',
        description: 'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJ56KvG5TlZdaceG4EE5hvGjDwHAYarcJsA&s',
        url: 'https://currency-converter.netlify.app/',
        codeUrl: 'https://github.com/shivam3245/Currency-Converter-web-app'
    }
];

const Projects = () => {
    return (
        <div name='Projects' className='bg-black pt-10 pb-10'>
            <div className='flex justify-center font-bold text-2xl md:text-3xl pt-4 pb-2 text-white'>
                <h1>My Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center md:gap-8 gap-5 p-8">
                {projects.map((project, index) => (
                    <div
                        className="bg-gray-800 hover:scale-105 duration-200 font-semibold cursor-pointer text-white rounded-lg overflow-hidden shadow-lg md:w-72 border border-2 border-black flex flex-col"
                        key={index}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-gray-700 rounded-full px-3 py-1 text-sm">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 mt-auto">
                            <div className="flex justify-between">
                                {project.codeUrl && (
                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-black hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
                                            View Code
                                        </button>
                                    </a>
                                )}
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                                            Live App
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
