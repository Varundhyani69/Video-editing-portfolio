import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Steffen Mirrox",
        feedback: "Absolutely blown away by the quality and speed. Varun is a magician with video edits!",
        image: "1.jpg"
    },
    {
        name: "Stefan Jugrastan",
        feedback: "He truly understands storytelling and adds magic to every frame. Highly recommend!",
        image: "8.jpg"
    },
    {
        name: "Marcus Allen",
        feedback: "Consistent, creative, and incredibly reliable. The best editor I’ve worked with.",
        image: "3.jpg"
    },
    {
        name: "jdcobbproductions",
        feedback: "Editing was clean, precise, and emotionally on point. Incredible work.",
        image: "4.jpg"
    },
    {
        name: "ground2airmedia",
        feedback: "I had very specific vision and Varun exceeded every expectation. Masterful edits.",
        image: "5.jpg"
    },
    {
        name: "Life With Hamid",
        feedback: "Professional, fast, and so easy to work with. Will definitely hire again!",
        image: "6.jpg"
    },
    {
        name: "Reagency Media",
        feedback: "Working with Varun was an absolute game-changer. His attention to detail and smooth transitions elevated our content far beyond expectations. He just gets the vision and delivers fast.",
        image: "7.webp"
    },
    {
        name: "Lime Emil",
        feedback: "I’ve hired many editors, but Varun stands out. The animations were on point, storytelling was tight, and communication was flawless. He’s now my go-to editor for every project.",
        image: "2.jpg"
    }
];

const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + visibleCards) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - visibleCards + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        return Array.from({ length: visibleCards }, (_, i) =>
            testimonials[(currentIndex + i) % testimonials.length]
        );
    };

    return (
        <div className="w-screen px-6 py-16 mt-4 text-black flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-12">What Clients Say</h2>

            <div className="relative w-screen  flex items-center justify-center">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 bg-black/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-white  z-10"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-10">
                    <AnimatePresence mode="popLayout">
                        {getVisibleTestimonials().map((t, i) => (
                            <motion.div
                                key={t.name + i}
                                className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-md flex flex-col items-center text-center hover:scale-105 transform transition duration-200 h-80"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={cardVariants}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-4 border border-white/30" />
                                <p className="text-sm italic mb-3">"{t.feedback}"</p>
                                <h4 className="text-lg font-medium">{t.name}</h4>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-0 bg-black/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-white  z-10"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
