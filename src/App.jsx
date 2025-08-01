import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Aboutme from '../Component/Aboutme.jsx';
import Expertise from '../Component/Expertise.jsx';
import Testimonials from '../Component/Testimonials.jsx';
import Contactme from '../Component/Contactme.jsx';
import Navbar from '../Component/Navbar.jsx';
import Samples from '../Component/Samples.jsx';
import GreetingIntro from '../Component/GreetingIntro.jsx';
import './App.css';

const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence>
      {showIntro ? (
        <GreetingIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="flex flex-col bg-[#F9F9F9] items-center justify-center text-center gap-3 mt-2 scroll-smooth">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='flex items-center justify-center'
          >
            <Navbar />
          </motion.div>

          <AnimatedSection id="about">
            <Aboutme />
          </AnimatedSection>

          <AnimatedSection id="expertise">
            <Expertise />
          </AnimatedSection>

          <AnimatedSection id="samples">
            <Samples />
          </AnimatedSection>

          <AnimatedSection id="testimonials">
            <Testimonials />
          </AnimatedSection>

          <AnimatedSection id="contact">
            <div className='w-150'>
              <Contactme />
            </div>
          </AnimatedSection>
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;
