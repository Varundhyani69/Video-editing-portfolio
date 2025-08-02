import React, { useRef, useEffect } from 'react';

const LongSamples = () => {
    const containerRef = useRef();

    const handleScroll = (direction) => {
        const container = containerRef.current;
        if (container) {
            const iframeWidth = container.querySelector('iframe')?.offsetWidth || 500;
            const scrollAmount = iframeWidth + 24; // Include gap (6 * 4)
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

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', (e) => {
                e.preventDefault();
                container.scrollBy({
                    left: e.deltaY > 0 ? 100 : -100,
                    behavior: 'smooth',
                });
            }, { passive: false });
        }
        return () => {
            if (container) container.removeEventListener('wheel', () => { });
        };
    }, []);

    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="w-full max-w-[600px] bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl py-6 px-4 sm:px-6 relative overflow-hidden">
                <h2 className="text-black text-2xl font-semibold mb-6 text-center">
                    Long-form Showcase
                </h2>

                {/* Left Arrow */}
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                    <button
                        className="text-white bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-full hover:scale-110 transition"
                        onClick={() => handleScroll('left')}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </div>

                {/* Right Arrow */}
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                    <button
                        className="text-white bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-full hover:scale-110 transition"
                        onClick={() => handleScroll('right')}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                {/* Video Scroll Section */}
                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar justify-start snap-x snap-mandatory"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {videos.map((video, index) => (
                        <iframe
                            key={index}
                            src={`${video}?controls=1`}
                            className="rounded-xl snap-center w-[80vw] sm:w-[500px] h-[40vh] sm:h-[280px] shrink-0"
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