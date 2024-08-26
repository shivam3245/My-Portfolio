import React from 'react';

const Education = () => {
    return (

        <div name="Education">
            <div className="bg-gray-950 bg-center bg-cover bg-fixed text-white py-12 px-4 md:px-20 ">
                <h1 className="md:text-3xl text-2xl font-bold text-center mb-10 p-2 ">My Education</h1>
                <div className="space-y-8">

                    <div className="bg-[#252734] p-6 mx-5 rounded-lg relative border-l-4 border-[#7079F8]">
                        <div className="flex items-center space-x-4 mb-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXamUitjt-GaWohMMa9KKuYRXf95TYErp8Q&s"
                                alt="Atharva College Of Engineering"
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Atharva College Of Engineering</h2>
                                <p className="text-sm text-gray-400">Bachelor of Engineering - Electronics and Telecommunication Engineering</p>
                                <p className="text-sm text-gray-400">Feb 2020 - May 2024</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-2">Grade: 8.29 CGPA</p>
                        <p className="text-gray-300">
                            I have completed my Bachelors Of Engineering in Electronics and Telecommunications Engineering at Atharva College Of Engineering with an CGPA of 8.29
                        </p>

                    </div>
                    <div className="bg-[#252734] p-6 mx-5 rounded-lg relative border-l-4 border-[#7079F8]">
                        <div className="flex items-center space-x-4 mb-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7U0789Zfe4UWs6fo8DAkcthqfgeekhFvOQ&s"
                                alt="Shri TP Bhatia JR college of Science"
                                className="w-16 h-16 bg-white"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Shri TP Bhatia Jr College Of Science</h2>
                                <p className="text-sm text-gray-400">HSC(XII), Science with Computer Science</p>
                                <p className="text-sm text-gray-400">July 2019 - Apr 2020</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-2">Grade: 60%</p>
                        <p className="text-gray-300">
                            I have completed my class 12 high school education at Shri TP Bhatia Jr College of Science, Kandivali (West), where I studied Science with Computer Science.
                        </p>

                    </div>
                </div>
                <div className="bg-[#252734] p-6 mt-8  mx-5 rounded-lg relative border-l-4 border-[#7079F8]">
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src="https://content.jdmagicbox.com/v2/comp/mumbai/i6/022pxx22.xx22.121015100128.k1i6/catalogue/shri-dayanand-vidyalaya-kandivali-west-mumbai-english-medium-schools-2hotfrrkjx.jpg"
                            alt="Shri Dayanand Vidyalaya"
                            className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">Shri Dayanand Vidyalaya(English Medium)</h2>
                            <p className="text-sm text-gray-400">SSC 10th</p>
                            <p className="text-sm text-gray-400">June 2017 - April 2018</p>
                        </div>
                    </div>
                    <p className="text-gray-400 mb-2">Grade: 86.40%</p>
                    <p className="text-gray-300">
                        I have completed my SSC 10th from Shri Dayanand Vidyalaya English Medium where I scored with 86.40% in the year 2018 in 10th.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Education;
