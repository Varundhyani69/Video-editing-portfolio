import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sample = () => {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndex((prevIndex) => prevIndex.map((i) => (i + 1) % 5));
    };

    const handlePrev = () => {
        setPositionIndex((prevIndex) => prevIndex.map((i) => (i - 1 + 5) % 5));
    };

    // Shorts video IDs from your URLs
    const shorts = [
        "r_6TgmOli-g",
        "6vcEGIo1FXk",
        "bRyIpAjlkkQ",
        "K183iGSOLXQ",
        "AjF7xO3corY",
    ];

    const positions = ['center', 'left1', 'left', 'right', 'right1'];

    const IframeVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { x: '-90%', scale: 0.5, zIndex: 1 },
        right: { x: '90%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 },
    };

    return (
        <div className='bg-white/10 w-full backdrop-blur-md border border-white/20 shadow-md rounded-2xl mt-6 mb-5'>
            <h1 className='mb-6 mt-8 text-2xl font-semibold'>REELS SHOWCASE</h1>
            <div className='flex -mt-12 items-center w-full flex-col justify-center h-screen relative overflow-hidden'>
                {shorts.map((id, index) => (
                    <motion.iframe
                        key={id}
                        src={`https://www.youtube.com/embed/${id}`}
                        className='rounded-2xl'
                        initial="center"
                        animate={positions[positionIndex[index]]}
                        variants={IframeVariants}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: '40%',
                            height: '70%',
                            position: 'absolute',
                            border: 'none',
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ))}
                <div className='z-10 flex items-center justify-center gap-55'>
                    <button
                        className='text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full h-15 w-15 z-10'
                        onClick={handlePrev}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                        className='text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full h-15 w-15 z-10'
                        onClick={handleNext}
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sample;