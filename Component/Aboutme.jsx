import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Aboutme = () => {
    const greetings = ["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "Olá"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-5xl mt-12 sm:mt-20 mx-auto px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 relative">
                <div className="order-2 sm:order-none w-full sm:w-80 px-2 sm:px-2 text-center sm:text-left">
                    <div className="justify-center sm:justify-start flex">
                        <div className="h-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={greetings[index]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-lg sm:text-xl font-medium"
                                >
                                    {greetings[index]}
                                </motion.h3>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="justify-center sm:justify-start flex">
                        <h1 className="text-2xl sm:text-4xl">
                            <span>I am </span>
                            <span className="font-semibold">Varun,</span>
                            <div className="bg-green-500 w-fit pl-2 p-1 pr-2 rounded-2xl hover:scale-105 transform transition duration-200 cursor-pointer mt-2 mb-2 flex items-center justify-center">
                                <img src="fiverr.png" className="h-3" alt="" />
                                <h2 className="text-xs sm:text-sm pl-2 pr-2">
                                    <a href="https://www.fiverr.com/s/WErLRRR">Level 2 Seller on Fiverr</a>
                                </h2>
                            </div>
                        </h1>
                    </div>
                    <div className="flex justify-center sm:justify-start">
                        <p className="text-center sm:text-start text-xs sm:text-sm">
                            <i>
                                “Good editing is invisible — but unforgettable.” <br />
                                I'm a video editor turning raw footage into scroll-stopping content since 2020.
                                Specializing in Reels, Shorts, and YouTube edits that captivate and convert.
                            </i>
                        </p>
                    </div>
                    <div className="mt-3 flex items-center justify-center sm:justify-start gap-5">
                        <a
                            href="#contact"
                            className="bg-black text-white font-semibold w-fit p-2 sm:p-2 sm:pl-5 sm:pr-5 rounded-2xl hover:scale-105 transform transition duration-200 cursor-pointer text-sm sm:text-base"
                        >
                            HIRE ME
                        </a>
                    </div>
                </div>

                <div className="order-1 sm:order-none w-full sm:w-70 h-auto flex items-center justify-center relative mt-4 sm:mt-0">
                    <div className="absolute top-0 left-0 w-full h-full sm:w-60 sm:h-65 bg-gradient-to-br from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] rounded-full blur-3xl opacity-70 z-0"></div>

                    <img
                        className="h-35 sm:h-75 sm:w-80 object-cover
                   rounded-full sm:rounded-none
                   z-10 sm:z-0 sm:absolute sm:bottom-[-150px]"
                        src="pfp.png"
                        alt=""
                    />
                </div>


            </div>

            <div className="flex items-center justify-center mt-3 ">
                <div className="bg-white/10 backdrop-blur-md  border border-white/20 shadow-md rounded-2xl p-4 sm:p-6 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-4 cursor-pointer z-3">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                        <div className="text-center">
                            <h2 className="text-xs sm:text-sm">Satisfied Clients:</h2>
                            <h2 className="text-3xl sm:text-5xl font-semibold">80+</h2>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xs sm:text-sm">Highest Views:</h2>
                            <h2 className="text-3xl sm:text-5xl font-semibold">2M+</h2>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xs sm:text-sm">Experience:</h2>
                            <h2 className="text-3xl sm:text-5xl font-semibold">4Y+</h2>
                        </div>
                    </div>
                    <div className="text-center w-full sm:w-50 mt-4 sm:mt-0">
                        <h3 className="text-xs sm:text-sm mb-2">Happy clients</h3>
                        <div className="flex items-center justify-center">
                            <img className="h-6 w-6 sm:h-8 sm:w-8 object-cover rounded-full hover:scale-105 duration-200 transition transform cursor-pointer" src="1.jpg" alt="" />
                            <img className="h-6 w-6 sm:h-8 sm:w-8 object-cover rounded-full -ml-2 hover:scale-105 duration-200 transition transform cursor-pointer" src="8.jpg" alt="" />
                            <img className="h-6 w-6 sm:h-8 sm:w-8 object-cover rounded-full -ml-2 hover:scale-105 duration-200 transition transform cursor-pointer" src="2.jpg" alt="" />
                            <img className="h-6 w-6 sm:h-8 sm:w-8 object-cover rounded-full -ml-2 hover:scale-105 duration-200 transition transform cursor-pointer" src="3.jpg" alt="" />
                            <img className="h-6 w-6 sm:h-8 sm:w-8 object-cover rounded-full -ml-2 hover:scale-105 duration-200 transition transform cursor-pointer" src="4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
