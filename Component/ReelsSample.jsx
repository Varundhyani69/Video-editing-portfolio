import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sample = () => {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNext = () => {
        setPositionIndex((prev) => prev.map((i) => (i + 1 + 5) % 5));
    };

    const handlePrev = () => {
        setPositionIndex((prev) => prev.map((i) => (i - 1) % 5));
    };

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
        <div className='bg-white/10 w-full backdrop-blur-md border border-white/20 shadow-md rounded-2xl mt-6 mb-5 pb-10'>
            <h1 className='mb-6 mt-8 text-2xl font-semibold text-center'>SHORT-FORM SHOWCASE</h1>

            {!isMobile && (
                <div className='relative w-full h-[90vh] flex items-center justify-center overflow-hidden'>

                    <div className='absolute flex justify-between items-center w-[calc(270px+6rem)] h-[480px] z-10 pointer-events-none'>
                        <button
                            onClick={handlePrev}
                            className='text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full h-10 w-10 flex items-center justify-center pointer-events-auto'
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className='text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full h-10 w-10 flex items-center justify-center pointer-events-auto'
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    {shorts.map((id, index) => {
                        const position = positions[positionIndex[index]];
                        const isCenter = position === 'center';

                        return (
                            <motion.iframe
                                key={id}
                                src={`https://www.youtube.com/embed/${id}`}
                                className='rounded-2xl'
                                initial="center"
                                animate={position}
                                variants={IframeVariants}
                                transition={{ duration: 0.5 }}
                                style={{
                                    width: '270px',
                                    height: '480px',
                                    position: 'absolute',
                                    border: 'none',
                                    pointerEvents: isCenter ? 'auto' : 'none',
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        );
                    })}
                </div>
            )}

            {isMobile && (
                <div className='flex flex-col items-center justify-center w-full gap-4 p-4'>
                    <motion.iframe
                        key={shorts[positionIndex[0]]}
                        src={`https://www.youtube.com/embed/${shorts[positionIndex[0]]}`}
                        className='rounded-xl'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: '100%',
                            aspectRatio: '9 / 16',
                            maxHeight: '480px',
                            border: 'none',
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className='flex justify-between w-full px-6 mt-2'>
                        <button
                            onClick={handlePrev}
                            className='text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full px-4 py-2'
                        >
                            <i className="fa-solid text-black fa-arrow-left"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className='text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full px-4 py-2'
                        >
                            <i className="fa-solid text-black fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sample;
