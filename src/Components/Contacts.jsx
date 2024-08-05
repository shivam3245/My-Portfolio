import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ReactTyped } from "react-typed";

function Contacts() {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        try {
            await axios.post("https://getform.io/f/alljgpla", userInfo);
            toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <>
            <div
                name="Contact"
                className="max-w-screen-2xl container px-4 md:px-20 bg-gradient-to-b from-blue-200 to-gray-950"
            >
                <div className="flex justify-center pt-20">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        <ReactTyped
                            className="text-black font-bold pl-2"
                            strings={["Contact me"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop={true}
                        />
                    </h1>

                </div>

                <div className="flex justify-center text-sm md:text-lg px-6 md:px-10"><span>Please fill out the form below to contact me</span></div>
                <div className=" flex flex-col items-center justify-center mt-5">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        //action="https://getform.io/f/alljgpla"
                        //method="POST"
                        className="bg-white w-72 md:w-96  px-8 py-6 rounded-xl border border-2 border-black animate-darkToLight"
                    >
                        <div className="sm:flex sm:justify-center">
                            <h1 className="text-md md:text-xl font-semibold mb-4 p-1">Send Your Message</h1></div>
                        <div className="flex flex-col mb-4 ">
                            <label className="block text-gray-700">FullName</label>
                            <input
                                {...register("name", { required: true })}
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your fullname"
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                {...register("email", { required: true })}
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email address"
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Enter your Query"
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contacts;
