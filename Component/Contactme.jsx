import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactMe = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.S_ID,
            import.meta.env.T_ID,
            form.current,
            import.meta.env.C_ID
        ).then(() => {
            setSent(true);
            setLoading(false);
            form.current.reset();
            setTimeout(() => setSent(false), 4000);
        }).catch(() => {
            setLoading(false);
            alert("Failed to send email. Try again.");
        });
    };

    return (

        <div className="min-h-screen w-full flex items-center justify-center mt-4 text-black px-6">
            <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-3xl p-10 w-full max-w-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="bg-white/10 border border-black/20 p-3 rounded-xl focus:outline-none placeholder-black text-black"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="bg-white/10 border border-black/20 p-3 rounded-xl focus:outline-none placeholder-black text-black"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                        className="bg-white/10 border border-black/20 p-3 rounded-xl focus:outline-none placeholder-black text-black"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-black border text-white border-black/30 rounded-xl py-3 font-semibold hover:scale-105 transition transform duration-200 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {sent && (
                        <p className="text-green-400 text-center font-medium mt-2">✅ Message sent successfully!</p>
                    )}
                </form>
            </motion.div>
        </div>
    );
};

export default ContactMe;
