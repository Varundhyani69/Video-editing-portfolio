import React, { useRef } from 'react';

const LongSamples = () => {
    const containerRef = useRef();

    const handleScroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 500;
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const videos = [
        'https://www.youtube.com/embed/VNAjphOOi7A',
        'https://www.youtube.com/embed/1yVKTd8Msm0',
        'https://www.youtube.com/embed/5S0SxZ1WAZA',
    ];

    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="w-[600px] bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl py-10 px-6 relative overflow-hidden">
                <h2 className="text-black text-2xl font-semibold mb-6 text-center">
                    Long-form Showcase
                </h2>

                {/* Left Arrow */}
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                    <button
                        className="text-white bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:scale-110 transition"
                        onClick={() => handleScroll('left')}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </div>

                {/* Right Arrow */}
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                    <button
                        className="text-white bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:scale-110 transition"
                        onClick={() => handleScroll('right')}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                {/* Video Scroll Section */}
                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar justify-start snap-x snap-mandatory"
                >
                    {videos.map((video, index) => (
                        <iframe
                            key={index}
                            src={video}
                            className="rounded-xl snap-center w-[500px] h-[280px] shrink-0"
                            title={`YouTube video ${index}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LongSamples;
