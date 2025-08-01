import React, { useEffect, useState } from 'react';

const greetings = ["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "Olá"];

const GreetingIntro = ({ onFinish }) => {
    const [index, setIndex] = useState(0);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 350);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setHide(true);
            setTimeout(onFinish, 50);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onFinish]);

    if (hide) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50">
            <h1 className="text-4xl font-bold">
                {greetings[index] || ''}
            </h1>
        </div>
    );
};

export default GreetingIntro;
