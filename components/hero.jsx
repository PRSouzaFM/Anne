import { useEffect } from 'react';
import Image from 'next/image.js';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Hero() {
  const controls = useAnimation();
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(./other_hands.png)' }}>
        <motion.div
          className="hero-content mb-96 text-center font-light"
          ref={inViewRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}>
          <div className="max-w-md">
            <motion.h1
              className="text-2xl text-white font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              Mediação de Conflitos
            </motion.h1>
            <motion.p
              className="py-6 text-white font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}>
              A mediação valoriza o diálogo e a comunicação, enquanto o judiciário muitas vezes perpetua o conflito.
            </motion.p>
          </div>
        </motion.div>
        <div className='self-end grid place-items-center mb-16'>
          <Image src="/mouse.svg" className='animate-bounce' width={50} height={50} draggable='false' alt='Scroll Down Mouse' />
          <h1 className='text-center'>Role a página</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
