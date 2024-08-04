import React from "react";
import pic from "../../public/home.png";
import { ImWhatsapp } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
    return (
        <>
            <div
                name="Home"
                className="max-w-screen-2xl container pt-1 px-4 md:px-20 mb-20 bg-gradient-to-b from-blue-200 to-slate-400"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome To My Feed</span>
                        <div className="flex space-x-2 text-2xl md:text-4xl">
                            <h1>Hello, I'm </h1>
                            {/* <span >Developer</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Shivam Yadav", "Software Developer", "a Programmer"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-lg text-justify">
                            I'm Shivam Yadav, a passionate React developer with a knack for building dynamic and responsive web applications. I hold a degree in B.E EXTC from Mumbai University, I have worked on several web development projects which sharpened my technical skills and problem-solving abilities. My expertise includes creating reusable React components, managing state with hooks and Redux, and integrating RESTful APIs. With a strong command of modern JavaScript, HTML5, and CSS3, I ensure my designs are both functional and visually appealing. I'm dedicated to continuous learning and staying updated with the latest web development trends. When I'm not coding, I enjoy contributing to open-source projects and engaging with the developer community.
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="  space-y-2">
                                <h1 className="font-bold text-center ">Available on</h1>
                                <ul className="flex space-x-5 ">
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100005207358572" target="_blank">
                                            <FaSquareFacebook className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/shivam-yadav-89835321b/" target="_blank">
                                            <FaLinkedin className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/917304578150" target="_blank">
                                            <ImWhatsapp className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/shivamyadav321" target="_blank">
                                            <FaTelegram className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/shivam3245" target="_blank">
                                            <FaGithub className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" space-y-2">
                                <h1 className="font-bold text-center">Currently working on</h1>
                                <div className="flex space-x-5">
                                    <FaHtml5 className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiCss3 className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <RiJavascriptFill className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaReact className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-12 mt-8 order-1 ">
                        <img
                            src={pic}
                            className="md:w-[550px] md:h-[550px] animate-darkToLight uneven-border"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
