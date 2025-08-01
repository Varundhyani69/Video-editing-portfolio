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
        <div className=" w-180 mt-20">
            <div className='flex items-center justify-center gap-8'>
                <div className='w-80 h-50'>
                    <div className='justify-start flex'>
                        <div className='h-8 overflow-hidden'>
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={greetings[index]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-xl font-medium"
                                >
                                    {greetings[index]}
                                </motion.h3>
                            </AnimatePresence>
                        </div>

                    </div>
                    <div className='justify-start flex'>
                        <h1 className=' text-4xl'>
                            <span>I am </span>
                            <span className='font-semibold'>Varun,</span>
                            <div className='bg-green-500 w-fit pl-2 p-1 pr-  rounded-2xl hover:scale-105 transform transition duration-200 cursor-pointer mt-2 mb-2 flex items-center justify-center'>
                                <img src="fiverr.png" className='h-3' alt="" />
                                <h2 className='text-sm pl-2 pr-2'> <a href="https://www.fiverr.com/s/WErLRRR">Level 2 Seller on Fiverr</a></h2>
                            </div>
                        </h1>
                    </div>
                    <div className='flex justify-start'>
                        <p className='text-start text-sm'><i>
                            “Good editing is invisible — but unforgettable.” <br />
                            I'm a video editor turning raw footage into scroll-stopping content since 2020.
                            Specializing in Reels, Shorts, and YouTube edits that captivate and convert.</i></p>
                    </div>
                    <div className='mt-3 flex items-center justify-start gap-5'>
                        <a href="#contact" className='bg-[#4ba3c3] w-fit p-1 pl-4 pr-4 rounded-2xl hover:scale-105 transform transition duration-200 cursor-pointer'>
                            HIRE ME
                        </a>


                    </div>
                </div>
                <div className='w-60 h-70 items-center justify-center flex relative top-5'>

                    <div className="absolute top-15 left-11 w-50 h-50 bg-gradient-to-br from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] rounded-full blur-3xl opacity-70 z-0"></div>
                    <img className=' h-75 object-cover z-1' src="pfp.png" alt="" />
                </div>
            </div>
            <div className='flex items-center justify-center mt-3'>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 w-150 flex ite justify-center gap-4 cursor-pointer z-3'>
                    <div className='flex items-center justify-center gap-3'>
                        <div>
                            <h2 className='text-sm'>
                                Satisfied Clients:
                            </h2>
                            <h2 className='text-5xl font-semibold'>
                                80+
                            </h2>
                        </div>
                        <div>
                            <h2 className='text-sm'>
                                Highest Views:
                            </h2>
                            <h2 className='text-5xl font-semibold'>
                                2M+
                            </h2>
                        </div>
                        <div>
                            <h2 className='text-sm'>
                                Experience:
                            </h2>
                            <h2 className='text-5xl font-semibold'>
                                4Y+
                            </h2>
                        </div>
                    </div>
                    <div className='text-center w-50'>
                        <h3 className='text-sm mb-2'>Happy clients</h3>
                        <div className='flex items-center justify-center '>
                            <img className='h-8 w-8 object-cover rounded-full hover:scale-105 items-center justify-center duration-200 transition transform cursor-pointer' src="1.jpg" alt="" />
                            <img className='h-8 w-8 object-cover rounded-full -ml-2 hover:scale-105 items-center justify-center duration-200 transition transform cursor-pointer' src="8.jpg" alt="" />
                            <img className='h-8 w-8 object-cover rounded-full -ml-2 hover:scale-105 items-center justify-center duration-200 transition transform cursor-pointer' src="2.jpg" alt="" />
                            <img className='h-8 w-8 object-cover rounded-full -ml-2 hover:scale-105 items-center justify-center duration-200 transition transform cursor-pointer' src="3.jpg" alt="" />
                            <img className='h-8 w-8 object-cover rounded-full -ml-2 hover:scale-105 items-center justify-center duration-200 transition transform cursor-pointer' src="4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
